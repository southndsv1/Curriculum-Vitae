/**
 * Main JavaScript file for Dr. Shuvodeep De's Resume Website
 * Handles theme switching, GitHub API integration, animations, and interactions
 */

// ============================================
// Constants and Configuration
// ============================================
const GITHUB_USERNAME = 'shuvodeep-de'; // Update this with actual GitHub username
const GITHUB_API_BASE = 'https://api.github.com';
const THEME_KEY = 'theme-preference';

// ============================================
// Theme Management
// ============================================
class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('theme-toggle');
        this.currentTheme = this.getStoredTheme() || this.getPreferredTheme();
        this.init();
    }

    init() {
        // Set initial theme
        this.setTheme(this.currentTheme);

        // Add event listener
        this.themeToggle?.addEventListener('click', () => this.toggleTheme());

        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!this.getStoredTheme()) {
                this.setTheme(e.matches ? 'dark' : 'light');
            }
        });
    }

    getPreferredTheme() {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    getStoredTheme() {
        return localStorage.getItem(THEME_KEY);
    }

    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        this.updateThemeIcon(theme);
        localStorage.setItem(THEME_KEY, theme);
        this.currentTheme = theme;
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }

    updateThemeIcon(theme) {
        if (!this.themeToggle) return;
        const icon = this.themeToggle.querySelector('i');
        if (icon) {
            icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
        }
    }
}

// ============================================
// GitHub API Integration
// ============================================
class GitHubAPI {
    constructor(username) {
        this.username = username;
        this.cache = {};
        this.cacheExpiry = 3600000; // 1 hour in milliseconds
    }

    async fetchWithCache(url, cacheKey) {
        // Check cache first
        const cached = this.cache[cacheKey];
        if (cached && Date.now() - cached.timestamp < this.cacheExpiry) {
            return cached.data;
        }

        try {
            const response = await fetch(url);

            // Check rate limit
            const remaining = response.headers.get('X-RateLimit-Remaining');
            if (remaining !== null && parseInt(remaining) === 0) {
                console.warn('GitHub API rate limit exceeded');
                return null;
            }

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            // Cache the result
            this.cache[cacheKey] = {
                data: data,
                timestamp: Date.now()
            };

            return data;
        } catch (error) {
            console.error(`Error fetching ${url}:`, error);
            return null;
        }
    }

    async getUserData() {
        return this.fetchWithCache(
            `${GITHUB_API_BASE}/users/${this.username}`,
            'userData'
        );
    }

    async getRepositories() {
        return this.fetchWithCache(
            `${GITHUB_API_BASE}/users/${this.username}/repos?per_page=100&sort=updated`,
            'repositories'
        );
    }

    async getLanguageStats(repos) {
        const languageCounts = {};
        let totalBytes = 0;

        for (const repo of repos) {
            if (repo.language) {
                languageCounts[repo.language] = (languageCounts[repo.language] || 0) + 1;
            }
        }

        // Calculate percentages (simplified - based on repository count)
        const languages = Object.entries(languageCounts)
            .map(([name, count]) => ({
                name,
                count,
                percentage: 0
            }))
            .sort((a, b) => b.count - a.count)
            .slice(0, 5); // Top 5 languages

        const total = languages.reduce((sum, lang) => sum + lang.count, 0);
        languages.forEach(lang => {
            lang.percentage = ((lang.count / total) * 100).toFixed(1);
        });

        return languages;
    }
}

// ============================================
// GitHub UI Updater
// ============================================
class GitHubUI {
    constructor(api) {
        this.api = api;
    }

    async init() {
        await this.updateStats();
        await this.updateTopRepos();
        await this.updateLanguageStats();
    }

    async updateStats() {
        const userData = await this.api.getUserData();
        if (!userData) return;

        const repos = await this.api.getRepositories();
        if (!repos) return;

        // Count total stars across all repos
        const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);

        // Update DOM
        this.updateElement('repo-count', userData.public_repos);
        this.updateElement('star-count', totalStars);
        this.updateElement('follower-count', userData.followers);
    }

    async updateTopRepos() {
        const repos = await this.api.getRepositories();
        if (!repos) return;

        // Get top 6 repos by stars
        const topRepos = repos
            .filter(repo => !repo.fork)
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .slice(0, 6);

        const container = document.getElementById('top-repos');
        if (!container) return;

        container.innerHTML = topRepos.map(repo => `
            <div class="repo-card">
                <a href="${repo.html_url}" target="_blank" class="repo-name">
                    <i class="fab fa-github"></i> ${repo.name}
                </a>
                <p class="repo-description">${repo.description || 'No description available'}</p>
                <div class="repo-stats">
                    ${repo.language ? `<span class="repo-stat"><i class="fas fa-circle"></i> ${repo.language}</span>` : ''}
                    <span class="repo-stat"><i class="fas fa-star"></i> ${repo.stargazers_count}</span>
                    <span class="repo-stat"><i class="fas fa-code-branch"></i> ${repo.forks_count}</span>
                </div>
            </div>
        `).join('');
    }

    async updateLanguageStats() {
        const repos = await this.api.getRepositories();
        if (!repos) return;

        const languages = await this.api.getLanguageStats(repos);
        const container = document.getElementById('language-stats');
        if (!container) return;

        const colors = {
            'Python': '#3572A5',
            'JavaScript': '#f1e05a',
            'C++': '#f34b7d',
            'Java': '#b07219',
            'FORTRAN': '#4d41b1',
            'TypeScript': '#2b7489',
            'Shell': '#89e051',
            'HTML': '#e34c26',
            'CSS': '#563d7c'
        };

        container.innerHTML = languages.map(lang => `
            <div class="language-bar">
                <div class="language-header">
                    <span class="language-name">${lang.name}</span>
                    <span class="language-percentage">${lang.percentage}%</span>
                </div>
                <div class="language-progress">
                    <div class="language-progress-fill"
                         style="width: ${lang.percentage}%; background-color: ${colors[lang.name] || '#666'}">
                    </div>
                </div>
            </div>
        `).join('');

        // Animate progress bars
        setTimeout(() => {
            document.querySelectorAll('.language-progress-fill').forEach(el => {
                el.style.transition = 'width 1s ease-in-out';
            });
        }, 100);
    }

    updateElement(id, value) {
        const element = document.getElementById(id);
        if (element) {
            // Animate number change
            this.animateValue(element, 0, value, 1000);
        }
    }

    animateValue(element, start, end, duration) {
        const range = end - start;
        const increment = range / (duration / 16);
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
                current = end;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current);
        }, 16);
    }
}

// ============================================
// Navigation Management
// ============================================
class Navigation {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.mobileMenuToggle = document.getElementById('mobile-menu-toggle');
        this.mobileMenu = document.getElementById('mobile-menu');
        this.init();
    }

    init() {
        // Scroll effect for navbar
        window.addEventListener('scroll', () => this.handleScroll());

        // Mobile menu toggle
        this.mobileMenuToggle?.addEventListener('click', () => this.toggleMobileMenu());

        // Close mobile menu when clicking on a link
        this.mobileMenu?.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => this.closeMobileMenu());
        });

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => this.handleAnchorClick(e));
        });
    }

    handleScroll() {
        if (window.scrollY > 100) {
            this.navbar?.classList.add('scrolled');
        } else {
            this.navbar?.classList.remove('scrolled');
        }
    }

    toggleMobileMenu() {
        this.mobileMenu?.classList.toggle('active');
        const icon = this.mobileMenuToggle?.querySelector('i');
        if (icon) {
            icon.className = this.mobileMenu?.classList.contains('active')
                ? 'fas fa-times'
                : 'fas fa-bars';
        }
    }

    closeMobileMenu() {
        this.mobileMenu?.classList.remove('active');
        const icon = this.mobileMenuToggle?.querySelector('i');
        if (icon) {
            icon.className = 'fas fa-bars';
        }
    }

    handleAnchorClick(e) {
        const href = e.currentTarget.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }
}

// ============================================
// Back to Top Button
// ============================================
class BackToTop {
    constructor() {
        this.button = document.getElementById('back-to-top');
        this.init();
    }

    init() {
        if (!this.button) return;

        window.addEventListener('scroll', () => this.handleScroll());
        this.button.addEventListener('click', () => this.scrollToTop());
    }

    handleScroll() {
        if (window.scrollY > 300) {
            this.button?.classList.add('visible');
        } else {
            this.button?.classList.remove('visible');
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// ============================================
// Intersection Observer for Animations
// ============================================
class ScrollAnimations {
    constructor() {
        this.options = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };
        this.init();
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, this.options);

        // Observe all cards and sections
        const elements = document.querySelectorAll(`
            .expertise-card,
            .timeline-item,
            .grant-card,
            .award-card,
            .service-card,
            .cert-card,
            .skill-category,
            .github-stat-card,
            .repo-card
        `);

        elements.forEach(el => observer.observe(el));
    }
}

// Add CSS for animate-in class
const style = document.createElement('style');
style.textContent = `
    .expertise-card,
    .timeline-item,
    .grant-card,
    .award-card,
    .service-card,
    .cert-card,
    .skill-category,
    .github-stat-card,
    .repo-card {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .expertise-card.animate-in,
    .timeline-item.animate-in,
    .grant-card.animate-in,
    .award-card.animate-in,
    .service-card.animate-in,
    .cert-card.animate-in,
    .skill-category.animate-in,
    .github-stat-card.animate-in,
    .repo-card.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// ============================================
// Contact Form Handler
// ============================================
class ContactForm {
    constructor() {
        this.form = document.getElementById('contact-form');
        this.init();
    }

    init() {
        if (!this.form) return;

        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(this.form);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');

        // Create mailto link
        const mailtoLink = `mailto:deshuvodeep@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;

        // Open email client
        window.location.href = mailtoLink;

        // Optional: Reset form after a delay
        setTimeout(() => {
            this.form.reset();
        }, 1000);
    }
}

// ============================================
// Loading Skeleton for GitHub Section
// ============================================
function showGitHubLoading() {
    const repoContainer = document.getElementById('top-repos');
    if (repoContainer) {
        repoContainer.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: var(--text-muted);">
                <i class="fas fa-spinner fa-spin" style="font-size: 2rem; margin-bottom: 1rem;"></i>
                <p>Loading GitHub data...</p>
            </div>
        `;
    }
}

// ============================================
// Error Handling for GitHub API
// ============================================
function showGitHubError() {
    const repoContainer = document.getElementById('top-repos');
    if (repoContainer) {
        repoContainer.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: var(--text-muted);">
                <i class="fas fa-exclamation-triangle" style="font-size: 2rem; margin-bottom: 1rem; color: var(--accent-color);"></i>
                <p>Unable to load GitHub data. Please check your internet connection or visit my
                <a href="https://github.com/${GITHUB_USERNAME}" target="_blank" style="color: var(--accent-color);">GitHub profile</a> directly.</p>
            </div>
        `;
    }
}

// ============================================
// Initialize Everything When DOM is Ready
// ============================================
document.addEventListener('DOMContentLoaded', async () => {
    // Initialize theme manager
    new ThemeManager();

    // Initialize navigation
    new Navigation();

    // Initialize back to top button
    new BackToTop();

    // Initialize scroll animations
    new ScrollAnimations();

    // Initialize contact form
    new ContactForm();

    // Initialize GitHub integration
    try {
        showGitHubLoading();
        const githubAPI = new GitHubAPI(GITHUB_USERNAME);
        const githubUI = new GitHubUI(githubAPI);
        await githubUI.init();
    } catch (error) {
        console.error('Failed to initialize GitHub integration:', error);
        showGitHubError();
    }
});

// ============================================
// Performance Optimization
// ============================================
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add smooth reveal for sections on load
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Log initialization
console.log('%c🚀 Website initialized successfully!', 'color: #0891b2; font-size: 16px; font-weight: bold;');
console.log('%cDeveloped for Dr. Shuvodeep De', 'color: #1a365d; font-size: 14px;');

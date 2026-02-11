// Main Application
class SuperheroApp {
    constructor() {
        this.currentSection = 'home';
        this.theme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }

    setup() {
        // Initialize theme
        this.initTheme();
        
        // Initialize navigation
        this.initNavigation();
        
        // Load heroes
        this.loadHeroes();
        
        // Initialize modal
        this.initModal();
        
        // Initialize contact form
        this.initContactForm();
        
        // Initialize animations
        this.initAnimations();
        
        console.log('🦸 Superhero App initialized!');
    }

    initTheme() {
        const themeToggle = document.getElementById('themeToggle');
        document.documentElement.setAttribute('data-theme', this.theme);
        
        themeToggle.addEventListener('click', () => {
            this.theme = this.theme === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', this.theme);
            localStorage.setItem('theme', this.theme);
        });
    }

    initNavigation() {
        const navbar = document.getElementById('navbar');
        const mobileMenu = document.getElementById('mobileMenu');
        const navLinks = document.getElementById('navLinks');
        const links = document.querySelectorAll('.nav-link');

        // Scroll effect
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Mobile menu toggle
        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Smooth scrolling and section switching
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                this.showSection(targetId);
                
                // Update active link
                links.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                
                // Close mobile menu
                mobileMenu.classList.remove('active');
                navLinks.classList.remove('active');
                
                // Smooth scroll to section
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }

    showSection(sectionId) {
        // Hide all sections
        document.querySelectorAll('.section, .hero-section').forEach(section => {
            section.classList.remove('active-section');
        });
        
        // Show target section
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active-section');
            this.currentSection = sectionId;
        }
    }

    loadHeroes() {
        const heroesGrid = document.getElementById('heroesGrid');
        heroesGrid.innerHTML = '';

        heroes.forEach((hero, index) => {
            const heroCard = this.createHeroCard(hero, index);
            heroesGrid.appendChild(heroCard);
        });
    }

    createHeroCard(hero, index) {
        const card = document.createElement('div');
        card.className = 'hero-card';
        card.setAttribute('data-aos', 'fade-up');
        card.setAttribute('data-aos-delay', index * 100);

        card.innerHTML = `
            <img src="${hero.image}" alt="${hero.name}" class="hero-card-image" onerror="this.src='https://via.placeholder.com/350x300?text=${hero.name}'">
            <div class="hero-card-content">
                <h3 class="hero-card-title">${hero.name}</h3>
                <p class="hero-card-description">${hero.description}</p>
                <div class="hero-card-footer">
                    <span style="color: var(--text-tertiary); font-size: 0.9rem;">${hero.realName}</span>
                    <a href="#" class="learn-more">
                        <span>Learn More</span>
                        <span>→</span>
                    </a>
                </div>
            </div>
        `;

        card.addEventListener('click', (e) => {
            e.preventDefault();
            this.showHeroDetails(hero);
        });

        return card;
    }

    showHeroDetails(hero) {
        const modal = document.getElementById('heroModal');
        const modalContent = document.getElementById('modalContent');
        
        // Build details HTML
        let detailsHTML = '<div class="hero-detail-header">';
        detailsHTML += `<h2 class="hero-detail-title">${hero.name}</h2>`;
        detailsHTML += `<p style="color: var(--marvel-red); font-size: 1.2rem; font-weight: 600;">${hero.realName}</p>`;
        detailsHTML += '</div>';
        
        detailsHTML += '<div class="hero-detail-body">';
        detailsHTML += '<div class="hero-detail-images">';
        if (hero.images && hero.images.length > 0) {
            hero.images.forEach(img => {
                detailsHTML += `<img src="${img}" alt="${hero.name}" onerror="this.src='https://via.placeholder.com/350x300?text=${hero.name}'">`;
            });
        }
        detailsHTML += '</div>';
        
        detailsHTML += '<div class="hero-detail-info">';
        for (const [key, value] of Object.entries(hero.details)) {
            const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
            detailsHTML += `<p><strong>${label}:</strong> ${value}</p>`;
        }
        detailsHTML += '</div>';
        detailsHTML += '</div>';
        
        // Add close button back
        detailsHTML = `<button class="modal-close" id="modalClose" aria-label="Close">×</button>` + detailsHTML;
        
        modalContent.innerHTML = detailsHTML;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Re-attach close event
        document.getElementById('modalClose').addEventListener('click', () => this.closeModal());
    }

    initModal() {
        const modal = document.getElementById('heroModal');
        const overlay = document.getElementById('modalOverlay');
        
        overlay.addEventListener('click', () => this.closeModal());
        
        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                this.closeModal();
            }
        });
    }

    closeModal() {
        const modal = document.getElementById('heroModal');
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    initContactForm() {
        const form = document.getElementById('contactForm');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleContactSubmit(form);
        });
    }

    handleContactSubmit(form) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        // Validate
        if (!data.name || !data.email || !data.subject || !data.message) {
            this.showToast('Please fill in all fields', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            this.showToast('Please enter a valid email address', 'error');
            return;
        }

        // Simulate sending
        this.showToast('Message sent successfully! We\'ll get back to you soon. 🚀', 'success');
        form.reset();
        
        console.log('Form submitted:', data);
    }

    initAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('aos-animate');
                }
            });
        }, observerOptions);

        document.querySelectorAll('[data-aos]').forEach(el => {
            observer.observe(el);
        });
    }

    showToast(message, type = 'info') {
        const container = document.getElementById('toastContainer');
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        
        const icon = type === 'success' ? '✅' : 
                     type === 'error' ? '❌' : 'ℹ️';

        toast.innerHTML = `
            <div style="display: flex; align-items: center; gap: 1rem;">
                <span style="font-size: 1.5rem;">${icon}</span>
                <span style="flex: 1;">${message}</span>
            </div>
        `;

        container.appendChild(toast);

        setTimeout(() => {
            toast.style.transform = 'translateX(400px)';
            toast.style.opacity = '0';
            setTimeout(() => toast.remove(), 300);
        }, 5000);
    }
}

// Initialize app
const app = new SuperheroApp();
window.app = app;

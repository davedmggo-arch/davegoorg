// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarClose = document.getElementById('sidebarClose');
    
    // Create overlay element
    const overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    document.body.appendChild(overlay);
    
    // Toggle sidebar function
    function toggleSidebar() {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.classList.toggle('sidebar-open');
    }
    
    // Close sidebar function
    function closeSidebar() {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.classList.remove('sidebar-open');
    }
    
    // Event listeners
    menuToggle.addEventListener('click', toggleSidebar);
    sidebarClose.addEventListener('click', closeSidebar);
    overlay.addEventListener('click', closeSidebar);
    
    // Close sidebar when pressing Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && sidebar.classList.contains('active')) {
            closeSidebar();
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && sidebar.classList.contains('active')) {
            closeSidebar();
        }
    });
    
    // Initialize progress bar
    const progressFill = document.getElementById('progressFill');
    const progressPercentage = document.getElementById('progressPercentage');
    
    if (progressFill && progressPercentage) {
        const percentage = progressPercentage.textContent;
        progressFill.style.width = percentage;
    }
    
    // Fun Facts functionality
    const funFacts = [
        "The first 3D animation was created in 1972 for the film Futureworld.",
        "Blender was originally developed as an in-house tool by a Dutch animation studio.",
        "The term '3D modeling' was first used in the 1960s by Ivan Sutherland.",
        "Pixar's Toy Story was the first fully computer-animated feature film.",
        "The first 3D printer was invented in 1983 by Chuck Hull.",
        "3D artists use topology to ensure models deform correctly during animation.",
        "Subdivision surface modeling was developed by Edwin Catmull and Jim Clark.",
        "Normal maps were introduced in 1998 to simulate high-detail geometry."
    ];
    
    let currentFactIndex = 0;
    const funFactsElement = document.getElementById('funFacts');
    const funFactsContent = document.getElementById('funFactsContent');
    
    function showRandomFact() {
        if (funFactsElement && funFactsContent) {
            const randomIndex = Math.floor(Math.random() * funFacts.length);
            funFactsContent.textContent = funFacts[randomIndex];
            funFactsElement.classList.add('active');
            
            setTimeout(() => {
                funFactsElement.classList.remove('active');
            }, 5000);
        }
    }
    
    // Show a fun fact every 30 seconds
    setInterval(showRandomFact, 30000);
    
    // Show first fact after 10 seconds
    setTimeout(showRandomFact, 10000);
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
                // Close sidebar if open
                if (sidebar.classList.contains('active')) {
                    closeSidebar();
                }
            }
        });
    });
    
    // Week navigation highlighting
    const weekItems = document.querySelectorAll('.week-item');
    const currentWeekTitle = document.getElementById('currentWeekTitle');
    
    if (weekItems.length > 0 && currentWeekTitle) {
        const currentWeek = parseInt(currentWeekTitle.textContent.match(/\d+/)[0]);
        
        weekItems.forEach((item, index) => {
            const weekNumber = parseInt(item.getAttribute('data-week'));
            if (weekNumber < currentWeek) {
                item.classList.add('completed');
            } else if (weekNumber === currentWeek) {
                item.classList.add('current');
            }
        });
    }
    
    // Initialize tooltips
    const tooltips = document.querySelectorAll('[data-tooltip]');
    
    tooltips.forEach(tooltip => {
        tooltip.addEventListener('mouseenter', function() {
            const tooltipText = this.getAttribute('data-tooltip');
            const tooltipElement = document.createElement('div');
            tooltipElement.className = 'tooltip';
            tooltipElement.textContent = tooltipText;
            document.body.appendChild(tooltipElement);
            
            const rect = this.getBoundingClientRect();
            tooltipElement.style.top = `${rect.bottom + 5}px`;
            tooltipElement.style.left = `${rect.left + rect.width / 2 - tooltipElement.offsetWidth / 2}px`;
            
            // Show tooltip with a slight delay
            setTimeout(() => {
                tooltipElement.classList.add('active');
            }, 10);
        });
        
        tooltip.addEventListener('mouseleave', function() {
            const tooltipElement = document.querySelector('.tooltip');
            if (tooltipElement) {
                tooltipElement.remove();
            }
        });
    });
    
    // Add animations on scroll
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    
    function checkScroll() {
        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.classList.add('active');
            }
        });
    }
    
    // Check on load
    checkScroll();
    
    // Check on scroll
    window.addEventListener('scroll', checkScroll);
    
    // Add hover effects to cards
    const cards = document.querySelectorAll('.concept-card, .blender-card, .resource-card, .criteria-card, .week-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('hover-lift');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('hover-lift');
        });
    });
    
    // Add hover effects to images
    const images = document.querySelectorAll('.example-image img, .timeline-image img');
    
    images.forEach(img => {
        img.addEventListener('mouseenter', function() {
            this.classList.add('hover-scale');
        });
        
        img.addEventListener('mouseleave', function() {
            this.classList.remove('hover-scale');
        });
    });
    
    // Add interactive effect to CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-button');
    
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.classList.add('hover-lift');
        });
        
        button.addEventListener('mouseleave', function() {
            this.classList.remove('hover-lift');
        });
    });
    
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add parallax effect to hero section
    const heroSection = document.querySelector('.hero');
    const floatingShapes = document.querySelector('.floating-shapes');
    
    if (heroSection && floatingShapes) {
        window.addEventListener('scroll', () => {
            const scrollPosition = window.pageYOffset;
            const speed = 0.5;
            
            floatingShapes.style.transform = `translateY(${scrollPosition * speed}px)`;
        });
    }
    
    // Add interactive effect to week navigation
    const weekLinks = document.querySelectorAll('.week-link');
    
    weekLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Remove active class from all links
            weekLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
        });
    });
    
    // Add loading animation to images
    const allImages = document.querySelectorAll('img');
    
    allImages.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });
        
        // If image is already loaded (cached)
        if (img.complete) {
            img.classList.add('loaded');
        }
    });
});

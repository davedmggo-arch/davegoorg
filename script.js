// script.js - Template JavaScript for generated pages

document.addEventListener('DOMContentLoaded', function() {
    // Sidebar toggle
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarClose = document.getElementById('sidebarClose');
    
    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', function() {
            sidebar.classList.add('active');
        });
    }
    
    if (sidebarClose && sidebar) {
        sidebarClose.addEventListener('click', function() {
            sidebar.classList.remove('active');
        });
    }
    
    // Close sidebar when clicking outside
    document.addEventListener('click', function(event) {
        if (sidebar && !sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
            sidebar.classList.remove('active');
        }
    });
    
    // Handle YouTube links on mobile
    function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
    
    function isYouTubeUrl(url) {
        return url.match(/^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/);
    }
    
    function convertToMobileYouTubeUrl(url) {
        const match = url.match(/^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/);
        if (match) {
            const videoId = match[4];
            return `vnd.youtube://${videoId}`;
        }
        return url;
    }
    
    // Process all links on the page
    document.querySelectorAll('a').forEach(link => {
        const href = link.getAttribute('href');
        if (href && isYouTubeUrl(href)) {
            if (isMobile()) {
                link.setAttribute('href', convertToMobileYouTubeUrl(href));
            } else {
                link.setAttribute('target', '_blank');
            }
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (sidebar) {
                    sidebar.classList.remove('active');
                }
            }
        });
    });
    
    // Add animation classes when elements come into view
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
    
    // Update progress bar
    const progressFill = document.getElementById('progress-fill');
    if (progressFill) {
        const weekItems = document.querySelectorAll('.week-item:not(.break-week)');
        const completedWeeks = document.querySelectorAll('.week-item.completed').length;
        const currentWeek = document.querySelector('.week-item.current');
        
        let progress = completedWeeks;
        if (currentWeek) {
            // Add partial progress for current week
            progress += 0.5;
        }
        
        const percentage = Math.round((progress / weekItems.length) * 100);
        progressFill.style.width = `${percentage}%`;
        
        // Update percentage text
        const progressPercentage = document.querySelector('.progress-percentage');
        if (progressPercentage) {
            progressPercentage.textContent = `${percentage}%`;
        }
    }
    
    // Get current week from URL
    const urlPath = window.location.pathname;
    const weekMatch = urlPath.match(/semester(\d+)week(\d+)\.html/i);
    
    if (weekMatch) {
        const semester = weekMatch[1];
        const weekNumber = weekMatch[2];
        
        // Mark the current week
        const weekLinks = document.querySelectorAll('.week-link');
        weekLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && href.includes(`semester${semester}week${weekNumber}`)) {
                link.parentElement.classList.add('current');
            }
        });
        
        // Mark previous weeks as completed
        const weekItems = document.querySelectorAll('.week-item');
        let foundCurrent = false;
        
        weekItems.forEach(item => {
            if (item.classList.contains('break-week')) {
                return;
            }
            
            if (foundCurrent) {
                return;
            }
            
            if (item.classList.contains('current')) {
                foundCurrent = true;
            } else {
                item.classList.add('completed');
            }
        });
    }
});

// Date helper functions
Date.prototype.getWeek = function() {
    const date = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
    date.setUTCDate(date.getUTCDate() + 4 - (date.getUTCDay() || 7));
    const yearStart = new Date(Date.UTC(date.getUTCFullYear(),0,1));
    const weekNo = Math.ceil(( ( (date - yearStart) / 86400000) + 1)/7);
    return weekNo;
};

Date.prototype.getWeekName = function() {
    const week = this.getWeek();
    return `Week ${week}`;
};

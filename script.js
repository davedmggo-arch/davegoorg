// Sidebar toggle functionality
document.getElementById('menuToggle').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('active');
});

document.getElementById('sidebarClose').addEventListener('click', function() {
    document.getElementById('sidebar').classList.remove('active');
});

// Close sidebar when clicking outside
document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.getElementById('menuToggle');
    
    if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
        sidebar.classList.remove('active');
    }
});

// Active sidebar link highlighting
const sidebarLinks = document.querySelectorAll('.sidebar-nav a');

window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    sidebarLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Dynamic week progress tracker
function updateWeekProgress() {
    // Semester start date: September 1, 2025
    const semesterStart = new Date('2025-09-01');
    const currentDate = new Date();
    
    // Calculate weeks since semester start
    const timeDiff = currentDate.getTime() - semesterStart.getTime();
    const weeksDiff = Math.floor(timeDiff / (1000 * 3600 * 24 * 7));
    
    // Determine current week (1-13)
    let currentWeek = Math.max(1, Math.min(13, weeksDiff + 1));
    
    // If current date is before semester start, show week 1
    if (currentDate < semesterStart) {
        currentWeek = 1;
    }
    
    // Calculate progress percentage
    const progressPercentage = Math.round((currentWeek / 13) * 100);
    
    // Update progress display
    const progressTitle = document.getElementById('currentWeekTitle');
    const progressSubtitle = document.getElementById('currentProjectSubtitle');
    const progressFill = document.getElementById('progressFill');
    const progressPercentageEl = document.getElementById('progressPercentage');
    
    if (progressTitle) progressTitle.textContent = `Current Week: ${currentWeek}`;
    if (progressPercentageEl) progressPercentageEl.textContent = `${progressPercentage}%`;
    if (progressFill) progressFill.style.width = `${progressPercentage}%`;
    
    // Update project subtitle based on current week
    let projectSubtitle = '';
    if (currentWeek <= 3) {
        projectSubtitle = 'Robot Design & Prototyping Project';
    } else if (currentWeek <= 9) {
        projectSubtitle = '3D Robot Modeling Project';
    } else {
        projectSubtitle = 'Robot Environment Project';
    }
    if (progressSubtitle) progressSubtitle.textContent = projectSubtitle;
    
    // Update week items
    const weekItems = document.querySelectorAll('.week-item');
    weekItems.forEach((item, index) => {
        const weekNumber = index + 1;
        item.classList.remove('completed', 'active');
        
        if (weekNumber < currentWeek) {
            item.classList.add('completed');
        } else if (weekNumber === currentWeek) {
            item.classList.add('active');
        }
    });
}

// Initialize week progress on page load
updateWeekProgress();

// Update week progress every minute (to handle date changes)
setInterval(updateWeekProgress, 60000);
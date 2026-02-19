// ===== TAB NAVIGATION =====

document.addEventListener('DOMContentLoaded', function() {
    const tabItems = document.querySelectorAll('.tab-item');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Tab switching
    tabItems.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all tabs and contents
            tabItems.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            document.getElementById(`tab-${targetTab}`).classList.add('active');
            
            // Close mobile menu when tab is clicked
            if (window.innerWidth <= 767) {
                const sidebar = document.getElementById('sidebar');
                sidebar.classList.remove('mobile-open');
            }
            
            // Save active tab to localStorage
            localStorage.setItem('activeTab', targetTab);
            
            // Re-trigger stats animation if on about tab
            if (targetTab === 'about') {
                resetStatsAnimation();
            }
        });
    });
    
    // Restore last active tab
    const savedTab = localStorage.getItem('activeTab');
    if (savedTab) {
        const savedTabElement = document.querySelector(`.tab-item[data-tab="${savedTab}"]`);
        if (savedTabElement) {
            savedTabElement.click();
        }
    }
});

// Reset stats animation when switching back to about tab
function resetStatsAnimation() {
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        stat.textContent = '0';
    });
    
    // Re-trigger animation after short delay
    setTimeout(() => {
        const statsSection = document.querySelector('.stats-section');
        if (statsSection) {
            statsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }, 100);
}

// ===== PROJECT FILTERING =====

document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    let currentFilter = 'game';
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            currentFilter = this.getAttribute('data-filter');
            
            // Filter projects
            filterProjects(currentFilter);
        });
    });
    
    // Update filter counts
    updateFilterCounts();
    
    // Apply initial filter (show all projects on page load)
    filterProjects('game');
});

function filterProjects(category) {
    const projectItems = document.querySelectorAll('.project-item');
    let visibleCount = 0;
    
    projectItems.forEach(project => {
        const projectCategories = project.getAttribute('data-categories');
        
        if (category === 'all' || projectCategories.includes(category)) {
            project.classList.remove('hidden');
            // Add fade-in animation
            project.style.animation = 'fadeIn 0.3s ease-in';
            visibleCount++;
        } else {
            project.classList.add('hidden');
        }
    });
    
    // Show empty state if no projects match
    showEmptyState(visibleCount === 0);
}

function showEmptyState(show) {
    let emptyState = document.querySelector('.projects-empty-state');
    
    if (show) {
        if (!emptyState) {
            emptyState = document.createElement('div');
            emptyState.className = 'projects-empty-state';
            emptyState.innerHTML = `
                <i class="fa fa-filter"></i>
                <h3>No projects found</h3>
                <p>Try selecting a different category</p>
            `;
            document.getElementById('projects-container').appendChild(emptyState);
        }
        emptyState.style.display = 'block';
    } else {
        if (emptyState) {
            emptyState.style.display = 'none';
        }
    }
}

function updateFilterCounts() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    
    filterButtons.forEach(button => {
        const category = button.getAttribute('data-filter');
        let count = 0;
        
        if (category === 'all') {
            count = projectItems.length;
        } else {
            projectItems.forEach(project => {
                const categories = project.getAttribute('data-categories');
                if (categories && categories.includes(category)) {
                    count++;
                }
            });
        }
        
        // Optionally add count badge
        // Uncomment to show project counts in filter buttons
        /*
        const existingCount = button.querySelector('.filter-count');
        if (existingCount) {
            existingCount.textContent = count;
        } else {
            const countBadge = document.createElement('span');
            countBadge.className = 'filter-count';
            countBadge.textContent = count;
            button.appendChild(countBadge);
        }
        */
    });
}

// ===== URL HASH NAVIGATION =====
// Allow direct linking to specific tabs

document.addEventListener('DOMContentLoaded', function() {
    // Check URL hash on load
    const hash = window.location.hash.substring(1);
    if (hash) {
        const tabElement = document.querySelector(`.tab-item[data-tab="${hash}"]`);
        if (tabElement) {
            setTimeout(() => tabElement.click(), 100);
        }
    }
    
    // Update hash when tab changes
    const tabItems = document.querySelectorAll('.tab-item');
    tabItems.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            window.location.hash = targetTab;
        });
    });
});

// ===== KEYBOARD NAVIGATION =====

document.addEventListener('keydown', function(e) {
    // Don't interfere with typing in inputs
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return;
    }
    
    const tabItems = Array.from(document.querySelectorAll('.tab-item'));
    const activeTab = document.querySelector('.tab-item.active');
    const currentIndex = tabItems.indexOf(activeTab);
    
    // Arrow left: previous tab
    if (e.key === 'ArrowLeft' && e.ctrlKey) {
        e.preventDefault();
        const prevIndex = currentIndex > 0 ? currentIndex - 1 : tabItems.length - 1;
        tabItems[prevIndex].click();
    }
    
    // Arrow right: next tab
    if (e.key === 'ArrowRight' && e.ctrlKey) {
        e.preventDefault();
        const nextIndex = currentIndex < tabItems.length - 1 ? currentIndex + 1 : 0;
        tabItems[nextIndex].click();
    }
    
    // Number keys: direct tab access
    if (e.key >= '1' && e.key <= '3' && e.ctrlKey) {
        e.preventDefault();
        const index = parseInt(e.key) - 1;
        if (tabItems[index]) {
            tabItems[index].click();
        }
    }
});

// ===== SMOOTH SCROLL TO TOP ON TAB CHANGE =====

document.addEventListener('DOMContentLoaded', function() {
    const tabItems = document.querySelectorAll('.tab-item');
    
    tabItems.forEach(tab => {
        tab.addEventListener('click', function() {
            // Smooth scroll to top of main wrapper
            const mainWrapper = document.querySelector('.main-wrapper');
            if (mainWrapper) {
                mainWrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});

// ===== ACCESSIBILITY IMPROVEMENTS =====

document.addEventListener('DOMContentLoaded', function() {
    // Add ARIA attributes
    const tabItems = document.querySelectorAll('.tab-item');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabItems.forEach((tab, index) => {
        tab.setAttribute('role', 'tab');
        tab.setAttribute('aria-selected', tab.classList.contains('active'));
        tab.setAttribute('tabindex', tab.classList.contains('active') ? '0' : '-1');
    });
    
    tabContents.forEach(content => {
        content.setAttribute('role', 'tabpanel');
        content.setAttribute('aria-hidden', !content.classList.contains('active'));
    });
    
    // Update ARIA attributes on tab change
    tabItems.forEach(tab => {
        tab.addEventListener('click', function() {
            tabItems.forEach(t => {
                t.setAttribute('aria-selected', 'false');
                t.setAttribute('tabindex', '-1');
            });
            tabContents.forEach(c => {
                c.setAttribute('aria-hidden', 'true');
            });
            
            this.setAttribute('aria-selected', 'true');
            this.setAttribute('tabindex', '0');
            
            const targetTab = this.getAttribute('data-tab');
            const targetContent = document.getElementById(`tab-${targetTab}`);
            if (targetContent) {
                targetContent.setAttribute('aria-hidden', 'false');
            }
        });
    });
});
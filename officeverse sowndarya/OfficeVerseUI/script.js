// OfficeVerse Dashboard JavaScript
// Handles mobile navigation, theme switching, and UI interactions

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initializeMobileNavigation();
    initializeThemeToggle();
    initializeSearchFunctionality();
    initializeCalendarInteraction();
    initializeCardInteractions();
    initializeFilterFunctionality();
    initializeTooltips();
    
    // Set active navigation item based on current page
    setActiveNavigation();
});

/**
 * Mobile Navigation Functionality
 */
function initializeMobileNavigation() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const menuToggle = document.getElementById('menuToggle');
    const sidebarToggle = document.getElementById('sidebarToggle');
    
    // Toggle mobile menu
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            sidebar.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    
    // Close mobile menu
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', closeMobileMenu);
    }
    
    if (overlay) {
        overlay.addEventListener('click', closeMobileMenu);
    }
    
    // Close menu on navigation click (mobile)
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                closeMobileMenu();
            }
        });
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    });
}

function closeMobileMenu() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    
    if (sidebar) sidebar.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
}

/**
 * Theme Toggle Functionality
 */
function initializeThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle?.querySelector('i');
    const themeText = themeToggle?.querySelector('span');
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // Update theme toggle button
    updateThemeToggleButton(currentTheme, themeIcon, themeText);
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            // Apply new theme
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            // Update button
            updateThemeToggleButton(newTheme, themeIcon, themeText);
            
            // Add transition effect
            document.body.style.transition = 'background-color 0.3s ease';
            setTimeout(() => {
                document.body.style.transition = '';
            }, 300);
        });
    }
}

function updateThemeToggleButton(theme, icon, text) {
    if (icon && text) {
        if (theme === 'dark') {
            icon.className = 'fas fa-sun';
            text.textContent = 'Light Mode';
        } else {
            icon.className = 'fas fa-moon';
            text.textContent = 'Dark Mode';
        }
    }
}

/**
 * Search Functionality
 */
function initializeSearchFunctionality() {
    const searchInputs = document.querySelectorAll('.search-bar input');
    
    searchInputs.forEach(input => {
        input.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            handleSearch(searchTerm);
        });
        
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
    });
}

function handleSearch(searchTerm) {
    // This function would handle search logic based on current page
    // For now, it's a placeholder for future implementation
    console.log('Searching for:', searchTerm);
    
    // Example: Filter announcements on announcements page
    if (window.location.pathname.includes('announcements')) {
        filterAnnouncements(searchTerm);
    }
    
    // Example: Filter employees on directory page
    if (window.location.pathname.includes('directory')) {
        filterEmployees(searchTerm);
    }
}

function filterAnnouncements(searchTerm) {
    const announcements = document.querySelectorAll('.announcement-card');
    
    announcements.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const content = card.querySelector('.announcement-content').textContent.toLowerCase();
        const author = card.querySelector('.author-name').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || content.includes(searchTerm) || author.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = searchTerm ? 'none' : 'block';
        }
    });
}

function filterEmployees(searchTerm) {
    const employees = document.querySelectorAll('.employee-card');
    
    employees.forEach(card => {
        const name = card.querySelector('h3').textContent.toLowerCase();
        const role = card.querySelector('.employee-role').textContent.toLowerCase();
        const department = card.querySelector('.employee-department').textContent.toLowerCase();
        
        if (name.includes(searchTerm) || role.includes(searchTerm) || department.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = searchTerm ? 'none' : 'block';
        }
    });
}

/**
 * Calendar Interaction
 */
function initializeCalendarInteraction() {
    const calendarDays = document.querySelectorAll('.calendar-day:not(.inactive)');
    
    calendarDays.forEach(day => {
        day.addEventListener('click', function() {
            // Remove previous selection
            document.querySelectorAll('.calendar-day.selected').forEach(selected => {
                selected.classList.remove('selected');
            });
            
            // Add selection to clicked day
            this.classList.add('selected');
            
            // Update events list for selected date
            updateEventsForDate(this.textContent);
        });
    });
    
    // Calendar navigation
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            // This would handle month navigation
            console.log('Navigate calendar:', this.innerHTML.includes('left') ? 'previous' : 'next');
        });
    });
}

function updateEventsForDate(date) {
    const eventsHeader = document.querySelector('.events-header h3');
    if (eventsHeader) {
        eventsHeader.textContent = `Events for July ${date}, 2025`;
    }
    
    // This would typically fetch events for the selected date
    // For now, we'll just update the header
    console.log('Showing events for date:', date);
}

/**
 * Card Interactions
 */
function initializeCardInteractions() {
    // Info card hover effects
    const infoCards = document.querySelectorAll('.info-card');
    infoCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Announcement card interactions
    const announcementCards = document.querySelectorAll('.announcement-card');
    announcementCards.forEach(card => {
        const readMore = card.querySelector('.read-more');
        const content = card.querySelector('.announcement-content');
        
        if (readMore && content) {
            readMore.addEventListener('click', function() {
                if (content.style.webkitLineClamp) {
                    content.style.webkitLineClamp = 'unset';
                    content.style.display = 'block';
                    this.textContent = 'Read less';
                } else {
                    content.style.display = '-webkit-box';
                    content.style.webkitLineClamp = '3';
                    content.style.webkitBoxOrient = 'vertical';
                    content.style.overflow = 'hidden';
                    this.textContent = 'Read more';
                }
            });
        }
        
        // Bookmark functionality
        const bookmarkBtn = card.querySelector('.action-btn');
        if (bookmarkBtn) {
            bookmarkBtn.addEventListener('click', function() {
                const icon = this.querySelector('i');
                if (icon.classList.contains('fas')) {
                    icon.classList.remove('fas');
                    icon.classList.add('far');
                    this.style.color = 'var(--text-secondary)';
                } else {
                    icon.classList.remove('far');
                    icon.classList.add('fas');
                    this.style.color = 'var(--primary-color)';
                }
            });
        }
    });
    
    // Employee card interactions
    const employeeCards = document.querySelectorAll('.employee-card');
    employeeCards.forEach(card => {
        const messageBtn = card.querySelector('.action-btn.primary');
        const callBtn = card.querySelector('.action-btn:not(.primary)');
        
        if (messageBtn) {
            messageBtn.addEventListener('click', function() {
                const name = card.querySelector('h3').textContent;
                console.log('Opening message dialog for:', name);
                // This would typically open a message dialog
            });
        }
        
        if (callBtn) {
            callBtn.addEventListener('click', function() {
                const name = card.querySelector('h3').textContent;
                console.log('Initiating call to:', name);
                // This would typically initiate a call
            });
        }
    });
}

/**
 * Filter Functionality
 */
function initializeFilterFunctionality() {
    const filterSelects = document.querySelectorAll('.filter-select');
    
    filterSelects.forEach(select => {
        select.addEventListener('change', function() {
            applyFilters();
        });
    });
}

function applyFilters() {
    const departmentFilter = document.querySelector('.filter-select')?.value || '';
    const roleFilter = document.querySelectorAll('.filter-select')[1]?.value || '';
    const locationFilter = document.querySelectorAll('.filter-select')[2]?.value || '';
    
    const employeeCards = document.querySelectorAll('.employee-card');
    
    employeeCards.forEach(card => {
        const department = card.querySelector('.employee-department').textContent.toLowerCase();
        const role = card.querySelector('.employee-role').textContent.toLowerCase();
        
        let showCard = true;
        
        if (departmentFilter && !department.includes(departmentFilter.toLowerCase())) {
            showCard = false;
        }
        
        if (roleFilter && !role.includes(roleFilter.toLowerCase())) {
            showCard = false;
        }
        
        // Location filter would require additional data
        // For now, we'll just show/hide based on department and role
        
        card.style.display = showCard ? 'block' : 'none';
    });
}

/**
 * Tooltip Functionality
 */
function initializeTooltips() {
    const elementsWithTooltips = document.querySelectorAll('[title]');
    
    elementsWithTooltips.forEach(element => {
        const tooltipText = element.getAttribute('title');
        element.removeAttribute('title');
        
        element.addEventListener('mouseenter', function(e) {
            showTooltip(e, tooltipText);
        });
        
        element.addEventListener('mouseleave', function() {
            hideTooltip();
        });
    });
}

function showTooltip(event, text) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = text;
    tooltip.style.cssText = `
        position: absolute;
        background: var(--bg-primary);
        color: var(--text-primary);
        padding: 0.5rem;
        border-radius: var(--border-radius);
        font-size: 0.875rem;
        box-shadow: var(--shadow-md);
        z-index: 1000;
        pointer-events: none;
        max-width: 200px;
        word-wrap: break-word;
    `;
    
    document.body.appendChild(tooltip);
    
    const rect = event.target.getBoundingClientRect();
    tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
    tooltip.style.top = rect.top - tooltip.offsetHeight - 8 + 'px';
}

function hideTooltip() {
    const tooltip = document.querySelector('.tooltip');
    if (tooltip) {
        tooltip.remove();
    }
}

/**
 * Set Active Navigation
 */
function setActiveNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const currentPath = window.location.pathname;
    
    navItems.forEach(item => {
        const href = item.getAttribute('href');
        
        // Handle index.html or root path
        if ((currentPath === '/' || currentPath.endsWith('index.html')) && href === 'index.html') {
            item.classList.add('active');
        } else if (href !== 'index.html' && currentPath.includes(href.replace('.html', ''))) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

/**
 * Smooth Scrolling for Internal Links
 */
function initializeSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Lazy Loading for Images
 */
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

/**
 * Keyboard Navigation Support
 */
function initializeKeyboardNavigation() {
    document.addEventListener('keydown', function(e) {
        // Close mobile menu on Escape key
        if (e.key === 'Escape') {
            closeMobileMenu();
        }
        
        // Toggle theme on Ctrl+Shift+T
        if (e.ctrlKey && e.shiftKey && e.key === 'T') {
            const themeToggle = document.getElementById('themeToggle');
            if (themeToggle) {
                themeToggle.click();
            }
        }
        
        // Focus search on Ctrl+K
        if (e.ctrlKey && e.key === 'k') {
            e.preventDefault();
            const searchInput = document.querySelector('.search-bar input');
            if (searchInput) {
                searchInput.focus();
            }
        }
    });
}

/**
 * Performance Optimization
 */
function optimizePerformance() {
    // Throttle scroll events
    let ticking = false;
    
    function updateScrollPosition() {
        // Handle scroll-based animations or effects
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateScrollPosition);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
    
    // Debounce resize events
    let resizeTimeout;
    
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            // Handle resize-specific logic
            if (window.innerWidth > 768) {
                closeMobileMenu();
            }
        }, 250);
    });
}

/**
 * Error Handling
 */
function initializeErrorHandling() {
    window.addEventListener('error', function(e) {
        console.error('JavaScript error:', e.error);
        // In a real application, you might want to send this to a logging service
    });
    
    window.addEventListener('unhandledrejection', function(e) {
        console.error('Unhandled promise rejection:', e.reason);
        // Handle promise rejections
    });
}

/**
 * Utility Functions
 */
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

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Initialize additional features
document.addEventListener('DOMContentLoaded', function() {
    initializeSmoothScrolling();
    initializeLazyLoading();
    initializeKeyboardNavigation();
    optimizePerformance();
    initializeErrorHandling();
});

// Export functions for potential use in other scripts
window.OfficeVerse = {
    closeMobileMenu,
    updateThemeToggleButton,
    handleSearch,
    filterAnnouncements,
    filterEmployees,
    debounce,
    throttle
};

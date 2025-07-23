document.addEventListener('DOMContentLoaded', () => {
  initializeMobileNavigation();
  initializeThemeToggle();
  initializeSearchFunctionality();
  initializeCalendarInteraction();
  initializeCardInteractions();
  initializeFilterFunctionality();
  initializeTooltips();
  initializeSmoothScrolling();
  initializeLazyLoading();
  initializeKeyboardNavigation();
  optimizePerformance();
  initializeErrorHandling();
  setActiveNavigation();
});

function initializeMobileNavigation() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  const menuToggle = document.getElementById('menuToggle');
  const sidebarToggle = document.getElementById('sidebarToggle');

  const toggleMobileMenu = () => {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
    sidebar.setAttribute('aria-hidden', !sidebar.classList.contains('active'));
  };

  if (menuToggle) {
    menuToggle.addEventListener('click', toggleMobileMenu);
    menuToggle.setAttribute('aria-label', 'Toggle mobile navigation');
  }

  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', toggleMobileMenu);
    sidebarToggle.setAttribute('aria-label', 'Close mobile navigation');
  }

  if (overlay) {
    overlay.addEventListener('click', toggleMobileMenu);
  }

  document.querySelector('.sidebar-nav').addEventListener('click', (e) => {
    const navItem = e.target.closest('.nav-item');
    if (navItem && window.innerWidth <= 768) {
      toggleMobileMenu();
    }
  });

  window.addEventListener('resize', debounce(() => {
    if (window.innerWidth > 768) {
      sidebar.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
      sidebar.setAttribute('aria-hidden', true);
    }
  }, 100));
}

function initializeThemeToggle() {
  const themeToggle = document.getElementById('themeToggle');
  if (!themeToggle) return;

  const themeIcon = themeToggle.querySelector('i');
  const themeText = themeToggle.querySelector('span');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

  const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateThemeToggleButton(theme, themeIcon, themeText);
    document.body.style.transition = 'background-color 0.3s ease';
    setTimeout(() => document.body.style.transition = '', 300);
    themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to day shift' : 'Switch to night shift');
  };

  const currentTheme = localStorage.getItem('theme') || (prefersDarkScheme.matches ? 'dark' : 'light');
  applyTheme(currentTheme);

  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
  });

  prefersDarkScheme.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });

  themeToggle.setAttribute('aria-label', 'Toggle theme');
}

function updateThemeToggleButton(theme, icon, text) {
  if (icon && text) {
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    text.textContent = theme === 'dark' ? 'Day shift' : 'Night shift';
  }
}

function initializeSearchFunctionality() {
  const searchInputs = document.querySelectorAll('.search-bar input');
  searchInputs.forEach(input => {
    input.addEventListener('input', debounce(() => handleSearch(input.value.toLowerCase()), 300));
    input.addEventListener('focus', () => input.parentElement.classList.add('focused'));
    input.addEventListener('blur', () => input.parentElement.classList.remove('focused'));
    input.setAttribute('aria-label', 'Search resources, events, announcements, employees');
  });
}

function handleSearch(searchTerm) {
  console.log('Searching for:', searchTerm);
  const path = window.location.pathname + window.location.hash;
  if (path.includes('announcements') || path.includes('#announcements')) filterAnnouncements(searchTerm);
  if (path.includes('directory') || path.includes('#directory')) filterEmployees(searchTerm);
  if (path.includes('resources') || path.includes('#resources')) filterResources(searchTerm);
}

function filterAnnouncements(searchTerm) {
  const announcements = document.querySelectorAll('.announcement-card');
  announcements.forEach(card => {
    const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
    const content = card.querySelector('.announcement-content')?.textContent.toLowerCase() || '';
    const author = card.querySelector('.author-name')?.textContent.toLowerCase() || '';
    card.style.display = title.includes(searchTerm) || content.includes(searchTerm) || author.includes(searchTerm)
      ? 'block'
      : 'none';
  });
}

function filterEmployees(searchTerm) {
  const employees = document.querySelectorAll('.employee-card');
  employees.forEach(card => {
    const name = card.querySelector('h3')?.textContent.toLowerCase() || '';
    const role = card.querySelector('.employee-role')?.textContent.toLowerCase() || '';
    const department = card.querySelector('.employee-department')?.textContent.toLowerCase() || '';
    card.style.display = name.includes(searchTerm) || role.includes(searchTerm) || department.includes(searchTerm)
      ? 'block'
      : 'none';
  });
}

function filterResources(searchTerm) {
  const resources = document.querySelectorAll('.resource-card');
  resources.forEach(card => {
    const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
    const desc = card.querySelector('p')?.textContent.toLowerCase() || '';
    card.style.display = title.includes(searchTerm) || desc.includes(searchTerm)
      ? 'block'
      : 'none';
  });
}

function initializeCalendarInteraction() {
  const calendarSection = document.querySelector('.calendar-section');
  if (!calendarSection) return;

  calendarSection.addEventListener('click', (e) => {
    const day = e.target.closest('.calendar-day:not(.inactive)');
    if (day) {
      document.querySelectorAll('.calendar-day.selected').forEach(selected => selected.classList.remove('selected'));
      day.classList.add('selected');
      updateEventsForDate(day.textContent);
    }

    const navButton = e.target.closest('.nav-btn');
    if (navButton) {
      console.log('Navigate calendar:', navButton.innerHTML.includes('left') ? 'previous' : 'next');
    }
  });
}

function updateEventsForDate(date) {
  const eventsHeader = document.querySelector('.events-header h3');
  if (eventsHeader) {
    eventsHeader.textContent = `Events for July ${date}, 2025`;
  }
  console.log('Showing events for date:', date);
}

function initializeCardInteractions() {
  document.querySelector('.content-area').addEventListener('click', (e) => {
    const target = e.target.closest('.info-card, .announcement-card, .employee-card, .read-more, .action-btn');
    if (!target) return;

    if (target.classList.contains('info-card')) {
      target.style.transform = e.type === 'mouseenter' ? 'translateY(-4px)' : 'translateY(0)';
      return;
    }

    if (target.classList.contains('read-more')) {
      const content = target.closest('.announcement-card').querySelector('.announcement-content');
      if (content.style.webkitLineClamp) {
        content.style.webkitLineClamp = 'unset';
        content.style.display = 'block';
        target.textContent = 'Read less';
      } else {
        content.style.display = '-webkit-box';
        content.style.webkitLineClamp = '3';
        content.style.webkitBoxOrient = 'vertical';
        content.style.overflow = 'hidden';
        target.textContent = 'Read more';
      }
      return;
    }

    if (target.classList.contains('action-btn')) {
      const card = target.closest('.announcement-card, .employee-card');
      const icon = target.querySelector('i');
      const name = card.querySelector('h3')?.textContent;

      if (card.classList.contains('announcement-card') && icon) {
        icon.classList.toggle('fas');
        icon.classList.toggle('far');
        target.style.color = icon.classList.contains('fas') ? 'var(--primary-color)' : 'var(--text-secondary)';
      } else if (card.classList.contains('employee-card')) {
        console.log(target.classList.contains('primary') ? `Opening message dialog for: ${name}` : `Initiating call to: ${name}`);
      }
    }
  }, { capture: true });
}

function initializeFilterFunctionality() {
  const directorySection = document.querySelector('.directory-filters');
  if (!directorySection) return;

  directorySection.addEventListener('change', (e) => {
    if (e.target.classList.contains('filter-select')) applyFilters();
  });
}

function applyFilters() {
  const filters = Array.from(document.querySelectorAll('.filter-select')).map(select => select.value.toLowerCase());
  const [departmentFilter, roleFilter, locationFilter] = filters;

  document.querySelectorAll('.employee-card').forEach(card => {
    const department = card.querySelector('.employee-department')?.textContent.toLowerCase() || '';
    const role = card.querySelector('.employee-role')?.textContent.toLowerCase() || '';
    let showCard = true;

    if (departmentFilter && !department.includes(departmentFilter)) showCard = false;
    if (roleFilter && !role.includes(roleFilter)) showCard = false;
    card.style.display = showCard ? 'block' : 'none';
  });
}

function initializeTooltips() {
  document.body.addEventListener('mouseover', (e) => {
    const element = e.target.closest('[data-tooltip]');
    if (!element) return;

    const tooltipText = element.getAttribute('data-tooltip');
    showTooltip(e, tooltipText);
  });
  document.body.addEventListener('mouseout', hideTooltip);
}

function showTooltip(event, text) {
  hideTooltip();
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  tooltip.textContent = text;
  Object.assign(tooltip.style, {
    position: 'absolute',
    background: 'var(--bg-primary)',
    color: 'var(--text-primary)',
    padding: '0.5rem',
    borderRadius: 'var(--border-radius)',
    fontSize: '0.875rem',
    boxShadow: 'var(--shadow-md)',
    zIndex: '1000',
    pointerEvents: 'none',
    maxWidth: '200px',
    wordWrap: 'break-word'
  });

  document.body.appendChild(tooltip);
  const rect = event.target.getBoundingClientRect();
  tooltip.style.left = `${rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2)}px`;
  tooltip.style.top = `${rect.top - tooltip.offsetHeight - 8}px`;
}

function hideTooltip() {
  document.querySelector('.tooltip')?.remove();
}

function setActiveNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  const hash = window.location.hash || '#events';
  navItems.forEach(item => {
    item.classList.toggle('active', item.getAttribute('href') === hash);
  });
}

function initializeSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

function initializeLazyLoading() {
  const images = document.querySelectorAll('img[data-src]');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.getAttribute('data-src');
          img.removeAttribute('data-src');
          obs.unobserve(img);
        }
      });
    }, { rootMargin: '0px 0px 100px 0px' });

    images.forEach(img => observer.observe(img));
  }
}

function initializeKeyboardNavigation() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.getElementById('sidebar')?.classList.remove('active');
      document.getElementById('overlay')?.classList.remove('active');
      document.body.style.overflow = '';
      document.getElementById('sidebar')?.setAttribute('aria-hidden', true);
    }
    if (e.ctrlKey && e.shiftKey && e.key === 'T') {
      document.getElementById('themeToggle')?.click();
    }
    if (e.ctrlKey && e.key === 'k') {
      e.preventDefault();
      document.querySelector('.search-bar input')?.focus();
    }
  });
}

function optimizePerformance() {
  const scrollHandler = throttle(() => {
    // Handle scroll-based animations or effects here if needed
  }, 100);

  window.addEventListener('scroll', scrollHandler);

  window.addEventListener('resize', debounce(() => {
    if (window.innerWidth > 768) {
      document.getElementById('sidebar')?.classList.remove('active');
      document.getElementById('overlay')?.classList.remove('active');
      document.body.style.overflow = '';
      document.getElementById('sidebar')?.setAttribute('aria-hidden', true);
    }
  }, 250));
}

function initializeErrorHandling() {
  window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
  });

  window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
  });
}

function debounce(func, wait) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

function throttle(func, limit) {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

window.OfficeVerse = {
  initializeMobileNavigation,
  updateThemeToggleButton,
  handleSearch,
  filterAnnouncements,
  filterEmployees,
  filterResources,
  debounce,
  throttle
};

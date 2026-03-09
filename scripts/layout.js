/**
 * Shared Layout — Injects sidebar navigation, header, and page structure
 * into every component page. Detects the current page and highlights
 * the appropriate nav link.
 *
 * Usage: Include this script at the end of <body> in every page.
 */

(function () {
  'use strict';

  /* ====================================================================
     COMPONENT REGISTRY
     Add new components here — the nav and index page auto-update.
     ==================================================================== */
  const components = [
    { id: 'button',       label: 'Button',       file: 'button.html',       description: 'Standard, split, and menu buttons' },
    { id: 'context-menu', label: 'Context Menu',  file: 'context-menu.html', description: 'Popup menus, menu items, dividers, groups' },
    { id: 'dropdown',     label: 'Dropdown',      file: 'dropdown.html',     description: 'Dropdown, combobox, listbox, and options' },
    { id: 'input',        label: 'Input',         file: 'input.html',        description: 'Input, textarea, search box, and field' },
  ];

  // Expose for index page use
  window.__components = components;

  /* ====================================================================
     DETECT CURRENT PAGE
     ==================================================================== */
  const currentFile = location.pathname.split('/').pop() || 'index.html';

  /* ====================================================================
     BUILD SIDEBAR NAVIGATION
     ==================================================================== */
  function buildNav() {
    const nav = document.createElement('aside');
    nav.className = 'site-nav';
    nav.setAttribute('role', 'navigation');
    nav.setAttribute('aria-label', 'Component navigation');

    // Logo / Home link
    const homeLink = document.createElement('a');
    homeLink.href = '../index.html';
    homeLink.className = 'site-nav__home';
    homeLink.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M14.773 7.358L8.354.938a.5.5 0 00-.708 0L1.227 7.358a.5.5 0 00.354.854H3v5.5a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3h2v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-5.5h1.419a.5.5 0 00.354-.854z"/>
      </svg>
      <span>VS Code Overrides</span>
    `;

    // Section header
    const sectionHeader = document.createElement('div');
    sectionHeader.className = 'site-nav__section-header';
    sectionHeader.textContent = 'Components';

    // Component links
    const list = document.createElement('ul');
    list.className = 'site-nav__list';

    components.forEach(c => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      // Determine path — if we're in /components, use relative; otherwise prefix
      const isComponentPage = currentFile.endsWith('.html') && currentFile !== 'index.html';
      a.href = isComponentPage ? c.file : `components/${c.file}`;
      a.className = 'site-nav__link';
      if (currentFile === c.file) {
        a.classList.add('site-nav__link--active');
        a.setAttribute('aria-current', 'page');
      }
      a.textContent = c.label;
      li.appendChild(a);
      list.appendChild(li);
    });

    nav.appendChild(homeLink);
    nav.appendChild(sectionHeader);
    nav.appendChild(list);

    return nav;
  }

  /* ====================================================================
     BUILD HEADER (theme toggle + mobile hamburger)
     ==================================================================== */
  function buildHeader() {
    const header = document.createElement('header');
    header.className = 'site-header';

    // Mobile hamburger
    const burger = document.createElement('button');
    burger.className = 'site-header__burger';
    burger.setAttribute('aria-label', 'Toggle navigation');
    burger.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path d="M2 4.5h16M2 10h16M2 15.5h16" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>`;
    burger.addEventListener('click', () => {
      document.querySelector('.site-nav').classList.toggle('site-nav--open');
    });

    // Theme toggle
    const toggle = document.createElement('button');
    toggle.className = 'site-header__theme-toggle';
    toggle.setAttribute('aria-label', 'Toggle theme');
    toggle.innerHTML = `
      <svg class="icon-sun" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <circle cx="8" cy="8" r="3"/>
        <path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.05 3.05l1.41 1.41M11.54 11.54l1.41 1.41M3.05 12.95l1.41-1.41M11.54 4.46l1.41-1.41"/>
      </svg>
      <svg class="icon-moon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M6.2 1A7 7 0 1015 9.8 5.5 5.5 0 016.2 1z"/>
      </svg>
      <span class="theme-label-dark">Light Mode</span>
      <span class="theme-label-light">Dark Mode</span>
    `;
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
      const isLight = document.body.classList.contains('light-mode');
      localStorage.setItem('vscode-overrides-theme', isLight ? 'light' : 'dark');
    });

    header.appendChild(burger);
    header.appendChild(toggle);
    return header;
  }

  /* ====================================================================
     WRAP PAGE CONTENT
     ==================================================================== */
  function wrapContent() {
    // Get existing body children (the page content)
    const children = Array.from(document.body.children);

    // Build layout
    const nav = buildNav();
    const header = buildHeader();

    const wrapper = document.createElement('div');
    wrapper.className = 'site-layout';

    const main = document.createElement('main');
    main.className = 'site-main';

    // Move existing content into main
    children.forEach(child => main.appendChild(child));

    wrapper.appendChild(nav);
    const contentWrapper = document.createElement('div');
    contentWrapper.className = 'site-content-wrapper';
    contentWrapper.appendChild(header);
    contentWrapper.appendChild(main);
    wrapper.appendChild(contentWrapper);

    document.body.appendChild(wrapper);
  }

  /* ====================================================================
     RESTORE SAVED THEME
     ==================================================================== */
  function restoreTheme() {
    const saved = localStorage.getItem('vscode-overrides-theme');
    if (saved === 'light') {
      document.body.classList.add('light-mode');
    }
  }

  /* ====================================================================
     CODE BLOCK COPY BUTTONS
     ==================================================================== */
  function addCopyButtons() {
    document.querySelectorAll('.code-block').forEach(block => {
      if (block.querySelector('.code-copy-btn')) return;
      const btn = document.createElement('button');
      btn.className = 'code-copy-btn';
      btn.textContent = 'Copy';
      btn.setAttribute('aria-label', 'Copy code');
      btn.addEventListener('click', () => {
        const code = block.querySelector('code');
        if (code) {
          navigator.clipboard.writeText(code.textContent).then(() => {
            btn.textContent = 'Copied!';
            setTimeout(() => { btn.textContent = 'Copy'; }, 2000);
          });
        }
      });
      block.style.position = 'relative';
      block.appendChild(btn);
    });
  }

  /* ====================================================================
     ON‑SCROLL TABLE OF CONTENTS HIGHLIGHT
     ==================================================================== */
  function buildTableOfContents() {
    const headings = document.querySelectorAll('.site-main h2[id]');
    if (headings.length === 0) return;

    const tocContainer = document.createElement('nav');
    tocContainer.className = 'site-toc';
    tocContainer.setAttribute('aria-label', 'Table of contents');

    const tocTitle = document.createElement('div');
    tocTitle.className = 'site-toc__title';
    tocTitle.textContent = 'On This Page';
    tocContainer.appendChild(tocTitle);

    const tocList = document.createElement('ul');
    tocList.className = 'site-toc__list';

    headings.forEach(h => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = `#${h.id}`;
      a.className = 'site-toc__link';
      a.textContent = h.textContent;
      li.appendChild(a);
      tocList.appendChild(li);
    });

    tocContainer.appendChild(tocList);
    document.querySelector('.site-content-wrapper').appendChild(tocContainer);

    // Intersection observer for active highlighting
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          tocList.querySelectorAll('.site-toc__link').forEach(l => l.classList.remove('site-toc__link--active'));
          const active = tocList.querySelector(`a[href="#${entry.target.id}"]`);
          if (active) active.classList.add('site-toc__link--active');
        }
      });
    }, { rootMargin: '-80px 0px -70% 0px' });

    headings.forEach(h => observer.observe(h));
  }

  /* ====================================================================
     INIT
     ==================================================================== */
  restoreTheme();
  wrapContent();
  addCopyButtons();
  buildTableOfContents();

  // Close nav on link click (mobile)
  document.querySelectorAll('.site-nav__link').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelector('.site-nav').classList.remove('site-nav--open');
    });
  });
})();

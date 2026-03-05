/* =============================================================
   app.js — Portfolio interactions
   - Language toggle + localStorage persistence
   - Project rendering + filtering
   - Tech stack rendering
   - About stats rendering
   - Copy email + toast
   - Mobile nav
   ============================================================= */
(function () {
  "use strict";

  /* ── Config ──────────────────────────────────────────────────
     Set EMAIL to your address to enable the "Copy email" button.
     Leave as null to hide the button gracefully.
     Example: const EMAIL = 'hello@davidgarcia.dev';
  ─────────────────────────────────────────────────────────── */
  const EMAIL = "daangar@gmail.com";

  /* ── State ─────────────────────────────────────────────────── */
  let lang = localStorage.getItem("lang") || "en";
  let activeFilter = "all";

  /* ── Translation helper ────────────────────────────────────── */
  function t(key) {
    const keys = key.split(".");
    let val = DATA.translations[lang];
    for (const k of keys) {
      if (val == null) return key;
      val = val[k];
    }
    return val ?? key;
  }

  /* ── Apply all translations ────────────────────────────────── */
  function applyTranslations() {
    document.documentElement.lang = lang;

    // Static data-i18n attributes
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      const val = t(key);
      if (typeof val === "string") el.textContent = val;
    });

    // Hero sub — preserve line-break rendering
    const heroSub = document.getElementById("hero-sub");
    if (heroSub) {
      const raw = t("hero.sub");
      heroSub.innerHTML = raw.replace(/\n/g, "<br>");
    }

    // Update lang toggle buttons in both desktop and mobile instances
    document.querySelectorAll(".lang-toggle__btn").forEach((btn) => {
      const active = btn.dataset.lang === lang;
      btn.classList.toggle("lang-toggle__btn--active", active);
      btn.setAttribute("aria-pressed", String(active));
    });

    // Re-render dynamic sections (language-aware content)
    renderTechStack();
    renderAboutStats();
    renderProjects();
  }

  /* ── Tech Stack ─────────────────────────────────────────────── */
  function renderTechStack() {
    const container = document.getElementById("techstack-groups");
    if (!container) return;

    container.innerHTML = DATA.techStack
      .map((group) => {
        const label = lang === "en" ? group.label_en : group.label_es;
        return `
        <div class="tech-group">
          <span class="tech-group__label">${esc(label)}</span>
          <div class="tech-group__chips">
            ${group.chips.map((c) => `<span class="tech-chip">${esc(c)}</span>`).join("")}
          </div>
        </div>
      `;
      })
      .join("");
  }

  /* ── About Stats ────────────────────────────────────────────── */
  function renderAboutStats() {
    const container = document.getElementById("about-stats");
    if (!container) return;

    const stats = t("about.stats");
    if (!Array.isArray(stats)) return;

    container.innerHTML = stats
      .map(
        (s) => `
      <div class="about__stat">
        <span class="about__stat-number">${esc(s.number)}</span>
        <span class="about__stat-label">${esc(s.label)}</span>
      </div>
    `,
      )
      .join("");
  }

  /* ── Projects ───────────────────────────────────────────────── */
  function renderProjects() {
    renderFilterBtns();
    renderProjectGrid();
  }

  function renderFilterBtns() {
    const container = document.querySelector(".projects__filters");
    if (!container) return;

    // Fixed filter order; labels only translate "All"
    const filters = [
      { key: "all", label: t("projects.filter_all") },
      { key: "android", label: "Android" },
      { key: "ios", label: "iOS" },
      { key: "flutter", label: "Flutter" },
      { key: "fintech", label: "Fintech" },
      { key: "ecommerce", label: "E-commerce" },
      { key: "travel", label: "Travel" },
    ];

    container.innerHTML = filters
      .map(
        (f) => `
      <button
        class="filter-btn${activeFilter === f.key ? " filter-btn--active" : ""}"
        data-filter="${f.key}"
        aria-pressed="${activeFilter === f.key}"
      >${esc(f.label)}</button>
    `,
      )
      .join("");

    container.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeFilter = btn.dataset.filter;
        renderFilterBtns();
        renderProjectGrid();
      });
    });
  }

  function renderProjectGrid() {
    const grid = document.getElementById("projects-grid");
    if (!grid) return;

    const visible =
      activeFilter === "all"
        ? DATA.projects
        : DATA.projects.filter((p) => p.tags.includes(activeFilter));

    if (visible.length === 0) {
      grid.innerHTML =
        '<p class="projects__empty">No projects match this filter.</p>';
      return;
    }

    // Walk in array order; batch consecutive card-layout items into a row
    let html = "";
    let i = 0;
    while (i < visible.length) {
      if (visible[i].layout === "wide") {
        html += renderWideCard(visible[i]);
        i++;
      } else {
        // Collect run of consecutive card items
        const batch = [];
        while (i < visible.length && visible[i].layout === "card") {
          batch.push(visible[i]);
          i++;
        }
        html += `<div class="projects__row">${batch.map(renderSmallCard).join("")}</div>`;
      }
    }

    grid.innerHTML = html;
  }

  function renderWideCard(p) {
    const category = lang === "en" ? p.category_en : p.category_es;
    const desc = lang === "en" ? p.desc_en : p.desc_es;
    const highlights = lang === "en" ? p.highlights_en : p.highlights_es;

    const hlHtml =
      highlights.length > 0
        ? `
      <ul class="project-card__highlights" aria-label="Key achievements">
        ${highlights
          .map(
            (h) => `
          <li class="project-card__highlight">
            <span class="project-card__hl-dot" aria-hidden="true"></span>
            <span class="project-card__hl-text">${esc(h)}</span>
          </li>
        `,
          )
          .join("")}
      </ul>
    `
        : "";

    return `
      <article class="project-card project-card--wide" aria-label="${esc(p.title)}">
        <div class="project-card__inner">
          <div class="project-card__img">
            <img
              src="${p.image}"
              alt="${esc(p.title)} screenshot"
              loading="lazy"
              width="360"
              height="280"
            >
          </div>
          <div class="project-card__body">
            <div class="project-card__meta">
              <span class="project-card__tag">${esc(category)}</span>
              <span class="project-card__platform">${esc(p.platform)}</span>
            </div>
            <h3 class="project-card__title">${esc(p.title)}</h3>
            <p class="project-card__desc">${esc(desc)}</p>
            ${hlHtml}
            <div class="project-card__chips" aria-label="Technologies">
              ${p.chips.map((c) => `<span class="project-card__chip">${esc(c)}</span>`).join("")}
            </div>
          </div>
        </div>
      </article>
    `;
  }

  function renderSmallCard(p) {
    const category = lang === "en" ? p.category_en : p.category_es;
    const desc = lang === "en" ? p.desc_en : p.desc_es;

    return `
      <article class="project-card project-card--card" aria-label="${esc(p.title)}">
        <div class="project-card__inner">
          <div class="project-card__img">
            <img
              src="${p.image}"
              alt="${esc(p.title)} screenshot"
              loading="lazy"
              width="400"
              height="130"
            >
          </div>
          <div class="project-card__body">
            <div class="project-card__meta">
              <span class="project-card__tag">${esc(category)}</span>
            </div>
            <h3 class="project-card__title">${esc(p.title)}</h3>
            <p class="project-card__desc">${esc(desc)}</p>
            <div class="project-card__chips" aria-label="Technologies">
              ${p.chips.map((c) => `<span class="project-card__chip">${esc(c)}</span>`).join("")}
            </div>
          </div>
        </div>
      </article>
    `;
  }

  /* ── Copy Email ─────────────────────────────────────────────── */
  function setupCopyEmail() {
    const btn = document.getElementById("copy-email-btn");
    const display = document.getElementById("email-display");

    if (!EMAIL) return; // No email configured — button stays hidden

    if (display) display.textContent = EMAIL;
    if (btn) {
      btn.hidden = false;
      btn.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(EMAIL);
          showToast("Email copied to clipboard!");
        } catch {
          // Fallback for browsers without clipboard API
          const ta = document.createElement("textarea");
          ta.value = EMAIL;
          ta.style.cssText = "position:fixed;opacity:0;pointer-events:none";
          document.body.appendChild(ta);
          ta.select();
          try {
            document.execCommand("copy");
          } catch (_) {
            /* silent */
          }
          document.body.removeChild(ta);
          showToast("Email copied!");
        }
      });
    }
  }

  /* ── Toast ──────────────────────────────────────────────────── */
  function showToast(msg) {
    const toast = document.getElementById("toast");
    if (!toast) return;
    toast.textContent = msg;
    toast.hidden = false;
    // Force reflow so transition fires
    void toast.offsetWidth;
    toast.classList.add("toast--visible");
    setTimeout(() => {
      toast.classList.remove("toast--visible");
      setTimeout(() => {
        toast.hidden = true;
      }, 220);
    }, 2500);
  }

  /* ── Mobile Nav ─────────────────────────────────────────────── */
  function setupMobileNav() {
    const hamburger = document.querySelector(".nav__hamburger");
    const mobileMenu = document.getElementById("mobile-menu");
    if (!hamburger || !mobileMenu) return;

    hamburger.addEventListener("click", () => {
      const open = hamburger.getAttribute("aria-expanded") === "true";
      hamburger.setAttribute("aria-expanded", String(!open));
      mobileMenu.hidden = open;
    });

    // Close menu when a nav link is tapped
    mobileMenu.querySelectorAll(".nav__mobile-link").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.setAttribute("aria-expanded", "false");
        mobileMenu.hidden = true;
      });
    });

    // Close menu on outside click
    document.addEventListener("click", (e) => {
      if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
        hamburger.setAttribute("aria-expanded", "false");
        mobileMenu.hidden = true;
      }
    });
  }

  /* ── Language Toggle ────────────────────────────────────────── */
  function setupLangToggle() {
    document.querySelectorAll(".lang-toggle__btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (btn.dataset.lang === lang) return; // no-op
        lang = btn.dataset.lang;
        localStorage.setItem("lang", lang);
        applyTranslations();
      });
    });
  }

  /* ── Escape helper (prevent XSS in innerHTML) ───────────────── */
  function esc(str) {
    if (typeof str !== "string") return "";
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  /* ── Init ───────────────────────────────────────────────────── */
  function init() {
    setupLangToggle();
    setupMobileNav();
    setupCopyEmail();
    applyTranslations();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

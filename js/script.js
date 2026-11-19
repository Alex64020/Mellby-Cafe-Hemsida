// Mellby Café — delad site-logik (nav, ljusbox för galleri, menyrendering)

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initLightbox();
  renderMenu();
  applySiteConfig();
  document.querySelectorAll("video").forEach((v) => {
    v.muted = true;
  });
});

function initNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove("open"));
  });
}

function initLightbox() {
  const links = document.querySelectorAll(".gallery-grid a, a.zoom");
  if (!links.length) return;

  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.innerHTML = `
    <button class="lightbox-close" aria-label="Stäng">&times;</button>
    <img src="" alt="">
  `;
  document.body.appendChild(lightbox);

  const img = lightbox.querySelector("img");
  const closeBtn = lightbox.querySelector(".lightbox-close");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      img.src = link.getAttribute("href");
      img.alt = link.querySelector("img")?.alt || "";
      lightbox.classList.add("open");
    });
  });

  function close() {
    lightbox.classList.remove("open");
    img.src = "";
  }

  closeBtn.addEventListener("click", close);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}

function applySiteConfig() {
  const hero = document.getElementById("hero");
  if (!hero || typeof SITE_CONFIG === "undefined") return;

  hero.style.backgroundImage = `url('images/${SITE_CONFIG.heroImage}')`;

  const eyebrow = document.getElementById("hero-eyebrow");
  const title = document.getElementById("hero-title");
  const text = document.getElementById("hero-text");
  if (eyebrow) eyebrow.textContent = SITE_CONFIG.heroEyebrow;
  if (title) title.textContent = SITE_CONFIG.heroTitle;
  if (text) text.textContent = SITE_CONFIG.heroText;
}

function renderMenu() {
  const root = document.getElementById("menu-root");
  if (!root || typeof MENU_DATA === "undefined") return;

  const renderCategory = (cat) => `
      <div class="menu-category">
        <h3>${cat.category}</h3>
        ${cat.note ? `<div class="menu-category-note">${cat.note}</div>` : ""}
        ${cat.items
          .map(
            (item) => `
          <div class="menu-item">
            <div>
              <div class="menu-item-name">${item.name}</div>
              ${item.desc ? `<div class="menu-item-desc">${item.desc}</div>` : ""}
            </div>
            ${item.price ? `<div class="menu-item-price">${item.price}</div>` : ""}
          </div>
        `
          )
          .join("")}
      </div>
    `;

  const sections = typeof MENU_SECTIONS === "undefined" ? [] : MENU_SECTIONS;

  const jump = `
    <nav class="menu-jump" aria-label="Hoppa till avdelning">
      ${sections
        .map(
          (s) =>
            `<a href="#${s.id}" class="menu-jump-btn menu-jump-${s.id}"><span>${s.icon}</span> ${s.title}</a>`
        )
        .join("")}
    </nav>`;

  const body = sections
    .map((s) => {
      const cats = MENU_DATA.filter((c) => c.section === s.id);
      if (!cats.length) return "";
      return `
        <div class="menu-section menu-section-${s.id}" id="${s.id}">
          <div class="menu-section-head">
            <div class="menu-section-icon">${s.icon}</div>
            <div>
              <h2>${s.title}</h2>
              <p>${s.tagline}</p>
            </div>
          </div>
          ${cats.map(renderCategory).join("")}
        </div>`;
    })
    .join("");

  const orphans = MENU_DATA.filter((c) => !sections.some((s) => s.id === c.section));

  root.innerHTML = jump + body + orphans.map(renderCategory).join("");
}

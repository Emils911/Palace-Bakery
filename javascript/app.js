// ═══════════════════════════════════════════════════════
//  Palace Bakery — App Logic
// ═══════════════════════════════════════════════════════

(() => {
  // ── State ──────────────────────────────────────────────
  let activeCategory = "all";
  let sortOrder = "popular";
  let cartCount = 0;

  // ── DOM refs ───────────────────────────────────────────
  const sidebar        = document.getElementById("sidebar");
  const overlay        = document.getElementById("sidebarOverlay");
  const hamburger      = document.getElementById("hamburger");
  const sidebarClose   = document.getElementById("sidebarClose");
  const menuContainer  = document.getElementById("menuContainer");
  const emptyState     = document.getElementById("emptyState");
  const sortSelect     = document.getElementById("sortSelect");
  const badge          = document.querySelector(".badge");

  // ── Sidebar ────────────────────────────────────────────
  function openSidebar() {
    sidebar.classList.add("open");
    overlay.classList.add("visible");
    document.body.style.overflow = "hidden";
  }

  function closeSidebar() {
    sidebar.classList.remove("open");
    overlay.classList.remove("visible");
    document.body.style.overflow = "";
  }

  hamburger.addEventListener("click", openSidebar);
  sidebarClose.addEventListener("click", closeSidebar);
  overlay.addEventListener("click", closeSidebar);

  // ── Category clicks ────────────────────────────────────
  document.querySelectorAll(".sidebar__item[data-category]").forEach(item => {
    item.addEventListener("click", () => {
      document.querySelectorAll(".sidebar__item").forEach(i => i.classList.remove("active"));
      item.classList.add("active");
      activeCategory = item.dataset.category;
      render();
      // close sidebar on mobile after selection
      if (window.innerWidth < 900) closeSidebar();
    });
  });

  // ── Sort ───────────────────────────────────────────────
  sortSelect.addEventListener("change", () => {
    sortOrder = sortSelect.value;
    render();
  });

  // ── Filter & Sort ──────────────────────────────────────
  function getItems() {
    let items = activeCategory === "all"
      ? [...MENU_DATA]
      : MENU_DATA.filter(i => i.category === activeCategory);

    switch (sortOrder) {
      case "price-asc":  items.sort((a, b) => a.price - b.price); break;
      case "price-desc": items.sort((a, b) => b.price - a.price); break;
      case "name":       items.sort((a, b) => a.name.localeCompare(b.name)); break;
      default: break; // popular = original order
    }

    return items;
  }

  // ── Render ─────────────────────────────────────────────
  function render() {
    const items = getItems();
    menuContainer.innerHTML = "";

    if (items.length === 0) {
      emptyState.style.display = "block";
      return;
    }
    emptyState.style.display = "none";

    if (activeCategory === "all") {
      // Group by category
      const groups = {};
      items.forEach(item => {
        if (!groups[item.category]) groups[item.category] = [];
        groups[item.category].push(item);
      });

      // render in category order defined in CATEGORIES
      const catOrder = CATEGORIES.filter(c => c.key !== "all").map(c => c.key);
      catOrder.forEach(catKey => {
        if (!groups[catKey]) return;
        const catMeta = CATEGORIES.find(c => c.key === catKey);
        menuContainer.appendChild(buildSection(catMeta.label, groups[catKey], catKey));
      });
    } else {
      const catMeta = CATEGORIES.find(c => c.key === activeCategory);
      menuContainer.appendChild(buildSection(catMeta.label, items, activeCategory));
    }
  }

  function buildSection(title, items, catKey) {
    const section = document.createElement("section");
    section.className = "menu-section";
    section.dataset.category = catKey;

    section.innerHTML = `
      <div class="menu-section__header">
        <h2 class="menu-section__title">${title}</h2>
        <button class="view-all">View All →</button>
      </div>
      <div class="menu-grid"></div>
    `;

    const grid = section.querySelector(".menu-grid");
    items.forEach((item, i) => {
      const card = buildCard(item);
      card.style.animationDelay = `${i * 60}ms`;
      grid.appendChild(card);
    });

    return section;
  }

  function buildCard(item) {
    const card = document.createElement("div");
    card.className = "card";

    const tagHTML = item.tag
      ? `<span class="card__tag card__tag--${item.tag}">${item.tag}</span>`
      : "";

    card.innerHTML = `
      <div class="card__img-wrap">
        <img src="${item.image}" alt="${item.name}" loading="lazy" />
        ${tagHTML}
      </div>
      <div class="card__body">
        <h3 class="card__name">${item.name}</h3>
        <p class="card__desc">${item.description}</p>
        <div class="card__footer">
          <span class="card__price">GH₵ ${item.price.toFixed(2)}</span>
          <button class="card__btn" data-id="${item.id}">Add to Cart</button>
        </div>
      </div>
    `;

    card.querySelector(".card__btn").addEventListener("click", () => addToCart(item));
    return card;
  }

  // ── Cart ───────────────────────────────────────────────
  function addToCart(item) {
    cartCount++;
    badge.textContent = cartCount;
    badge.classList.add("pop");
    setTimeout(() => badge.classList.remove("pop"), 300);

    showToast(`${item.name} added to cart`);
  }

  function showToast(msg) {
    const existing = document.querySelector(".toast");
    if (existing) existing.remove();

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = msg;
    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add("visible"));
    setTimeout(() => {
      toast.classList.remove("visible");
      setTimeout(() => toast.remove(), 300);
    }, 2400);
  }

  // ── Init ───────────────────────────────────────────────
  render();
})();

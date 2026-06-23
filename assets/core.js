/* =============================================================================
   MIMS menu-testing — shared core
   Chrome (logo, header-right, footer), the blank stub, the modal, manager
   icons, and Microsoft Clarity injection. Used identically by A / B / C.
   ============================================================================= */

/* ---- inline SVGs ---------------------------------------------------------- */
const SVG = {
  logo: `<svg class="mims-logo" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M20 3 4 11v18l16 8 16-8V11L20 3Z" fill="#0b3a66"/>
      <path d="M20 3 4 11l16 8 16-8L20 3Z" fill="#e4002b"/>
      <path d="M20 19v18l16-8V11l-16 8Z" fill="#0b3a66"/>
      <path d="M20 19 4 11v18l16 8V19Z" fill="#16559a"/>
    </svg>`,
  chevDown: `<svg class="chev" viewBox="0 0 24 24" fill="none"><path d="M7 10l5 5 5-5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  chevRight: `<svg class="chev" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  search: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="1.6"/><path d="m20 20-3.2-3.2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  help: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M9.5 9.2a2.5 2.5 0 1 1 3.4 2.3c-.7.3-1 .8-1 1.5v.4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="11.9" cy="16.4" r="1" fill="currentColor"/></svg>`,
  person: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none"><circle cx="12" cy="8" r="3.5" stroke="currentColor" stroke-width="1.5"/><path d="M5 19a7 7 0 0 1 14 0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  hamburger: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  close: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none"><path d="M6 6l12 12M18 6 6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`
};

/* Per-manager icon (used in C's overarching drawer). Simple Material-ish glyphs. */
const MANAGER_ICON = {
  profile:        `<svg class="mico" viewBox="0 0 24 24" fill="none"><circle cx="6" cy="12" r="2.2" stroke="currentColor" stroke-width="1.5"/><circle cx="17" cy="6" r="2.2" stroke="currentColor" stroke-width="1.5"/><circle cx="17" cy="18" r="2.2" stroke="currentColor" stroke-width="1.5"/><path d="M8 11l7-4M8 13l7 4" stroke="currentColor" stroke-width="1.5"/></svg>`,
  configuration:  `<svg class="mico" viewBox="0 0 24 24" fill="none"><path d="M7 9a3 3 0 1 0 0 6c2 0 3-2 5-3s3-3 5-3a3 3 0 1 1 0 6c-2 0-3-2-5-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  reporting:      `<svg class="mico" viewBox="0 0 24 24" fill="none"><rect x="5" y="4" width="14" height="16" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M9 9h6M9 12h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="14.5" cy="15.5" r="2.3" stroke="currentColor" stroke-width="1.4"/></svg>`,
  enquiry:        `<svg class="mico" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="6" stroke="currentColor" stroke-width="1.5"/><path d="M8 11a3 3 0 0 1 6 0M11 8v6" stroke="currentColor" stroke-width="1.3"/><path d="m19 19-3-3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  "ops-inbound":  `<svg class="mico" viewBox="0 0 24 24" fill="none"><path d="M14 5H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8" stroke="currentColor" stroke-width="1.5"/><path d="M10 12h10m0 0-3-3m3 3-3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  "ops-outbound": `<svg class="mico" viewBox="0 0 24 24" fill="none"><path d="M10 5h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-8" stroke="currentColor" stroke-width="1.5"/><path d="M14 12H4m0 0 3-3m-3 3 3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  edi:            `<svg class="mico" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.5"/><path d="M12 4v3M12 17v3M4 12h3M17 12h3M6.3 6.3l2.1 2.1M15.6 15.6l2.1 2.1M17.7 6.3l-2.1 2.1M8.4 15.6l-2.1 2.1" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`,
  pulse:          `<svg class="mico" viewBox="0 0 24 24" fill="none"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`,
  administration: `<svg class="mico" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="3.2" stroke="currentColor" stroke-width="1.5"/><path d="M5 19a7 7 0 0 1 14 0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`
};

/* ---- chrome fragments ----------------------------------------------------- */
function brandHTML(withHamburger) {
  return (withHamburger ? `<button class="mims-hamburger" id="hamburger" aria-label="Open navigation">${SVG.hamburger}</button>` : "")
    + `<div class="mims-brand">${SVG.logo}<span class="mims-wordmark">MIMS</span></div>`;
}
function headerRightHTML() {
  return `<div class="mims-header-right">
      <div class="mims-search">${SVG.search}<input type="text" placeholder="Quick links" aria-label="Quick links" />${SVG.chevDown}</div>
      <button class="mims-iconbtn" aria-label="Help">${SVG.help}</button>
      <button class="mims-iconbtn" aria-label="Account">${SVG.person}</button>
    </div>`;
}
function footerHTML() {
  return `<footer class="mims-footer">
      <span class="copyright">© Copyright Mainfreight 2026</span>
      <span class="links">
        <a href="#" onclick="return false">Privacy Policy</a>
        <a href="#" onclick="return false">Cookies Statement</a>
        <a href="#" onclick="return false">Terms &amp; Conditions</a>
      </span>
      <span class="version">Version: v1.0.0</span>
    </footer>`;
}

/* ---- blank stub ----------------------------------------------------------- */
function stubHTML(title) {
  return `<h1 class="stub-title">${escapeHTML(title)}</h1><div class="stub-container"></div>`;
}

/* ---- data page (Areas-style search + results table) -----------------------
   Mirrors the Figma content frames: a subtitle, a filter bar (text fields +
   Reset/Search) and a results table header. Used by B as its landing page,
   for tab navigation and inside the manager modal. */
function dataPageHTML(title, opts) {
  opts = opts || {};
  const subtitle = opts.subtitle || "Search for an existing shipment";
  const filters = opts.filters || ["Shipment reference search", "Consignee", "Consignor", "Date to (UTC)", "Date from (UTC)"];
  const columns = opts.columns || ["Reference", "Consigner code", "Consignor", "Consignee code", "Consignee", "Incoterm", "Received a (UTC)", "Origin", "Destination", "Weight (kg)", "TEU", "CO2e"];
  const fields = filters.map((f, i) => {
    const lead = i === 0 ? SVG.search : "";
    return `<div class="filter-field" style="flex:${i === 0 ? "1.4" : "1"} 1 ${i === 0 ? 220 : 160}px">${lead}<input type="text" placeholder="${escapeHTML(f)}" aria-label="${escapeHTML(f)}"></div>`;
  }).join("");
  const ths = columns.map(c => `<div class="data-th">${escapeHTML(c)}</div>`).join("");
  return `<div class="data-page">
      <div class="data-card">
        <h1 class="data-title">${escapeHTML(title)}</h1>
        <div class="data-subtitle">${escapeHTML(subtitle)}</div>
        <div class="filter-bar">
          ${fields}
          <button class="btn btn-text">Reset</button>
          <button class="btn btn-primary">Search</button>
        </div>
      </div>
      <div class="data-table">
        <div class="data-thead">${ths}</div>
        <div class="data-tbody"></div>
      </div>
    </div>`;
}
function homeHTML() {
  return `<div class="stub-home"><div>
      <div style="font-size:20px;font-weight:500;color:var(--text-primary)">MIMS</div>
      <div class="small">Select a menu item to begin.</div>
    </div></div>`;
}
function escapeHTML(s) {
  return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

/* ---- modal (B) ------------------------------------------------------------ */
/* Builds the manager-workspace modal: left rail of the manager's items + a
   blank stub in the content area + Cancel/Save. Reused for every grouped
   manager. activeItemKey = "<categoryName>::<itemName>". */
function buildModal() {
  const scrim = document.createElement("div");
  scrim.className = "modal-scrim";
  scrim.id = "modal-scrim";
  scrim.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true">
      <div class="modal-head"><span class="title" id="modal-title"></span>
        <button class="close" id="modal-close" aria-label="Close">${SVG.close}</button></div>
      <div class="modal-body">
        <div class="modal-rail" id="modal-rail"></div>
        <div class="modal-content" id="modal-content"></div>
      </div>
      <div class="modal-foot">
        <button class="btn btn-text" id="modal-cancel">Cancel</button>
        <button class="btn btn-primary">Save</button>
      </div>
    </div>`;
  document.body.appendChild(scrim);
  scrim.addEventListener("click", e => { if (e.target === scrim) closeModal(); });
  scrim.querySelector("#modal-close").addEventListener("click", closeModal);
  scrim.querySelector("#modal-cancel").addEventListener("click", closeModal);
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });
  return scrim;
}
function openModal(manager, activeCat, activeItem) {
  clarityEvent("open_modal");
  clarityTag("current_manager", manager.name);
  const scrim = document.getElementById("modal-scrim") || buildModal();
  document.getElementById("modal-title").textContent = manager.drawerName;
  const rail = document.getElementById("modal-rail");
  rail.innerHTML = `<div class="search">${SVG.search}<input type="text" placeholder="Search" aria-label="Search"></div>`;
  manager.categories.forEach(cat => {
    cat.items.forEach(item => {
      const isActive = cat.name === activeCat && item === activeItem;
      const b = document.createElement("button");
      b.className = "menu-item" + (isActive ? " is-active" : "");
      b.textContent = item;
      b.addEventListener("click", () => setModalContent(manager, cat.name, item, rail, b));
      rail.appendChild(b);
    });
  });
  setModalContent(manager, activeCat, activeItem);
  scrim.classList.add("is-open");
}
function setModalContent(manager, cat, item, rail, btn) {
  clarityEvent("navigate");
  clarityTag("current_page", item);
  document.getElementById("modal-content").innerHTML = stubHTML(item);
  if (rail && btn) {
    rail.querySelectorAll(".menu-item").forEach(x => x.classList.remove("is-active"));
    btn.classList.add("is-active");
  }
}
function closeModal() {
  const scrim = document.getElementById("modal-scrim");
  if (scrim) scrim.classList.remove("is-open");
}

/* ---- assemble a full page shell ------------------------------------------ */
/* opts: { hamburger:bool } -> returns the header markup. The body/footer are
   composed by each prototype since their middle differs. */
function headerHTML(opts) {
  opts = opts || {};
  return `<div class="mims-topstrip"></div>
    <header class="mims-header">${brandHTML(!!opts.hamburger)}
      <nav class="mims-nav" id="mims-nav"></nav>
      ${headerRightHTML()}
    </header>`;
}

/* ---- Quick links search --------------------------------------------------
   Flattens the IA into a searchable index and wires the header "Quick links"
   field to a results dropdown. Each prototype passes an onSelect callback that
   navigates in its own way (A: goToItem, B: modal/navigate, C: selectItem). */
function buildSearchIndex() {
  const out = [];
  MIMS_IA.managers.forEach(m => {
    const managerName = m.drawerName || m.name;
    if (m.type === "tabs") {
      m.tabs.forEach(tab => out.push({ managerId: m.id, managerName, category: null, item: tab }));
    } else {
      m.categories.forEach(cat => cat.items.forEach(item =>
        out.push({ managerId: m.id, managerName, category: cat.name, item })));
    }
  });
  return out;
}

function qlHighlight(text, q) {
  const i = text.toLowerCase().indexOf(q);
  if (i < 0) return escapeHTML(text);
  return escapeHTML(text.slice(0, i)) + "<mark>" + escapeHTML(text.slice(i, i + q.length)) + "</mark>" + escapeHTML(text.slice(i + q.length));
}

function initQuickLinks(onSelect) {
  const box = document.querySelector(".mims-search");
  if (!box) return;
  const input = box.querySelector("input");
  const index = buildSearchIndex();

  const panel = document.createElement("div");
  panel.className = "quicklinks-results";
  box.appendChild(panel);

  let results = [], activeIdx = -1;

  function syncActive(items) {
    items.forEach((it, i) => it.classList.toggle("is-active", i === activeIdx));
    if (items[activeIdx]) items[activeIdx].scrollIntoView({ block: "nearest" });
  }

  function render(raw) {
    const q = raw.trim().toLowerCase();
    panel.innerHTML = "";
    activeIdx = -1;
    if (!q) { panel.classList.remove("is-open"); return; }
    results = index.filter(e =>
      e.item.toLowerCase().includes(q) ||
      (e.category && e.category.toLowerCase().includes(q)) ||
      e.managerName.toLowerCase().includes(q)
    ).slice(0, 12);
    if (!results.length) {
      panel.innerHTML = `<div class="quicklinks-empty">No matches for &ldquo;${escapeHTML(raw.trim())}&rdquo;</div>`;
      panel.classList.add("is-open");
      return;
    }
    results.forEach(e => {
      const crumb = e.category ? `${e.managerName} › ${e.category}` : e.managerName;
      const b = document.createElement("button");
      b.className = "quicklinks-item";
      b.innerHTML = `<span class="ql-item">${qlHighlight(e.item, q)}</span><span class="ql-crumb">${escapeHTML(crumb)}</span>`;
      b.addEventListener("mousedown", ev => { ev.preventDefault(); choose(e); });
      panel.appendChild(b);
    });
    panel.classList.add("is-open");
  }

  function choose(e) {
    input.value = "";
    panel.classList.remove("is-open");
    input.blur();
    onSelect(e);
  }

  input.addEventListener("input", () => render(input.value));
  input.addEventListener("focus", () => { if (input.value.trim()) render(input.value); });
  input.addEventListener("keydown", ev => {
    if (!panel.classList.contains("is-open")) return;
    const items = [...panel.querySelectorAll(".quicklinks-item")];
    if (ev.key === "ArrowDown") { ev.preventDefault(); activeIdx = Math.min(activeIdx + 1, items.length - 1); syncActive(items); }
    else if (ev.key === "ArrowUp") { ev.preventDefault(); activeIdx = Math.max(activeIdx - 1, 0); syncActive(items); }
    else if (ev.key === "Enter") { ev.preventDefault(); const e = results[activeIdx] || results[0]; if (e) choose(e); }
    else if (ev.key === "Escape") { panel.classList.remove("is-open"); }
  });
  document.addEventListener("click", ev => { if (!box.contains(ev.target)) panel.classList.remove("is-open"); });
}

/* ---- Microsoft Clarity ---------------------------------------------------- */
/* Each prototype calls this with the shared project ID and its variant letter.
   Sets up everything a moderated UX test needs in one Clarity project:
     - variant tag (A/B/C) so recordings/heatmaps split per prototype
     - participant grouping via ?p=<name> in the URL (identify + tag), so all
       sessions from one tester group together and are searchable by name
     - upgrade() so moderated sessions are always kept (never sampled out)
   Leave the id blank to disable (e.g. local dev). */
function injectClarity(id, variant) {
  if (!id || id === "REPLACE_ME") return;
  (function (c, l, a, r, i, t, y) {
    c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
    t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
    y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
  })(window, document, "clarity", "script", id);

  if (variant) window.clarity("set", "variant", variant);

  var q = new URLSearchParams(location.search);
  var participant = q.get("p") || q.get("participant");
  if (participant) {
    // friendly name (4th arg) shows in the dashboard; custom-id is hashed.
    window.clarity("identify", participant, undefined, undefined, participant);
    window.clarity("set", "participant", participant);
  }
  window.clarity("upgrade", "ux-test");
}

/* Lightweight wrappers — no-op until the Clarity tag has loaded. */
function clarityTag(key, val) { if (window.clarity) window.clarity("set", key, String(val)); }
function clarityEvent(name) { if (window.clarity) window.clarity("event", name); }

/* Test-harness affordance (NOT part of the MIMS UI): a fixed pill that returns
   the tester to the version menu, carrying ?p= so the session stays grouped. */
function addExitToMenu() {
  var a = document.createElement("a");
  a.className = "ux-exit";
  var p = new URLSearchParams(location.search).get("p") || new URLSearchParams(location.search).get("participant");
  a.href = "../index.html" + (p ? "?p=" + encodeURIComponent(p) : "");
  a.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M15 6l-6 6 6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>Exit to menu</span>';
  a.addEventListener("click", function () { clarityEvent("exit_to_menu"); });
  document.body.appendChild(a);
}

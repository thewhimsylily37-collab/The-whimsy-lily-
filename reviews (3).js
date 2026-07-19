/* ============================================================
   THE WHIMSY LILY — LIVE REVIEWS
   Pulls approved reviews from the linked Google Sheet and
   displays them on the homepage. Only rows where the
   "May we put your review on the website?" column starts
   with "Yes" are shown.
   ============================================================ */

const REVIEWS_SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTOdcZoHQOYyP3-Lprdb9qU2PPmjOzAsc3M_sXhH4hC_Xoj2hmUkYrOI8OQfgRpqVz4gDpJ39vI0PFL/pub?gid=1864738140&single=true&output=csv";

function parseCSV(text) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const next = text[i + 1];

    if (inQuotes) {
      if (char === '"' && next === '"') { field += '"'; i++; }
      else if (char === '"') { inQuotes = false; }
      else { field += char; }
    } else {
      if (char === '"') { inQuotes = true; }
      else if (char === ',') { row.push(field); field = ""; }
      else if (char === '\n' || char === '\r') {
        if (field !== "" || row.length) { row.push(field); rows.push(row); row = []; field = ""; }
        if (char === '\r' && next === '\n') i++;
      } else { field += char; }
    }
  }
  if (field !== "" || row.length) { row.push(field); rows.push(row); }
  return rows;
}

function renderReviews(rows) {
  const container = document.getElementById("live-reviews-container");
  if (!container) return;

  if (!rows.length) {
    container.innerHTML = '<p style="text-align:center; color:#5b3f4c;">Be the first to share your experience!</p>';
    return;
  }

  const header = rows[0].map(h => h.trim().toLowerCase());
  const idxExperience = header.findIndex(h => h.includes("tell us about your experience"));
  const idxRating = header.findIndex(h => h.includes("rate your experience"));
  const idxConsent = header.findIndex(h => h.includes("put your review on the website"));
  const idxHandle = header.findIndex(h => h.includes("instagram"));
  const idxName = header.findIndex(h => h.trim() === "name" || h.includes("your name"));

  const approved = rows.slice(1).filter(r => {
    const consent = (r[idxConsent] || "").trim().toLowerCase();
    return consent.startsWith("yes");
  });

  if (!approved.length) {
    container.innerHTML = '<p style="text-align:center; color:#5b3f4c;">Be the first to share your experience!</p>';
    return;
  }

  const cardsHtml = approved.slice(-6).reverse().map(r => {
    const text = (r[idxExperience] || "").trim();
    const rating = parseInt(r[idxRating], 10) || 5;
    const handle = (r[idxHandle] || "").trim();
    const name = idxName > -1 ? (r[idxName] || "").trim() : "";
    const displayName = name || handle || "Verified customer";
    const stars = "★".repeat(Math.max(1, Math.min(5, rating))) + "☆".repeat(5 - Math.max(1, Math.min(5, rating)));
    return `
      <div class="testi-card">
        <div class="stars">${stars}</div>
        <p>"${text}"</p>
        <div class="testi-who">
          <div class="testi-avatar"></div>
          <div><strong>${displayName}</strong><span>Verified buyer</span></div>
        </div>
      </div>
    `;
  }).join("");

  container.innerHTML = `<div class="testi-grid">${cardsHtml}</div>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("live-reviews-container");
  if (!container) return;

  fetch(REVIEWS_SHEET_URL)
    .then(res => {
      if (!res.ok) throw new Error("Network response was not ok");
      return res.text();
    })
    .then(text => {
      const rows = parseCSV(text);
      renderReviews(rows);
    })
    .catch(() => {
      container.innerHTML = '<p style="text-align:center; color:#5b3f4c;">Be the first to share your experience!</p>';
    });
});

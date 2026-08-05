/* ============================================================
   THE WHIMSY LILY — LIVE CUSTOMER COUNTER
   Counts total review submissions from the same published
   Google Sheet used for reviews, and shows it in the
   "Thank You" section on the homepage.
   ============================================================ */

const COUNTER_SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTOdcZoHQOYyP3-Lprdb9qU2PPmjOzAsc3M_sXhH4hC_Xoj2hmUkYrOI8OQfgRpqVz4gDpJ39vI0PFL/pub?gid=1864738140&single=true&output=csv";

function parseCSVForCount(text) {
  return text.trim().split("\n").length - 1; // minus header row
}

document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("customer-counter-line");
  if (!el) return;

  fetch(COUNTER_SHEET_URL)
    .then(res => {
      if (!res.ok) throw new Error("bad response");
      return res.text();
    })
    .then(text => {
      const count = parseCSVForCount(text);
      if (count > 0) {
        el.textContent = "💕 " + count + "+ happy customers and counting!";
      }
    })
    .catch(() => {
      // Fail silently — the thank-you note still shows without the counter line
    });
});

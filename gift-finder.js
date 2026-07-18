/* ============================================================
   THE WHIMSY LILY — GIFT FINDER
   Edit the PRODUCTS array below to add, remove, or update items.
   ============================================================ */

const GIFT_FINDER_PRODUCTS = [
  {
    name: "Sunflower Keychain",
    image: "sunflower-keychain.png",
    price: 50,
    link: "https://www.instagram.com/thewhimsylily.store?igsh=aHZtcDF5eWR3cjFm",
    description: "A tiny sunflower bloom to carry a little sunshine wherever they go.",
    tags: {
      relationships: ["partner","bestfriend","friend","family","classmate","someone-special","other"],
      ageGroups: ["teen","young-adult","adult"],
      giftTypes: ["cute","small","surprise"],
      personalities: ["cute-soft","nature-lover","loves-cute-things"],
      occasions: ["birthday","friendship","just-because","festival","no-occasion"],
      budget: ["under100"],
      urgency: ["asap","week","custom"]
    }
  },
  {
    name: "Bow Keychain",
    image: "bow-keychain.png",
    price: 30,
    link: "https://www.instagram.com/thewhimsylily.store?igsh=aHZtcDF5eWR3cjFm",
    description: "A sweet bow charm for their keys or bag, in your pick of six colors.",
    tags: {
      relationships: ["partner","bestfriend","friend","family","classmate","someone-special","other"],
      ageGroups: ["child","teen","young-adult"],
      giftTypes: ["cute","small","surprise"],
      personalities: ["cute-soft","fashionable","loves-cute-things"],
      occasions: ["birthday","friendship","just-because","no-occasion"],
      budget: ["under100"],
      urgency: ["asap","week","custom"]
    }
  },
  {
    name: "Flower Bouquet Keychain",
    image: "bouquet-keychain.png",
    price: 30,
    link: "https://www.instagram.com/thewhimsylily.store?igsh=aHZtcDF5eWR3cjFm",
    description: "Choose their bloom — lavender, sunflower, rose, daisy, and more.",
    tags: {
      relationships: ["partner","bestfriend","friend","family","classmate","someone-special","other"],
      ageGroups: ["teen","young-adult","adult"],
      giftTypes: ["cute","decorative","small"],
      personalities: ["cute-soft","nature-lover","loves-cute-things","creative"],
      occasions: ["birthday","friendship","just-because","festival","no-occasion"],
      budget: ["under100"],
      urgency: ["asap","week","custom"]
    }
  },
  {
    name: "Spiderman Keychain",
    image: "spiderman-keychain.png",
    price: null,
    link: "https://www.instagram.com/thewhimsylily.store?igsh=aHZtcDF5eWR3cjFm",
    description: "A friendly-neighborhood amigurumi keychain, fully hand-stitched.",
    tags: {
      relationships: ["friend","bestfriend","family","classmate","partner","someone-special","other"],
      ageGroups: ["child","teen","young-adult"],
      giftTypes: ["cute","small","surprise"],
      personalities: ["funny-playful","loves-cute-things"],
      occasions: ["birthday","friendship","just-because","no-occasion"],
      budget: ["any"],
      urgency: ["asap","week","custom"]
    }
  },
  {
    name: "Lily Pad Coasters",
    image: "lily-pad.png",
    price: 300,
    link: "https://www.instagram.com/thewhimsylily.store?igsh=aHZtcDF5eWR3cjFm",
    description: "Nature-inspired lily pad coasters with a beaded flower accent.",
    tags: {
      relationships: ["partner","family","someone-special","other"],
      ageGroups: ["young-adult","adult","older-adult"],
      giftTypes: ["useful","decorative","sentimental"],
      personalities: ["nature-lover","cozy","minimalist"],
      occasions: ["birthday","anniversary","graduation","just-because","no-occasion"],
      budget: ["250-500"],
      urgency: ["week","custom"]
    }
  },
  {
    name: "Coaster cum Bouquet",
    image: "coaster-bouquet.png",
    price: 300,
    link: "https://www.instagram.com/thewhimsylily.store?igsh=aHZtcDF5eWR3cjFm",
    description: "A 2-in-1 piece — a bouquet for their shelf, and a coaster for their cup.",
    tags: {
      relationships: ["partner","family","someone-special","other"],
      ageGroups: ["young-adult","adult","older-adult"],
      giftTypes: ["decorative","sentimental","useful"],
      personalities: ["cozy","nature-lover","creative"],
      occasions: ["birthday","anniversary","graduation","apology","just-because"],
      budget: ["250-500"],
      urgency: ["week","custom"]
    }
  },
  {
    name: "Crochet Rakhi",
    image: "rakhi.png",
    price: null,
    link: "https://www.instagram.com/thewhimsylily.store?igsh=aHZtcDF5eWR3cjFm",
    description: "A handmade rakhi with beads and tassels, for a bond that lasts forever.",
    tags: {
      relationships: ["family"],
      ageGroups: ["child","teen","young-adult","adult","older-adult"],
      giftTypes: ["sentimental","decorative"],
      personalities: ["loves-personalised","cute-soft"],
      occasions: ["festival"],
      budget: ["any"],
      urgency: ["week","custom"]
    }
  }
];

/* ============================================================
   QUIZ CONFIG
   ============================================================ */

const GIFT_FINDER_QUESTIONS = [
  {
    key: "relationship",
    multi: false,
    title: "Who are you shopping for?",
    options: [
      { value: "partner", label: "💕 Partner" },
      { value: "bestfriend", label: "👯 Best Friend" },
      { value: "friend", label: "🫶 Friend" },
      { value: "family", label: "👩‍👧 Family Member" },
      { value: "classmate", label: "🎓 Classmate or Colleague" },
      { value: "someone-special", label: "🎁 Someone Special" },
      { value: "other", label: "🤷 Other" }
    ]
  },
  {
    key: "ageGroup",
    multi: false,
    title: "What is their age group?",
    options: [
      { value: "child", label: "🧸 Child" },
      { value: "teen", label: "🌸 Teenager" },
      { value: "young-adult", label: "✨ Young Adult" },
      { value: "adult", label: "🌿 Adult" },
      { value: "older-adult", label: "👵 Older Adult" }
    ]
  },
  {
    key: "giftType",
    multi: false,
    title: "What kind of gift are you looking for?",
    options: [
      { value: "useful", label: "👜 Something Useful" },
      { value: "cute", label: "🧸 Something Cute" },
      { value: "sentimental", label: "💌 Something Sentimental" },
      { value: "decorative", label: "✨ Something Decorative" },
      { value: "small", label: "🔑 Something Small and Easy to Carry" },
      { value: "surprise", label: "🎁 Surprise Me" }
    ]
  },
  {
    key: "personality",
    multi: true,
    title: "What are they like?",
    subtitle: "Pick as many as you like",
    options: [
      { value: "cute-soft", label: "🌸 Cute & Soft" },
      { value: "creative", label: "🎨 Creative" },
      { value: "book-lover", label: "📚 Book Lover" },
      { value: "cozy", label: "☕ Cozy Person" },
      { value: "nature-lover", label: "🌿 Nature Lover" },
      { value: "loves-cute-things", label: "🧸 Loves Cute Things" },
      { value: "fashionable", label: "💄 Fashionable" },
      { value: "funny-playful", label: "😂 Funny & Playful" },
      { value: "minimalist", label: "🖤 Minimalist" },
      { value: "loves-personalised", label: "✨ Loves Personalised Gifts" }
    ]
  },
  {
    key: "occasion",
    multi: false,
    title: "What is the occasion?",
    options: [
      { value: "birthday", label: "🎂 Birthday" },
      { value: "anniversary", label: "💕 Anniversary" },
      { value: "graduation", label: "🎓 Graduation" },
      { value: "friendship", label: "🎉 Friendship Gift" },
      { value: "just-because", label: "💌 Just Because" },
      { value: "festival", label: "🪔 Festival" },
      { value: "apology", label: "🫂 Apology or Comfort Gift" },
      { value: "no-occasion", label: "🎁 No Special Occasion" }
    ]
  },
  {
    key: "budget",
    multi: false,
    title: "What is your budget?",
    options: [
      { value: "under100", label: "💰 Under ₹100" },
      { value: "100-250", label: "💸 ₹100–₹250" },
      { value: "250-500", label: "🎀 ₹250–₹500" },
      { value: "500plus", label: "✨ ₹500+" }
    ]
  },
  {
    key: "urgency",
    multi: false,
    title: "How soon do you need the gift?",
    options: [
      { value: "asap", label: "⚡ ASAP" },
      { value: "week", label: "📅 Within a Week" },
      { value: "custom", label: "🧶 I Can Wait for a Custom Order" }
    ]
  }
];

/* ============================================================
   STATE
   ============================================================ */

let gfCurrentStep = 0;
let gfAnswers = {};

/* ============================================================
   SCORING
   ============================================================ */

function gfScoreProduct(product, answers) {
  let score = 0;
  const t = product.tags;

  if (answers.relationship && t.relationships.includes(answers.relationship)) score += 2;
  if (answers.ageGroup && t.ageGroups.includes(answers.ageGroup)) score += 2;
  if (answers.giftType) {
    if (answers.giftType === "surprise") score += 1;
    else if (t.giftTypes.includes(answers.giftType)) score += 2;
  }
  if (answers.occasion && t.occasions.includes(answers.occasion)) score += 2;

  if (answers.personality && answers.personality.length) {
    answers.personality.forEach(p => {
      if (t.personalities.includes(p)) score += 1;
    });
  }

  if (answers.budget) {
    if (t.budget.includes("any") || t.budget.includes(answers.budget)) score += 2;
  }

  if (answers.urgency && t.urgency.includes(answers.urgency)) score += 1;

  return score;
}

function gfGetRecommendations(answers) {
  const scored = GIFT_FINDER_PRODUCTS.map(p => ({
    product: p,
    score: gfScoreProduct(p, answers)
  }));
  scored.sort((a, b) => b.score - a.score);
  const top = scored.slice(0, 3).filter(s => s.score > 0);
  return top.length ? top : scored.slice(0, 3);
}

function gfWhyMatch(product, answers) {
  const reasons = [];
  const t = product.tags;
  if (answers.occasion && t.occasions.includes(answers.occasion)) {
    reasons.push("great for the occasion you picked");
  }
  if (answers.personality && answers.personality.some(p => t.personalities.includes(p))) {
    reasons.push("matches their personality");
  }
  if (answers.giftType && t.giftTypes.includes(answers.giftType)) {
    reasons.push("exactly the kind of gift you're after");
  }
  if (answers.budget && (t.budget.includes("any") || t.budget.includes(answers.budget))) {
    reasons.push("fits your budget");
  }
  if (!reasons.length) reasons.push("a lovely handmade option they'll adore");
  return reasons.slice(0, 2).join(" and ");
}

/* ============================================================
   RENDERING
   ============================================================ */

function gfOpenModal() {
  gfCurrentStep = 0;
  gfAnswers = {};
  document.getElementById("gf-modal").classList.add("gf-open");
  document.body.style.overflow = "hidden";
  gfRenderStep();
}

function gfCloseModal() {
  document.getElementById("gf-modal").classList.remove("gf-open");
  document.body.style.overflow = "";
}

function gfRenderStep() {
  const container = document.getElementById("gf-modal-body");
  const q = GIFT_FINDER_QUESTIONS[gfCurrentStep];
  const total = GIFT_FINDER_QUESTIONS.length;
  const progressPct = Math.round(((gfCurrentStep) / total) * 100);

  const selected = gfAnswers[q.key];

  let optionsHtml = q.options.map(opt => {
    let isActive = q.multi
      ? (selected || []).includes(opt.value)
      : selected === opt.value;
    return `<button type="button" class="gf-option${isActive ? ' gf-selected' : ''}" data-value="${opt.value}">${opt.label}</button>`;
  }).join("");

  container.innerHTML = `
    <div class="gf-progress-wrap">
      <div class="gf-progress-label">Question ${gfCurrentStep + 1} of ${total}</div>
      <div class="gf-progress-bar"><div class="gf-progress-fill" style="width:${progressPct}%"></div></div>
    </div>
    <h3 class="gf-question-title">${q.title}</h3>
    ${q.subtitle ? `<p class="gf-question-subtitle">${q.subtitle}</p>` : ""}
    <div class="gf-options-grid">${optionsHtml}</div>
    <div class="gf-nav-row">
      <button type="button" class="btn btn-ghost" id="gf-back-btn" ${gfCurrentStep === 0 ? "disabled style='opacity:0.4;cursor:not-allowed;'" : ""}>← Back</button>
      <button type="button" class="btn btn-primary" id="gf-next-btn">${gfCurrentStep === total - 1 ? "See My Match ✨" : "Next →"}</button>
    </div>
  `;

  container.querySelectorAll(".gf-option").forEach(btn => {
    btn.addEventListener("click", () => {
      const val = btn.dataset.value;
      if (q.multi) {
        if (!gfAnswers[q.key]) gfAnswers[q.key] = [];
        const idx = gfAnswers[q.key].indexOf(val);
        if (idx > -1) gfAnswers[q.key].splice(idx, 1);
        else gfAnswers[q.key].push(val);
        btn.classList.toggle("gf-selected");
      } else {
        gfAnswers[q.key] = val;
        container.querySelectorAll(".gf-option").forEach(b => b.classList.remove("gf-selected"));
        btn.classList.add("gf-selected");
      }
    });
  });

  document.getElementById("gf-back-btn").addEventListener("click", () => {
    if (gfCurrentStep > 0) {
      gfCurrentStep--;
      gfRenderStep();
    }
  });

  document.getElementById("gf-next-btn").addEventListener("click", () => {
    const answer = gfAnswers[q.key];
    const answered = q.multi ? (answer && answer.length > 0) : !!answer;
    if (!answered) {
      const wrap = container.querySelector(".gf-options-grid");
      wrap.classList.add("gf-shake");
      setTimeout(() => wrap.classList.remove("gf-shake"), 400);
      return;
    }
    if (gfCurrentStep < total - 1) {
      gfCurrentStep++;
      gfRenderStep();
    } else {
      gfRenderResults();
    }
  });
}

function gfRenderResults() {
  const container = document.getElementById("gf-modal-body");
  const recs = gfGetRecommendations(gfAnswers);
  const maxScore = 11;

  const cardsHtml = recs.map((r, i) => {
    const pct = Math.min(100, Math.round((r.score / maxScore) * 100));
    const label = i === 0 && pct >= 60 ? "Perfect Match" : `${pct}% Match`;
    const priceLabel = r.product.price ? `₹${r.product.price}` : "DM for price";
    return `
      <div class="gf-result-card">
        <div class="gf-result-badge">${label}</div>
        <img src="${r.product.image}" alt="${r.product.name}" class="gf-result-img">
        <div class="gf-result-info">
          <h4>${r.product.name}</h4>
          <p class="gf-result-price">${priceLabel}</p>
          <p class="gf-result-desc">${r.product.description}</p>
          <p class="gf-result-why">💡 ${gfWhyMatch(r.product, gfAnswers)}</p>
          <a href="${r.product.link}" target="_blank" rel="noopener" class="btn btn-primary gf-view-btn">🛍️ View Gift</a>
        </div>
      </div>
    `;
  }).join("");

  container.innerHTML = `
    <div class="gf-results-header">
      <span class="gf-results-emoji">🎁</span>
      <h3>We Found Something Special!</h3>
      <p>Based on your answers, we think this might be the perfect gift 💕</p>
    </div>
    <div class="gf-results-list">${cardsHtml}</div>
    <div class="gf-results-actions">
      <button type="button" class="btn btn-ghost" id="gf-restart-btn">🔄 Try Again</button>
      <a href="https://www.instagram.com/thewhimsylily.store?igsh=aHZtcDF5eWR3cjFm" target="_blank" rel="noopener" class="btn btn-primary">💌 Need Something Custom?</a>
    </div>
  `;

  document.getElementById("gf-restart-btn").addEventListener("click", () => {
    gfCurrentStep = 0;
    gfAnswers = {};
    gfRenderStep();
  });
}

/* ============================================================
   INIT
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("gf-open-btn");
  const closeBtn = document.getElementById("gf-close-btn");
  const overlay = document.getElementById("gf-modal");

  if (openBtn) openBtn.addEventListener("click", gfOpenModal);
  if (closeBtn) closeBtn.addEventListener("click", gfCloseModal);
  if (overlay) {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) gfCloseModal();
    });
  }

  if (window.location.hash === "#gift-finder" && openBtn) {
    gfOpenModal();
  }
});

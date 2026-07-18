// ---------- Mobile nav toggle ----------
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menuToggle');
  const links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }

  // ---------- FAQ accordion (works for .faq-item wherever present) ----------
  document.querySelectorAll('.faq-item').forEach(item => {
    const btn = item.querySelector('.faq-q');
    const answer = item.querySelector('.faq-a');
    if (!btn || !answer) return;
    if (item.classList.contains('open')) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      item.closest('.faq-list, .info-panel')?.querySelectorAll('.faq-item.open').forEach(openItem => {
        openItem.classList.remove('open');
        openItem.querySelector('.faq-a').style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  // ---------- Info page tabs (FAQ / Shipping / Care) ----------
  const infoTabs = document.querySelectorAll('.info-tab');
  if (infoTabs.length) {
    infoTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        infoTabs.forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.info-panel').forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById(tab.dataset.panel)?.classList.add('active');
      });
    });
  }

  // ---------- Shop: category filter + search ----------
  const pills = document.querySelectorAll('.pill');
  const searchInput = document.getElementById('productSearch');
  const cards = document.querySelectorAll('.shop-card');
  const noResults = document.querySelector('.no-results');
  let activeCategory = 'all';

  function applyFilters() {
    const query = (searchInput?.value || '').trim().toLowerCase();
    let visibleCount = 0;
    cards.forEach(card => {
      const cat = card.dataset.category || '';
      const name = card.dataset.name || '';
      const matchesCategory = activeCategory === 'all' || cat === activeCategory;
      const matchesSearch = !query || name.includes(query);
      const show = matchesCategory && matchesSearch;
      card.style.display = show ? '' : 'none';
      if (show) visibleCount++;
    });
    if (noResults) noResults.classList.toggle('show', visibleCount === 0);
  }

  if (pills.length) {
    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        pills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        activeCategory = pill.dataset.category;
        applyFilters();
      });
    });
  }
  if (searchInput) {
    searchInput.addEventListener('input', applyFilters);
  }

  // ---------- Product image galleries (dots switch main image) ----------
  document.querySelectorAll('.shop-card').forEach(card => {
    const dots = card.querySelectorAll('.gallery-dots button');
    const images = card.querySelectorAll('.thumb .gallery-img');
    if (!dots.length) return;
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        dots.forEach(d => d.classList.remove('active'));
        images.forEach(img => img.classList.remove('active'));
        dot.classList.add('active');
        images[i]?.classList.add('active');
      });
    });
  });

  // ---------- Review star rating selector ----------
  const starSelect = document.querySelector('.star-select');
  if (starSelect) {
    const starBtns = starSelect.querySelectorAll('button');
    const ratingInput = document.getElementById('ratingValue');
    starBtns.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        starBtns.forEach((b, j) => b.classList.toggle('selected', j <= i));
        if (ratingInput) ratingInput.value = i + 1;
      });
    });
  }

  // ---------- Forms: placeholder submit behavior ----------
  document.querySelectorAll('form[data-form]').forEach(form => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const type = this.dataset.form;
      if (type === 'contact') {
        alert("Thanks for reaching out! (Connect this form to a service like Formspree to actually receive messages.)");
      } else if (type === 'review') {
        alert("Thanks for sharing your experience! (Connect this form to a service like Formspree so it emails your review to us.)");
      }
      this.reset();
      starSelect?.querySelectorAll('button').forEach(b => b.classList.remove('selected'));
    });
  });

  // ---------- Buy / order buttons already link directly to Instagram, no JS needed ----------
});

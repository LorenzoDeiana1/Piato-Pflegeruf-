/* PIATO – gemeinsames Verhalten: Scroll-Reveals, lokale Webfont, Reduced-Motion. */
(function () {
  var d = document, h = d.documentElement;
  h.setAttribute('data-reveal-ready', '');

  /* ---- Webfont: Figtree lokal eingebunden (keine Verbindung zu Google) ---- */
  if (!d.getElementById('piato-webfont-css')) {
    var st = d.createElement('style');
    st.id = 'piato-webfont-css';
    st.textContent =
      "@font-face{font-family:'Figtree';font-style:normal;font-weight:400 800;font-display:swap;src:url(assets/fonts/figtree-latin-ext.woff2) format('woff2');unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C4,U+2113,U+2C60-2C7F,U+A720-A7FF}" +
      "@font-face{font-family:'Figtree';font-style:normal;font-weight:400 800;font-display:swap;src:url(assets/fonts/figtree-latin.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}";
    d.head.appendChild(st);
  }

  /* ---- Scroll-Reveals ---- */
  var io = null;
  function reduced() {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
  function scan() {
    var nodes = d.querySelectorAll('[data-reveal]:not([data-shown])');
    if (!nodes.length) return;
    if (reduced() || !('IntersectionObserver' in window)) {
      for (var i = 0; i < nodes.length; i++) nodes[i].setAttribute('data-shown', '');
      return;
    }
    if (!io) {
      io = new IntersectionObserver(function (entries) {
        for (var k = 0; k < entries.length; k++) {
          if (!entries[k].isIntersecting) continue;
          var el = entries[k].target;
          var delay = parseInt(el.getAttribute('data-reveal-delay') || '0', 10) || 0;
          (function (node) {
            setTimeout(function () { node.setAttribute('data-shown', ''); }, delay);
          })(el);
          io.unobserve(el);
        }
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
    }
    for (var j = 0; j < nodes.length; j++) io.observe(nodes[j]);
    nearby();
    clearTimeout(failsafe);
    failsafe = setTimeout(showAll, 2500);
  }
  function showAll() {
    var n = d.querySelectorAll('[data-reveal]:not([data-shown])');
    for (var i = 0; i < n.length; i++) n[i].setAttribute('data-shown', '');
  }
  function nearby() {
    var n = d.querySelectorAll('[data-reveal]:not([data-shown])');
    var vh = window.innerHeight || 800;
    for (var i = 0; i < n.length; i++) {
      var r = n[i].getBoundingClientRect();
      if (r.top < vh * 1.2 && r.bottom > -vh * 0.2) n[i].setAttribute('data-shown', '');
    }
  }
  var failsafe;
  var timer;
  function schedule() { clearTimeout(timer); timer = setTimeout(scan, 60); }
  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', schedule);
  else schedule();
  if (window.MutationObserver) {
    new MutationObserver(schedule).observe(h, { childList: true, subtree: true });
  }
  window.addEventListener('load', schedule);
})();

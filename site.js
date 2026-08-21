/* PIATO – gemeinsames Verhalten: Scroll-Reveals, Webfont-Einwilligung, Reduced-Motion. */
(function () {
  var d = document, h = d.documentElement;
  h.setAttribute('data-reveal-ready', '');

  /* ---- Webfont (funktional, aber abwählbar über Cookie-Einstellungen) ---- */
  var KEY = 'piato-webfont';
  function allowed() { try { return localStorage.getItem(KEY) !== 'off'; } catch (e) { return true; } }
  function loadFont() {
    if (d.getElementById('piato-webfont-css')) return;
    var pre = [['https://fonts.googleapis.com', false], ['https://fonts.gstatic.com', true]];
    for (var i = 0; i < pre.length; i++) {
      var l = d.createElement('link');
      l.rel = 'preconnect'; l.href = pre[i][0];
      if (pre[i][1]) l.crossOrigin = 'anonymous';
      d.head.appendChild(l);
    }
    var s = d.createElement('link');
    s.id = 'piato-webfont-css';
    s.rel = 'stylesheet';
    s.href = 'https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700;800&display=swap';
    d.head.appendChild(s);
  }
  function apply() {
    if (allowed()) { h.removeAttribute('data-no-webfont'); loadFont(); }
    else {
      h.setAttribute('data-no-webfont', '');
      var el = d.getElementById('piato-webfont-css');
      if (el && el.parentNode) el.parentNode.removeChild(el);
    }
  }
  apply();
  window.piatoWebfontEnabled = allowed;
  window.piatoSetWebfont = function (on) {
    try { localStorage.setItem(KEY, on ? 'on' : 'off'); } catch (e) {}
    apply();
  };

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
  }
  var timer;
  function schedule() { clearTimeout(timer); timer = setTimeout(scan, 60); }
  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', schedule);
  else schedule();
  if (window.MutationObserver) {
    new MutationObserver(schedule).observe(h, { childList: true, subtree: true });
  }
  window.addEventListener('load', schedule);
})();

(function () {
  /* ── Shared footer for all exercise pages ── */
  var style = document.createElement('style');
  style.textContent = [
    'footer{border-top:1px solid rgba(90,122,69,0.22);background:rgba(255,255,255,0.25);padding:1.8rem 1.5rem;display:flex;justify-content:center;}',
    '.wechat-pill{display:flex;align-items:center;gap:0.7rem;background:white;border:1px solid rgba(7,193,96,0.4);border-radius:30px;padding:0.55rem 1.2rem;transition:all 0.2s;}',
    '.wx-info{display:flex;flex-direction:column;}',
    '.wx-num{font-size:1.05rem;font-weight:700;color:#07C160;letter-spacing:0.05em;}',
    '.wx-name{font-size:0.72rem;color:#6b7c5a;letter-spacing:0.05em;}'
  ].join('\n');
  document.head.appendChild(style);

  var footer = document.createElement('footer');
  footer.innerHTML =
    '<div class="wechat-pill">' +
    '<img src="../wx-logo.png" alt="WeChat QR" style="width:42px;height:42px;border-radius:6px;flex-shrink:0;">' +
    '<div class="wx-info">' +
    '<span class="wx-num">688 171 681</span>' +
    '<span class="wx-name">Academia Hua Xi</span>' +
    '</div></div>';
  document.body.appendChild(footer);
})();

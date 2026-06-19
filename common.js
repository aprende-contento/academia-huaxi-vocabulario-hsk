(function () {
  /* ── Shared footer for all exercise pages ── */
  var style = document.createElement('style');
  style.textContent = [
    'footer{position:relative;z-index:5;padding:0.8rem 1rem;margin-top:auto;display:flex;justify-content:center;}',
    '.footer-card{display:inline-flex;align-items:center;background:rgba(255,255,255,0.72);backdrop-filter:blur(16px);border-radius:40px;border:1px solid rgba(42,148,144,0.18);box-shadow:0 2px 12px rgba(0,0,0,0.06);padding:0.5rem 1.1rem;gap:0.7rem;}',
    '.footer-wechat{display:flex;align-items:center;gap:0.55rem;}',
    '.footer-wechat img{width:36px;height:36px;border-radius:6px;flex-shrink:0;}',
    '.footer-wechat span{font-size:0.85rem;font-weight:700;color:#07C160;letter-spacing:0.03em;}'
  ].join('\n');
  document.head.appendChild(style);

  var footer = document.createElement('footer');
  footer.innerHTML =
    '<div class="footer-card"><div class="footer-wechat">' +
    '<img src="../wx-logo.png" alt="WeChat QR">' +
    '<span>688 171 681 &nbsp;|&nbsp; Academia Hua Xi</span>' +
    '</div></div>';
  document.body.appendChild(footer);
})();

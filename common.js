(function () {
  /* ── Shared footer for all exercise pages ── */
  var style = document.createElement('style');
  style.textContent = [
    'footer{position:relative;z-index:5;padding:0.8rem 1rem;margin-top:auto;display:flex;justify-content:center;}',
    '.footer-card{display:inline-flex;align-items:center;background:rgba(255,255,255,0.72);backdrop-filter:blur(16px);border-radius:40px;border:1px solid rgba(42,148,144,0.18);box-shadow:0 2px 12px rgba(0,0,0,0.06);padding:0.5rem 1.1rem;gap:0.6rem;}',
    '.footer-whatsapp{display:flex;align-items:center;gap:0.4rem;font-size:0.85rem;font-weight:700;color:#25D366;letter-spacing:0.03em;}',
    '.footer-whatsapp svg{width:18px;height:18px;flex-shrink:0;}'
  ].join('\n');
  document.head.appendChild(style);

  var footer = document.createElement('footer');
  footer.innerHTML =
    '<div class="footer-card"><div class="footer-whatsapp">' +
    '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.406A9.944 9.944 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" fill="#25D366"/>' +
    '<path d="M17.006 14.57c-.274-.137-1.62-.8-1.872-.891-.252-.09-.435-.137-.617.138-.183.274-.707.89-.867 1.073-.16.182-.32.206-.594.069-.274-.138-1.156-.426-2.202-1.359-.814-.726-1.363-1.622-1.523-1.896-.16-.275-.017-.423.12-.56.123-.122.274-.32.411-.48.138-.16.183-.275.275-.458.09-.184.045-.344-.023-.481-.069-.138-.617-1.487-.846-2.036-.223-.535-.45-.463-.617-.472l-.526-.009c-.183 0-.48.069-.731.344-.252.275-.961.94-.961 2.29 0 1.349.984 2.653 1.121 2.836.137.183 1.937 2.96 4.694 4.152.656.283 1.168.452 1.566.579.658.21 1.257.18 1.73.11.527-.08 1.62-.663 1.849-1.303.228-.64.228-1.189.16-1.303-.07-.114-.252-.183-.526-.32z" fill="white"/>' +
    '</svg>' +
    '<span>656 523 387 &nbsp;|&nbsp; Chunchun Guo</span>' +
    '</div></div>';
  document.body.appendChild(footer);
})();

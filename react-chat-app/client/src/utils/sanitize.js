export function escapeText(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/[&<>"'`]/g, (m) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '`': '&#96;'
  })[m]);
}

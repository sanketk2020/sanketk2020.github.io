/* Private visit counting with GoatCounter (only added to the site when export_lilac.py has a GOATCOUNTER code).
   Page views are counted by GoatCounter's own script. This file adds the few clicks that matter for job hunting:
   CV and cover-letter downloads, contact clicks, App Store links, projects, certificates and Expertise.
   No cookies and nothing personal is sent: only the name of the action. */
(function () {
  var count = function (path, title) {
    var gc = window.goatcounter;
    if (!gc || typeof gc.count !== 'function') return;
    try { gc.count({ path: path, title: title || path, event: true }); } catch (_) {}
  };
  var slug = function (s) { return String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'unknown'; };
  var D = window.PORTFOLIO || { projects: [], certificates: [] };

  document.addEventListener('click', function (e) {
    var t = e.target; if (!t || !t.closest) return;
    var el;
    if ((el = t.closest('[data-vcf]'))) return count('contact-card-download', 'Downloaded contact card (QR card)');
    if ((el = t.closest('[data-cover]'))) return count('cover-letter-download', 'Downloaded cover letter PDF');
    if ((el = t.closest('[data-pub]'))) return count('expertise-open', 'Opened Expertise (App Store publishing)');
    if ((el = t.closest('[data-store]'))) return count('app-store/' + slug(el.title.replace(/^Open | on the App Store$/g, '')), el.title || 'Opened an App Store link');
    if ((el = t.closest('[data-app]'))) { var p = D.projects[+el.getAttribute('data-app')]; return p && count('project/' + p.id, 'Opened project: ' + p.name); }
    if ((el = t.closest('[data-cert]'))) { var c = D.certificates[+el.getAttribute('data-cert')]; return c && count('certificate/' + slug(c.title), 'Opened certificate: ' + c.title); }
    if (!(el = t.closest('a[href]'))) return;
    var h = el.getAttribute('href') || '';
    if (/\.pdf($|\?)/i.test(h)) return count('cv-download', 'Downloaded CV');
    if (/^mailto:/i.test(h)) return count('contact/email', 'Clicked email');
    if (/^tel:/i.test(h)) return count('contact/phone', 'Clicked phone');
    if (/wa\.me/i.test(h)) return count('contact/whatsapp', 'Clicked WhatsApp');
    if (/linkedin\.com/i.test(h)) return count('contact/linkedin', 'Clicked LinkedIn');
    if (/github\.com/i.test(h)) return count('contact/github/' + slug(h.replace(/^https?:\/\/github\.com\//, '')), 'Clicked GitHub: ' + h.replace(/^https?:\/\//, ''));
    if (/apps\.apple\.com/i.test(h)) return count('app-store/link', 'Opened an App Store link');
  }, true);

  document.addEventListener('submit', function (e) {
    if (e.target && e.target.id === 'cform') count('contact/message-form', 'Sent a message with the form');
  }, true);
})();

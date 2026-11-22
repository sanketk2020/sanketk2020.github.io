/* Lilac — same data and features as Signature. Shared core + design layer. */
(function () {
  'use strict';
  var D = window.PORTFOLIO;
  addEventListener('pagereveal', function (e) { var v = e.viewTransition; if (v) { v.ready.catch(function () {}); v.finished.catch(function () {}); v.updateCallbackDone && v.updateCallbackDone.catch(function () {}); } });
  addEventListener('pageswap', function (e) { var v = e.viewTransition; if (v) { v.ready.catch(function () {}); v.finished.catch(function () {}); } });
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  var byId = function (id) { for (var i = 0; i < D.projects.length; i++) if (D.projects[i].id === id) return i; return 0; };
  var page = document.body.getAttribute('data-page');
  var asInner = '<svg class="apple" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/></svg><span class="as-txt"><small>Download on the</small><b>App Store</b></span>';
  var storeTag = function (p) { return p.appStore ? '<span class="asbadge pill" role="link" data-store="' + p.appStore + '" title="Open ' + esc(p.name) + ' on the App Store">' + asInner.split('<span')[0] + 'View on App Store</span>' : ''; };
  var CV = 'assets/Sanket_Khatri_CV.pdf', TEL = 'tel:+918401073198', PHONE = '+91 84010 73198', WA = 'https://wa.me/qr/XGGB6RZ3DZSQB1?s=p';
  var sv = function (d, extra) { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"' + (extra || '') + '>' + d + '</svg>'; };
  var I = {
    home: sv('<path d="M4 11l8-7 8 7v8.5a1.5 1.5 0 0 1-1.5 1.5H15v-6H9v6H5.5A1.5 1.5 0 0 1 4 19.5z"/>'),
    user: sv('<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>'),
    layers: sv('<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>'),
    brief: sv('<rect x="3" y="7" width="18" height="13" rx="2.5"/><path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7M3 12h18"/>'),
    grid: sv('<rect x="3.5" y="3.5" width="7" height="7" rx="2"/><rect x="13.5" y="3.5" width="7" height="7" rx="2"/><rect x="3.5" y="13.5" width="7" height="7" rx="2"/><rect x="13.5" y="13.5" width="7" height="7" rx="2"/>'),
    award: sv('<circle cx="12" cy="9" r="6"/><path d="M8.5 14L7 22l5-3 5 3-1.5-8"/>'),
    chat: sv('<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-4.6A8 8 0 1 1 21 12z"/>'),
    phone: sv('<rect x="6" y="2.5" width="12" height="19" rx="3"/><path d="M10.5 18.5h3"/>'),
    wrench: sv('<path d="M14.7 6.3a4 4 0 0 0 5 5L21 13l-7.5 7.5a2.1 2.1 0 0 1-3-3L18 10l-1.3-1.3a4 4 0 0 0-5-5L14 6z"/><path d="M3 21l6-6"/>'),
    bolt: sv('<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>'),
    ship: sv('<path d="M4 12l16-8-6 17-3-7z"/>'),
    mail: sv('<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M3.5 6.5l8.5 6.5 8.5-6.5"/>'),
    call: sv('<path d="M5 3h3.5l1.8 4.5-2.3 1.4a11 11 0 0 0 6.1 6.1l1.4-2.3L20 14.5V18a2.5 2.5 0 0 1-2.7 2.5A16 16 0 0 1 3.5 5.7 2.5 2.5 0 0 1 5 3z"/>'),
    wa: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a9.9 9.9 0 00-8.5 15l-1.4 5 5.2-1.4A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1112 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 01-3.3-2.9c-.2-.4.2-.4.7-1.3a.4.4 0 000-.4l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 00-.7.3 3 3 0 00-.9 2.2 5.2 5.2 0 001.1 2.7 11.8 11.8 0 004.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 001.8-1.2 2.2 2.2 0 00.1-1.2c0-.1-.2-.2-.4-.3z"/></svg>',
    li: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z"/></svg>',
    gh: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"/></svg>',
    dl: sv('<path d="M12 4v11m0 0l-4.5-4.5M12 15l4.5-4.5M5 20h14"/>'),
    doc: sv('<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h4"/>'),
    ar: sv('<path d="M5 12h14m-6-6l6 6-6 6"/>', ' class="ar"'),
    out: sv('<path d="M7 17L17 7M8 7h9v9"/>'),
    code: sv('<path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/>'),
    lock2: sv('<rect x="4.5" y="10.5" width="15" height="10" rx="2.5"/><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3M12 14.5v2.5"/>'),
    flask: sv('<path d="M9 3h6M10 3v6L4.5 19a1.5 1.5 0 0 0 1.3 2h12.4a1.5 1.5 0 0 0 1.3-2L14 9V3M7 15h10"/>'),
    store: sv('<rect x="3" y="3" width="18" height="18" rx="5"/><path d="M10.5 7.5L7 15.5M13.5 7.5l3.5 8M8 13h8"/>'),
    pin: sv('<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>', ' width="14" height="14"'),
    menu: sv('<path d="M4 7h16M4 12h16M4 17h16"/>'),
    x: sv('<path d="M6 6l12 12M18 6L6 18"/>'),
    sun: sv('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>'),
    spark: sv('<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/>')
  };
  var PAGES = [['index', 'Home', I.home], ['about', 'About', I.user], ['skills', 'Skills', I.layers], ['experience', 'Experience', I.brief], ['projects', 'Projects', I.grid], ['certificates', 'Certificates', I.award], ['contact', 'Get in touch', I.chat]];
  var href = function (k) { return k === 'index' ? 'index.html' : k + '.html'; };
  var chips = function (list, core) { return '<div class="chips">' + list.map(function (t) { return '<span class="chip' + (core && core.indexOf(t) > -1 ? ' core' : '') + '">' + esc(t) + '</span>'; }).join('') + '</div>'; };
  var head = function (eb, title, sub) { return '<header class="phead rv"><span class="eyebrow">' + eb + '</span><h1>' + title + '</h1>' + (sub ? '<p>' + sub + '</p>' : '') + '</header>'; };
  var secHead = function (n, title, sub) { return '<div class="sec-head rv"><span class="num">' + n + '</span><div><h2>' + title + '</h2>' + (sub ? '<p>' + sub + '</p>' : '') + '</div></div>'; };
  var statusTag = function (p) { return p.impact ? '<span class="tag gold">🏆 ' + esc(p.impact) + '</span>' : p.status === 'Live' ? '<span class="tag live">● Live' + (p.ongoing ? ' · ongoing work' : '') + '</span>' : p.status === 'In development' ? '<span class="tag dev">In development</span>' : '<span class="tag">' + esc(p.status) + '</span>'; };

  /* ---------- cover letter (PDF dated the download day) ---------- */
  var today = function () { try { return new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date()); } catch (_) { return new Date().toDateString(); } };
  function loadJsPDF() {
    return new Promise(function (ok, fail) {
      if (window.jspdf && window.jspdf.jsPDF) return ok(window.jspdf.jsPDF);
      var sc = document.createElement('script'); sc.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js'; sc.async = true;
      sc.onload = function () { window.jspdf && window.jspdf.jsPDF ? ok(window.jspdf.jsPDF) : fail(new Error('jsPDF missing')); };
      sc.onerror = function () { fail(new Error('jsPDF failed to load')); };
      document.head.appendChild(sc);
    });
  }
  function buildCoverPDF(JsPDF) {
    var PC = THEME.pdf, L = D.coverLetter, pdf = new JsPDF({ unit: 'mm', format: 'a4' }), M = 22, W = 210 - M * 2, y;
    pdf.setProperties({ title: 'Cover Letter - Sanket Khatri', author: 'Sanket Khatri', subject: 'Senior iOS Developer - cover letter', creator: 'sanketkhatri portfolio' });
    pdf.setFillColor(PC[0], PC[1], PC[2]); pdf.rect(0, 0, 210, 3.2, 'F');
    pdf.setFont(THEME.pdfHead, THEME.pdfHead === 'times' ? 'normal' : 'bold'); pdf.setFontSize(26); pdf.setTextColor(27, 26, 23); pdf.text('Sanket Khatri', M, 27);
    pdf.setFont('helvetica', 'normal'); pdf.setFontSize(11.5); pdf.setTextColor(PC[0], PC[1], PC[2]); pdf.text('Senior iOS Developer', M, 34);
    pdf.setFontSize(9.5); pdf.setTextColor(95, 90, 82);
    pdf.text('+91 84010 73198   |   ' + D.email + '   |   ' + D.location, M, 41);
    var x = M; pdf.setTextColor(PC[0], PC[1], PC[2]);
    pdf.textWithLink('LinkedIn', x, 46.5, { url: D.linkedin }); x += pdf.getTextWidth('LinkedIn');
    pdf.setTextColor(95, 90, 82); pdf.text('   |   ', x, 46.5); x += pdf.getTextWidth('   |   ');
    pdf.setTextColor(PC[0], PC[1], PC[2]); pdf.textWithLink('GitHub', x, 46.5, { url: D.github });
    pdf.setDrawColor(226, 219, 205); pdf.setLineWidth(0.3); pdf.line(M, 52, 210 - M, 52);
    pdf.setFontSize(10.5); pdf.setTextColor(95, 90, 82); pdf.text(today(), M, 62);
    pdf.setFontSize(11); pdf.setTextColor(30, 30, 28);
    y = 74; pdf.text(L.greeting, M, y); y += 9;
    L.paragraphs.forEach(function (p) { var lines = pdf.splitTextToSize(p, W); pdf.text(lines, M, y, { lineHeightFactor: 1.5 }); y += lines.length * 11 * 1.5 * 0.3528 + 4.2; });
    y += 2; pdf.text(L.signoff, M, y); y += 7;
    if (THEME.sig) { try { var sg = THEME.sig(); if (sg) { pdf.addImage(sg, 'PNG', M - 1.5, y - 4, 52, 15.6); y += 13; } } catch (_) {} }
    pdf.setFont('helvetica', 'bold'); pdf.text('Sanket Khatri', M, y); y += 5.6;
    pdf.setFont('helvetica', 'normal'); pdf.setTextColor(95, 90, 82); pdf.text('Senior iOS Developer', M, y);
    pdf.setFontSize(8.5); pdf.setTextColor(150, 145, 135); pdf.text('Sanket Khatri  |  Senior iOS Developer  |  ' + D.email, 105, 287, { align: 'center' });
    return pdf;
  }
  function downloadCover(btn) {
    var label = btn ? btn.innerHTML : '';
    if (btn) { btn.disabled = true; btn.innerHTML = I.doc + ' Preparing…'; }
    loadJsPDF().then(function (JsPDF) { buildCoverPDF(JsPDF).save('Sanket_Khatri_Cover_Letter.pdf'); })
      .catch(function () { location.href = 'cover-letter.html#print'; })
      .then(function () { if (btn) { btn.disabled = false; btn.innerHTML = label; } });
  }

  var cur = D.experience[0];
  var PUB = [[I.lock2, 'Certificates & profiles', 'Distribution certificates, App IDs, capabilities and provisioning profiles set up correctly, so builds sign the first time.'],
    [I.flask, 'TestFlight', 'Archived, signed builds uploaded to TestFlight for internal and external testers before anything reaches users.'],
    [I.store, 'App Store Connect', 'Metadata, screenshots and the build submitted for App Review, with in-app purchases and capabilities configured.'],
    [I.ship, 'Release & follow-up', 'Approved builds released to users, then watched in Crashlytics so the next update is already planned.']];
  var LIVE = D.projects.filter(function (p) { return p.appStore; });
  var FEAT = ['foodini', 'smart-residential', 'hvac', 'wealth', 'investment-dojo'].map(byId);
  var SVC_IC = { phone: I.phone, ship: I.ship, wrench: I.wrench, bolt: I.bolt };
  var SKILL_NOTES = ['Daily tools for building native apps, plus the legacy Objective-C I maintain.', 'Bringing Flutter into native apps without a rewrite.', 'Structure that keeps a codebase healthy after the first release.', 'Live data that stays smooth on real networks.', 'The SDKs that make apps real: payments, push, maps, calling.', 'My speciality: signing, provisioning, TestFlight and App Store Connect, getting every build into users\' hands.', 'How I work with teams day to day.'];
  var FACTS = [['Based in', D.location], ['Work mode', D.remote], ['Experience', D.years + ' years · iOS'], ['Currently', cur.company], ['Speciality', 'App Store publishing'], ['Languages', D.languages], ['Education', D.education[0].title], ['Status', D.status]];
  var CERT_GROUPS = [['all', 'All'], ['apple', 'Apple'], ['udemy', 'Udemy'], ['openai', 'OpenAI'], ['anthropic', 'Anthropic'], ['tops', 'TOPS']];
  var certCount = function (g) { return g === 'all' ? D.certificates.length : D.certificates.filter(function (c) { return c.style === g; }).length; };
  var catCount = function (id) { return id === 'all' ? D.projects.length : D.projects.filter(function (p) { return p.cat === id; }).length; };
  var span = function (x) { var y = (x.dates.match(/\d{4}/g) || []); return y.length > 1 ? y[0] + ' — ' + y[1] : (x.current ? y[0] + ' — now' : y[0]); };
  var pfilters = function (cls) { return '<div class="' + (cls || 'filters') + ' rv" role="group" aria-label="Filter projects">' + D.categories.map(function (c, k) { return '<button data-f="' + c.id + '"' + (k ? '' : ' class="on"') + ' aria-pressed="' + !k + '">' + esc(c.label) + ' <sup>' + catCount(c.id) + '</sup></button>'; }).join('') + '</div>'; };
  var cfilters = function (cls) { return '<div class="' + (cls || 'filters') + ' rv" role="group" aria-label="Filter certificates">' + CERT_GROUPS.map(function (g, k) { return '<button data-cf="' + g[0] + '"' + (k ? '' : ' class="on"') + ' aria-pressed="' + !k + '">' + g[1] + ' <sup>' + certCount(g[0]) + '</sup></button>'; }).join('') + '</div>'; };
  var letterHTML = function () {
    var L = D.coverLetter;
    return '<article class="letter rv" aria-label="Cover letter"><header class="lt-head"><h2>Sanket Khatri</h2><p class="lt-role">Senior iOS Developer</p><p class="lt-meta">+91 84010 73198 &nbsp;|&nbsp; <a href="mailto:' + D.email + '">' + esc(D.email) + '</a> &nbsp;|&nbsp; ' + esc(D.location) + '</p><p class="lt-meta"><a href="' + D.linkedin + '" target="_blank" rel="noopener">LinkedIn</a> &nbsp;|&nbsp; <a href="' + D.github + '" target="_blank" rel="noopener">GitHub</a></p></header>' +
      '<p class="lt-date">' + today() + '</p><p>' + esc(L.greeting) + '</p>' + L.paragraphs.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('') +
      '<p class="lt-sign">' + esc(L.signoff) + '<br><b>Sanket Khatri</b><br><span>Senior iOS Developer</span></p></article>';
  };
  var coverBtns = function () { return '<div class="row-btns rv lt-btns"><button class="btn pri" data-cover>' + I.dl + ' Download PDF</button><button class="btn" id="printBtn">Print</button><a class="btn" href="' + CV + '" download="Sanket_Khatri_CV.pdf">' + I.dl + ' Download CV</a></div>'; };
  var formHTML = function () {
    return '<form class="form" id="cform"><div class="two"><label>Your name<input id="fn" required autocomplete="name" /></label><label>Topic<select id="ft"><option>New iOS app</option><option>App Store release help</option><option>Legacy app rescue</option><option>Senior iOS role</option><option>Something else</option></select></label></div>' +
      '<label>Message<textarea id="fm" rows="6" required placeholder="What are you building, and where can I help?"></textarea></label><button class="btn pri" type="submit">Send via email ' + I.ar + '</button></form>';
  };
  var CONTACTS = [[I.mail, 'Email', esc(D.email), 'mailto:' + D.email, 0], [I.call, 'Phone', PHONE, TEL, 0], [I.wa, 'WhatsApp', 'Message me', WA, 1], [I.li, 'LinkedIn', 'Sanket Khatri', D.linkedin, 1], [I.gh, 'GitHub', 'sanketk2020', D.github, 1]];
  var cvLink = function (cls, inner) { return '<a class="' + cls + '" href="' + CV + '" download="Sanket_Khatri_CV.pdf">' + inner + '</a>'; };
  var closeMenu = function () {};

  /* ---------- interaction helpers (each design adds its own effects) ---------- */
  var REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var FINE = matchMedia('(hover: hover) and (pointer: fine)').matches;
  var INTERACTIVE = 'a,button,input,textarea,select,label,summary,iframe,img,[role="button"],[role="link"],[data-app],[data-cert],[data-store],.modal,.spx,.no-fx';
  function onEmptyClick(fn) {
    document.addEventListener('click', function (e) {
      if (e.button !== 0 || e.target.closest(INTERACTIVE)) return;
      try { if (String(getSelection())) return; } catch (_) {}
      fn(e.clientX, e.clientY, e);
    });
  }
  function fx(cls, x, y, html, life) {
    var el = document.createElement('div'); el.className = 'fx ' + cls; el.setAttribute('aria-hidden', 'true');
    el.style.left = x + 'px'; el.style.top = y + 'px'; if (html) el.innerHTML = html;
    document.body.appendChild(el); setTimeout(function () { el.parentNode && el.parentNode.removeChild(el); }, life || 1200); return el;
  }
  // scroll parallax: [data-px="0.2"] moves vertically, add data-pxx to move sideways instead
  function parallax() {
    var els = $$('[data-px]'); if (!els.length || REDUCED) return;
    var run = function () {
      var vh = innerHeight;
      els.forEach(function (el) {
        var sp = +el.getAttribute('data-px'), sx = el.hasAttribute('data-pxx'), cur = el._px || 0;
        var r = el.getBoundingClientRect(), top = r.top - (sx ? 0 : cur);
        if (top > vh + 400 || top + r.height < -400) return;
        var off = Math.round((el.hasAttribute('data-pxs') ? scrollY : (top + r.height / 2 - vh / 2)) * sp * 10) / 10;
        el._px = sx ? 0 : off; el.style.translate = sx ? off + 'px 0' : '0 ' + off + 'px';
      });
    };
    addEventListener('scroll', run, { passive: true }); addEventListener('resize', run); run();
  }
  // full-screen "experience" overlays used for the Speciality instead of the plain pop-up
  var OV = null;
  function later(fn, ms) { var t = setTimeout(fn, REDUCED ? Math.min(ms, 60) : ms); if (OV) OV.timers.push(t); return t; }
  function overlay(cls, html, label) {
    closeOverlay(true);
    var o = document.createElement('div'); o.className = 'spx ' + cls; o.setAttribute('role', 'dialog'); o.setAttribute('aria-modal', 'true'); o.setAttribute('aria-label', label || 'App Store publishing');
    o.innerHTML = html; document.body.appendChild(o); document.body.classList.add('lock');
    OV = { el: o, last: document.activeElement, timers: [] };
    setTimeout(function () { o.classList.add('open'); }, 30);
    var x = o.querySelector('[data-spx-close]'); if (x) x.focus({ preventScroll: true });
    return o;
  }
  function closeOverlay(now) {
    if (!OV) return; var o = OV.el, l = OV.last; OV.timers.forEach(clearTimeout); OV = null;
    o.classList.remove('open'); o.classList.add('closing');
    setTimeout(function () { o.parentNode && o.parentNode.removeChild(o); }, now ? 0 : 520);
    document.body.classList.remove('lock'); if (l && l.focus) l.focus({ preventScroll: true });
  }
  var livePills = function () { return LIVE.map(function (p) { return '<span class="asbadge pill" role="link" data-store="' + p.appStore + '" title="Open ' + esc(p.name) + ' on the App Store">' + asInner.split('<span')[0] + esc(p.name) + '</span>'; }).join(''); };

  /* ===================== LILAC — calm and precise: warm stone, graphite, one lilac accent; a ⌘K menu and a release board ===================== */
  var THEME = { pdf: [107, 79, 216], pdfHead: 'times' };
  // logo 38a: calligraphy "SK" in a thin ring, plus the "Sanket / KHATRI" wordmark
  var MK38 = function (cls) { return '<svg class="mk38' + (cls ? ' ' + cls : '') + '" viewBox="0 0 64 64" aria-hidden="true"><path class="t" d="M32 0C55 0 64 9 64 32S55 64 32 64 0 55 0 32 9 0 32 0Z"/><circle class="r" cx="32" cy="32" r="24"/><text class="s" x="31" y="41" text-anchor="middle">SK</text></svg>'; };
  var WMK = '<span class="wmk"><span class="wmk-s">Sanket Khatri</span></span>';
  var WMK2 = '<span class="wmk two"><span class="wmk-s">Sanket</span><span class="wmk-s k">Khatri</span></span>';
  // the tab icon is drawn on the page so it uses the calligraphy font and matches the light/dark theme
  var ICON_LIGHT = ['#f4f3f0', '#6b4fd8', '#18171c', 'rgba(24,23,28,.14)'], ICON_DARK = ['#1b1924', '#a18bff', '#f1eff6', 'rgba(255,255,255,.14)'];
  function sk38png(size, c, square) {
    var cv = document.createElement('canvas'); cv.width = cv.height = size; var x = cv.getContext('2d'); x.scale(size / 64, size / 64);
    var p = new Path2D('M32 0C55 0 64 9 64 32S55 64 32 64 0 55 0 32 9 0 32 0Z');
    x.fillStyle = c[0]; if (square) x.fillRect(0, 0, 64, 64); else { x.fill(p); x.strokeStyle = c[3]; x.lineWidth = 1.2; x.stroke(p); }
    x.beginPath(); x.arc(32, 32, 24, 0, Math.PI * 2); x.strokeStyle = c[1]; x.lineWidth = square ? 1.6 : 2; x.stroke();
    x.fillStyle = c[2]; x.font = '27px Allura'; x.textAlign = 'center'; x.fillText('SK', 31, 41);
    return cv.toDataURL('image/png');
  }
  function setIcons(dark) {
    var go = function () { try {
      [['icon', 64, dark ? ICON_DARK : ICON_LIGHT, false], ['apple-touch-icon', 180, ICON_LIGHT, true]].forEach(function (s) {
        var l = document.querySelector('link[rel="' + s[0] + '"]'); if (!l) { l = document.createElement('link'); l.rel = s[0]; document.head.appendChild(l); }
        l.type = 'image/png'; l.href = sk38png(s[1], s[2], s[3]);
      });
    } catch (_) {} };
    try { document.fonts.load('27px Allura').then(go, go); } catch (_) { go(); }
  }
  // Lilac says "Expertise" (not "Speciality") for App Store publishing, like Atelier
  FACTS.forEach(function (f) { if (f[0] === 'Speciality') f[0] = 'Expertise'; });
  SKILL_NOTES = SKILL_NOTES.map(function (n) { return n.replace('My speciality', 'My expertise'); });
  // the Copperplate signature: formal pointed-pen script, written in order (S, anket, K, hatri flowing into the line beneath, t-bars, i-dot)
  // each stroke is drawn 7 times shifted sideways, so only the downstrokes come out shaded, like a pointed pen
  var SIG_STROKES = [
    'M16 154 C46 150 84 118 108 78 C130 42 146 12 128 10 C108 8 96 34 104 60 C112 86 150 100 134 130 C120 156 62 164 38 146 C26 136 46 118 74 122',
    'M74 122 C92 126 112 112 132 104 C122 96 104 108 110 120 C116 130 130 118 136 104 C134 116 134 124 144 124 C150 118 152 104 157 104 C162 104 158 120 160 124 C164 112 172 102 178 104 C184 106 180 120 188 124 C200 114 216 74 214 46 C212 32 198 42 200 62 C202 88 198 108 196 126 C202 110 218 100 222 106 C226 114 208 114 206 112 C216 116 222 126 232 124 C244 120 254 110 248 104 C242 98 232 112 238 120 C244 128 258 124 268 116 C274 106 278 82 280 66 C278 86 274 114 280 124 C286 130 298 120 306 112',
    'M318 44 C328 22 366 14 366 34 C366 54 346 100 334 140 C330 154 312 156 314 142 C316 132 330 130 338 136',
    'M404 30 C392 56 370 78 344 88 C374 90 370 128 398 126 C410 125 416 120 420 124',
    'M420 124 C430 114 444 76 442 52 C440 40 430 48 432 70 C434 92 430 112 428 128 C434 112 444 102 450 104 C456 106 452 122 462 124 C472 120 480 106 482 102 C472 96 458 110 466 120 C474 128 482 116 486 104 C484 116 484 124 494 124 C500 116 506 86 508 74 C506 94 502 118 510 124 C516 126 522 120 526 116 C528 110 532 104 538 104 C540 110 534 114 544 112 C548 116 546 124 554 124 C560 120 564 110 566 104 C564 114 564 124 574 122 C592 121 608 128 602 141 C592 158 520 168 400 172 C280 178 150 172 96 166 C70 163 58 158 64 152',
    'M268 86 C280 82 292 80 304 79',
    'M498 88 C508 85 516 84 526 83',
    'M566 86 l2 -1.5'];
  var SIG_NIB = (function () { var g = ''; SIG_STROKES.forEach(function (d) { g += '<g class="st">'; for (var k = 0; k < 7; k++) g += '<path d="' + d + '"' + (k ? ' transform="translate(' + (k * .55).toFixed(2) + ' 0)"' : '') + '/>'; g += '</g>'; }); return g; })();
  var sig = function (cls) { return '<svg class="sig ' + (cls || '') + '" viewBox="0 0 640 190" role="img" aria-label="Signature: Sanket Khatri"><g transform="translate(44 0) skewX(-22)">' + SIG_NIB + '</g></svg>'; };
  var n2 = function (k) { return ('0' + k).slice(-2); };
  var ST_IC = {
    todo: '<svg class="sti" viewBox="0 0 16 16"><circle cx="8" cy="8" r="6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-dasharray="2.2 2.2"/></svg>',
    doing: '<svg class="sti" viewBox="0 0 16 16"><circle cx="8" cy="8" r="6" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M8 4a4 4 0 0 1 0 8z" fill="currentColor"/></svg>',
    done: '<svg class="sti" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="currentColor"/><path d="M5 8.2l2 2 4-4.2" fill="none" stroke="#fff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  };
  var stIcon = function (p) { return p.status === 'Live' ? '<span class="st done" title="Live">' + ST_IC.done + '</span>' : p.status === 'In development' ? '<span class="st doing" title="In development">' + ST_IC.doing + '</span>' : '<span class="st shipped" title="' + esc(p.status) + '">' + ST_IC.done + '</span>'; };

  (function shell() {
    var h = document.createElement('header');
    h.className = 'top no-print';
    h.innerHTML = '<div class="top-in"><a class="wm" href="index.html" aria-label="Sanket Khatri, home">' + MK38() + WMK + '</a>' +
      '<nav class="nav" aria-label="Main">' + PAGES.map(function (p) { return '<a href="' + href(p[0]) + '"' + (p[0] === page ? ' class="on" aria-current="page"' : '') + '>' + p[1] + '</a>'; }).join('') + '</nav>' +
      '<div class="acts"><button class="tbtn" data-theme-t type="button"></button><button class="kbtn" id="kbtn" aria-haspopup="dialog" aria-label="Open the command menu">' + I.menu + '<span>Menu</span><kbd>⌘K</kbd></button><button class="btn sm pri" data-pub aria-haspopup="dialog">' + I.grid + '<span>Expertise</span></button></div></div>';
    document.body.insertBefore(h, document.body.firstChild);
    var sc = function () { h.classList.toggle('scrolled', scrollY > 20); }; addEventListener('scroll', sc, { passive: true }); sc();
    // light / dark theme: follows the system until the visitor picks one, then remembers it (shared key with Atelier)
    var SUN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4L6 18M18 6l1.4-1.4"/></svg>', MOON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/></svg>';
    var curTheme = function () { var t = document.documentElement.getAttribute('data-theme'); return t || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'); };
    var paintTheme = function () {
      var dark = curTheme() === 'dark';
      $$('.tbtn').forEach(function (bt) { bt.innerHTML = dark ? SUN : MOON; bt.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme'); bt.title = dark ? 'Light mode' : 'Dark mode'; });
      var mt = document.querySelector('meta[name="theme-color"]'); if (mt) mt.setAttribute('content', dark ? '#0f0f13' : '#f4f3f0');
      setIcons(dark);
    };
    document.addEventListener('click', function (e) {
      if (!e.target.closest('[data-theme-t]')) return;
      var next = curTheme() === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('sk-theme', next); } catch (_) {}
      paintTheme();
    });
    try { matchMedia('(prefers-color-scheme: dark)').addEventListener('change', paintTheme); } catch (_) {}
    paintTheme();
    // ⌘K command menu (also the menu on phones)
    var items = PAGES.map(function (p) { return ['Go to', p[1], p[2], 'href="' + href(p[0]) + '"', 'a']; }).concat([
      ['Action', 'Open my expertise: the release board', I.grid, 'data-pub', 'button'],
      ['Action', 'Download CV (PDF)', I.dl, 'href="' + CV + '" download="Sanket_Khatri_CV.pdf"', 'a'],
      ['Action', 'Download cover letter (PDF)', I.doc, 'data-cover', 'button'],
      ['Action', 'Switch light / dark theme', I.sun, 'data-theme-t', 'button'],
      ['Contact', 'Email ' + D.email, I.mail, 'href="mailto:' + D.email + '"', 'a'],
      ['Contact', 'WhatsApp me', I.wa, 'href="' + WA + '" target="_blank" rel="noopener"', 'a'],
      ['Contact', 'Call ' + PHONE, I.call, 'href="' + TEL + '"', 'a'],
      ['Contact', 'LinkedIn', I.li, 'href="' + D.linkedin + '" target="_blank" rel="noopener"', 'a'],
      ['Contact', 'GitHub', I.gh, 'href="' + D.github + '" target="_blank" rel="noopener"', 'a']]);
    var k = document.createElement('div'); k.className = 'cmdk no-print'; k.hidden = true; k.setAttribute('role', 'dialog'); k.setAttribute('aria-modal', 'true'); k.setAttribute('aria-label', 'Command menu');
    k.innerHTML = '<div class="ck-box"><div class="ck-in">' + I.spark + '<input id="ckq" placeholder="Type a page or an action…" autocomplete="off" aria-label="Search pages and actions" /><kbd>esc</kbd></div><div class="ck-list" id="cklist">' +
      items.map(function (it) { return '<' + it[4] + ' class="ck-i" ' + it[3] + ' data-q="' + esc((it[0] + ' ' + it[1]).toLowerCase()) + '"><span class="ck-ic">' + it[2] + '</span><b>' + esc(it[1]) + '</b><small>' + it[0] + '</small></' + it[4] + '>'; }).join('') + '<p class="ck-none" hidden>No matches</p></div></div>';
    document.body.appendChild(k);
    var q = k.querySelector('#ckq'), list = k.querySelector('#cklist'), last = null;
    var filter = function () { var v = q.value.trim().toLowerCase(), n = 0; $$('.ck-i', list).forEach(function (el) { var on = !v || el.getAttribute('data-q').indexOf(v) > -1; el.hidden = !on; el.classList.remove('sel'); if (on) n++; }); var f = $('.ck-i:not([hidden])', list); if (f) f.classList.add('sel'); $('.ck-none', list).hidden = n > 0; };
    var open = function () { last = document.activeElement; k.hidden = false; document.body.classList.add('lock'); q.value = ''; filter(); setTimeout(function () { q.focus(); }, 20); };
    closeMenu = function () { if (k.hidden) return; k.hidden = true; document.body.classList.remove('lock'); if (last && last.focus) last.focus({ preventScroll: true }); };
    h.querySelector('#kbtn').addEventListener('click', open);
    k.addEventListener('click', function (e) { if (e.target === k) closeMenu(); else if (e.target.closest('.ck-i')) setTimeout(closeMenu, 0); });
    q.addEventListener('input', filter);
    q.addEventListener('keydown', function (e) {
      var vis = $$('.ck-i:not([hidden])', list), i = vis.indexOf($('.ck-i.sel', list));
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); if (i > -1) vis[i].classList.remove('sel'); i = (i + (e.key === 'ArrowDown' ? 1 : -1) + vis.length) % vis.length; vis[i].classList.add('sel'); vis[i].scrollIntoView({ block: 'nearest' }); }
      if (e.key === 'Enter' && i > -1) { e.preventDefault(); vis[i].click(); }
    });
    document.addEventListener('keydown', function (e) { if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); k.hidden ? open() : closeMenu(); } });
  })();

  var head = function (eb, title, sub) { return '<header class="phead"><div class="bleed" aria-hidden="true"><i data-px="0.1"><span class="mesh big"></span></i></div><div class="rv"><span class="eyebrow">' + eb + '</span><h1>' + title + '</h1>' + (sub ? '<p>' + sub + '</p>' : '') + '</div></header>'; };
  var secHead = function (n, eb, title, more) { return '<div class="sec-h rv"><span class="sec-n">' + n + '</span><div><span class="eyebrow">' + eb + '</span><h2>' + title + '</h2></div>' + (more || '') + '</div>'; };
  var more = function (h, t) { return '<a class="more" href="' + h + '">' + t + ' ' + I.ar + '</a>'; };
  // apps as a calm table with status icons
  var table = function (ids, idAttr) {
    return '<div class="tbl"' + (idAttr ? ' id="pgrid"' : '') + '><div class="tr th" aria-hidden="true"><span></span><span>App</span><span>Domain</span><span>Stack</span><span>Years</span><span></span></div>' + ids.map(function (i) {
      var p = D.projects[i];
      return '<article class="tr rv" data-cat="' + p.cat + '" style="--a:' + p.color[0] + '"><button class="hit" data-app="' + i + '" aria-label="Open ' + esc(p.name) + '"></button>' + stIcon(p) +
        '<span class="t-name"><b>' + esc(p.name) + '</b><small>' + esc(p.summary) + '</small></span><span class="t-dom"><i></i>' + esc(p.label) + '</span><span class="t-stack">' + esc(p.tech.slice(0, 2).join(' · ')) + '</span><span class="t-yr">' + esc(p.years) + '</span>' +
        '<span class="t-end">' + (p.impact ? '<span class="tag gold">🏆 ' + esc(p.impact) + '</span>' : '') + storeTag(p) + '</span></article>';
    }).join('') + '</div>';
  };
  var cta = function () {
    return '<section class="cta rv"><span class="mesh" aria-hidden="true"></span><span class="eyebrow">Next step</span><h2>Let\'s build something <em>native.</em></h2><p>Open to senior iOS roles and selected projects, from Ahmedabad or remote.</p>' +
      '<div class="row-btns"><a class="btn light" href="contact.html">Get in touch ' + I.ar + '</a>' + cvLink('btn on-dark', I.dl + ' Download CV') + '<button class="btn on-dark" data-cover>' + I.doc + ' Cover letter</button></div></section>';
  };

  var R = {};
  R.index = function () {
    return '<section class="hero"><div class="bleed" aria-hidden="true"><i data-px="0.14"><span class="mesh big"></span></i><i data-px="0.06"><span class="mesh alt"></span></i></div><div class="rv"><span class="eyebrow"><i class="live"></i>' + esc(D.status) + '</span>' +
      '<h1>Native iOS apps, <em>engineered to ship.</em></h1></div>' +
      '<div class="h-row"><div class="h-l"><p class="lede rv d1">I\'m Sanket Khatri, a Senior iOS Developer in ' + esc(D.location) + ' with ' + esc(D.years) + ' years of Swift, UIKit and Objective-C. I take apps from the first requirement to the App Store, and I handle the signing, TestFlight and release myself.</p></div>' +
      '<dl class="kv rv d2"><div><dt>Now</dt><dd>' + esc(cur.role) + ', ' + esc(cur.company) + '</dd></div><div><dt>Expertise</dt><dd><button class="lnk" data-pub aria-haspopup="dialog">App Store publishing ' + I.ar + '</button></dd></div><div><dt>Local time</dt><dd class="ist"></dd></div><div><dt>Apps</dt><dd>' + D.appsTotal + ' worked on · ' + D.appsOnStore + ' on the App Store</dd></div></dl></div>' +
      '<div class="row-btns rv d2"><a class="btn pri" href="contact.html">Get in touch ' + I.ar + '</a><a class="btn" href="projects.html">View projects</a>' + cvLink('btn ghost', I.dl + ' CV') + '</div></section>' +
      '<section class="ship rv"><div class="sh-l"><span class="eyebrow">Expertise</span><h2>From Xcode to the App Store, <em>end to end.</em></h2><p>Every release is a small board of tasks, from certificates to Crashlytics. I move every card to Done myself.</p><button class="btn light" data-pub aria-haspopup="dialog">' + I.grid + ' Open the release board</button></div>' +
      '<div class="mini-board" aria-hidden="true">' + [['To do', [8, 9]], ['In progress', [6]], ['Done', [0, 3]]].map(function (c) { return '<div class="mb-col"><small>' + c[0] + ' <i>' + c[1].length + '</i></small>' + c[1].map(function (t) { return '<span class="mb-c" style="--c:' + SC[TASKS[t][0]] + '"><i>SK-' + (101 + t) + '</i>' + esc(TASKS[t][1]) + '</span>'; }).join('') + '</div>'; }).join('') + '</div></section>' +
      secHead('01', 'Selected work', 'Apps I\'ve <em>built and shipped.</em>', more('projects.html', 'All ' + D.appsBuilt + ' featured apps')) + table(FEAT) +
      secHead('02', 'What I do', 'Services, <em>end to end.</em>') +
      '<section class="svc">' + D.services.map(function (s, k) { return '<div class="sv rv d' + (k % 3) + '"><span class="sv-ic">' + (SVC_IC[s.icon] || I.spark) + '</span><h3>' + esc(s.title) + '</h3><p>' + esc(s.text) + '</p></div>'; }).join('') + '</section>' +
      '<div class="words" aria-hidden="true"><span data-pxx data-px="0.3">Swift · UIKit · Objective-C · SwiftUI · TestFlight · App Store Connect · Crashlytics · Swift · UIKit · Objective-C ·</span></div>' +
      secHead('03', 'Career', 'Trainee to <em>senior.</em>', more('experience.html', 'Full experience')) +
      '<section class="tl">' + D.experience.map(function (x) { return '<div class="tl-i rv' + (x.current ? ' cur' : '') + '"><span class="tl-y">' + span(x) + '</span><b>' + esc(x.role) + '</b><small>' + esc(x.company) + '</small></div>'; }).join('') + '</section>' +
      secHead('04', 'Learning', 'Certificates', more('certificates.html', 'All ' + D.certificates.length)) +
      '<section class="certs">' + [0, 1, 2, 5].map(function (n, k) { var c = D.certificates[n]; return '<button class="cert rv d' + (k % 3) + '" data-cert="' + n + '"><span class="ct-img"><img src="' + c.img + '" alt="" loading="lazy" /></span><b>' + esc(c.title) + '</b><small>' + esc(c.issuer) + ' · ' + esc(c.date.split(' · ')[0]) + '</small></button>'; }).join('') + '</section>' + cta();
  };

  R.about = function () {
    return head('About', 'Six years of native iOS, <em>and counting.</em>', 'The short version: I build iOS apps properly, ship them myself, and stay for the hard parts.') +
      '<section class="about"><figure class="portrait rv"><div class="pf"><span class="pt-img" data-px="0.05" role="img" aria-label="Portrait of Sanket Khatri"></span></div><figcaption><span>Sanket Khatri</span><span>' + esc(D.location) + '</span></figcaption></figure>' +
      '<div class="ab-r"><div class="prose rv d1">' + D.bio.map(function (b) { return '<p>' + esc(b) + '</p>'; }).join('') + '<div class="signed">' + sig('rv') + '<small>Sanket Khatri · Senior iOS Developer</small></div><div class="row-btns">' + cvLink('btn pri', I.dl + ' Download CV') + '<a class="btn" href="contact.html">Get in touch</a></div></div>' +
      '<dl class="kv grid rv d2">' + FACTS.map(function (f) { return '<div><dt>' + f[0] + '</dt><dd>' + esc(f[1]) + '</dd></div>'; }).join('') + '</dl></div></section>' +
      secHead('01', 'Process', 'How I <em>work.</em>') + '<ol class="svc">' + D.process.map(function (s, k) { return '<li class="sv rv d' + (k % 3) + '"><span class="sec-n sm">' + n2(k + 1) + '</span><h3>' + esc(s.title) + '</h3><p>' + esc(s.text) + '</p></li>'; }).join('') + '</ol>' +
      secHead('02', 'Open source', 'Tools of <em>my own.</em>') + '<div class="oss">' + D.openSource.map(function (o) { return '<a class="os rv" href="' + o.url + '" target="_blank" rel="noopener"><small>' + esc(o.kind) + (o.stars ? ' · ★ ' + D.stars : '') + '</small><b>' + esc(o.name) + '</b><p>' + esc(o.text) + '</p>' + chips(o.tech || []) + '<span class="more">View on GitHub ' + I.out + '</span></a>'; }).join('') + '</div>' +
      secHead('03', 'Education', 'Where I <em>learned.</em>') + '<div class="edu">' + D.education.map(function (e) { return '<div class="ed rv"><span class="tl-y">' + esc(e.when) + '</span><b>' + esc(e.title) + '</b><small>' + esc(e.where) + (e.detail ? ' · ' + esc(e.detail) : '') + '</small></div>'; }).join('') + '</div>' + cta();
  };

  /* ---------- skills as a type specimen: size = how many of my apps use it, italic = every day ---------- */
  var SS_ALIAS = { 'Google Maps SDK': 'Google Maps', 'FCM / APNs': 'APNs', 'Flutter Add-to-App': 'Add-to-App' };
  var ssUses = function (n) { var t = SS_ALIAS[n] || n; return D.projects.filter(function (p) { return p.tech.indexOf(t) > -1; }); };
  var SS_NOTES = ['Daily tools for building native apps, plus the legacy Objective-C I maintain.', 'Bringing Flutter into native apps without a rewrite.', 'Structure that keeps a codebase healthy after the first release.', 'Live data that stays smooth on real networks.', 'The SDKs that make apps real: payments, push, maps, calling.', 'My expertise: signing, provisioning, TestFlight and App Store Connect, getting every build into users\' hands.', 'How I work with teams day to day.'];
  var SS_DEFAULT = 'The larger the word, the more of my apps use it. <i>Italic</i> means I use it every day. Hover or tap any word for details.';
  var specimen = function () {
    var words = []; D.skills.forEach(function (g, gi) { g.items.forEach(function (it) { words.push([it, gi]); }); });
    return '<section class="ss rv"><div class="ss-tabs" role="group" aria-label="Show one group"><button class="on" type="button" data-sg="-1">All</button>' + D.skills.map(function (g, i) { return '<button type="button" data-sg="' + i + '">' + esc(g.group) + '</button>'; }).join('') + '</div>' +
      '<p class="ss-note" aria-live="polite">' + SS_DEFAULT + '</p>' +
      '<div class="ss-idx">' + words.map(function (w) { var it = w[0], u = ssUses(it[0]).length, s = Math.round(20 + Math.sqrt(u) * 11 + (it[1] ? 10 : 0)); return '<span class="ssw' + (it[1] ? ' core' : '') + '" tabindex="0" data-g="' + w[1] + '" data-sk="' + esc(it[0]) + '" style="--s:' + s + '">' + esc(it[0]) + (u ? '<sup>' + u + '</sup>' : '') + '</span>'; }).join('') + '</div>' +
      '<div class="ss-key"><span><i>Italic</i> daily tools</span><span><sup>11</sup> number of my apps that use it</span></div>' +
      '<div class="ss-xp"><span>App Store &amp; release is my expertise.</span><button class="btn sm" type="button" data-pub aria-haspopup="dialog">See how I ship ' + I.ar + '</button></div></section>';
  };
  function wireSpecimen() {
    var box = $('.ss'); if (!box) return;
    var tip = document.createElement('div'); tip.className = 'ss-tip'; tip.setAttribute('aria-hidden', 'true'); document.body.appendChild(tip);
    var show = function (w) {
      var n = w.getAttribute('data-sk'), g = D.skills[+w.getAttribute('data-g')], it = g.items.filter(function (x) { return x[0] === n; })[0], u = ssUses(n);
      tip.innerHTML = '<b>' + esc(n) + '</b><small>' + esc(g.group) + (it && it[1] ? ' · every day' : '') + (it && it[2] ? ' · ' + esc(it[2]) : '') + '</small><span>' + (u.length ? 'In ' + u.length + ' of my apps: ' + esc(u.map(function (p) { return p.name; }).join(', ')) : (it && it[1] ? 'A tool I use every day.' : 'Shipped with it in production.')) + '</span>';
      tip.classList.add('on'); var r = w.getBoundingClientRect(), tw = tip.offsetWidth;
      tip.style.left = Math.max(10, Math.min(innerWidth - tw - 10, r.left + r.width / 2 - tw / 2)) + 'px'; tip.style.top = Math.max(10, r.top - tip.offsetHeight - 10) + 'px';
    };
    var hide = function () { tip.classList.remove('on'); };
    box.addEventListener('mouseover', function (e) { var w = e.target.closest('.ssw'); if (w) show(w); });
    box.addEventListener('mouseout', function (e) { if (e.target.closest('.ssw')) hide(); });
    box.addEventListener('focusin', function (e) { var w = e.target.closest('.ssw'); if (w) show(w); });
    box.addEventListener('focusout', hide);
    addEventListener('scroll', hide, { passive: true });
    box.addEventListener('click', function (e) {
      var w = e.target.closest('.ssw'); if (w) { show(w); clearTimeout(box._t); box._t = setTimeout(hide, 2800); return; }
      var b = e.target.closest('[data-sg]'); if (!b) return; var g = +b.getAttribute('data-sg');
      $$('.ss-tabs button', box).forEach(function (x) { x.classList.toggle('on', x === b); });
      $$('.ssw', box).forEach(function (x) { x.classList.toggle('dim', g > -1 && +x.getAttribute('data-g') !== g); });
      $('.ss-note', box).innerHTML = g < 0 ? SS_DEFAULT : '<b>' + esc(D.skills[g].group) + '.</b> ' + SS_NOTES[g];
    });
  }

  /* ---------- certificates: an issuer segmented control; the cards glide into place ---------- */
  var issuerBar = function () {
    var G = [['all', 'All'], ['apple', 'Apple'], ['udemy', 'Udemy'], ['openai', 'OpenAI'], ['anthropic', 'Anthropic'], ['tops', 'TOPS']];
    var cnt = function (g) { return g === 'all' ? D.certificates.length : D.certificates.filter(function (c) { return c.style === g; }).length; };
    return '<div class="isf rv"><div class="seg" role="group" aria-label="Filter certificates by issuer">' + G.map(function (g, k) { return '<button type="button" data-cf="' + g[0] + '" data-name="' + g[1] + '"' + (k ? '' : ' class="on"') + ' aria-pressed="' + !k + '">' + g[1] + '<i>' + cnt(g[0]) + '</i></button>'; }).join('') + '</div><span class="isf-cap" aria-live="polite">Showing all ' + D.certificates.length + ' certificates</span></div>';
  };
  function wireIssuer() {
    var bar = $('.isf'); if (!bar) return;
    var cap = $('.isf-cap', bar);
    document.addEventListener('click', function (e) {
      var cf = e.target.closest && e.target.closest('.isf [data-cf]'); if (!cf) return;
      var items = $$('#cgrid > *'), first = items.map(function (el) { return el.hidden ? null : el.getBoundingClientRect(); });
      requestAnimationFrame(function () {
        var n = 0, reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
        items.forEach(function (el, i) {
          if (el.hidden) return; n++; if (reduce || !el.animate) return;
          var b = el.getBoundingClientRect(), a = first[i];
          if (!a) el.animate([{ opacity: 0, transform: 'scale(.94)' }, { opacity: 1, transform: 'none' }], { duration: 380, easing: 'cubic-bezier(.2,.8,.2,1)' });
          else if (Math.abs(a.left - b.left) + Math.abs(a.top - b.top) > 1) el.animate([{ transform: 'translate(' + (a.left - b.left) + 'px,' + (a.top - b.top) + 'px)' }, { transform: 'none' }], { duration: 500, easing: 'cubic-bezier(.2,.8,.2,1)' });
        });
        cap.textContent = cf.getAttribute('data-cf') === 'all' ? 'Showing all ' + n + ' certificates' : 'Showing ' + n + ' from ' + cf.getAttribute('data-name');
      });
    }, true);
  }

  /* ---------- skills as an interactive bento: one tile per group, no labels or counts ---------- */
  var BT_NOTES = ['The core of every app I build, plus the legacy Objective-C I maintain.', 'Bringing Flutter into native apps without a rewrite.', 'Structure that keeps a codebase healthy after the first release.', 'Live data that stays smooth on real networks.', 'The SDKs that make apps real: payments, push, maps, calling.', 'Signing, provisioning, TestFlight and App Store Connect, done myself on every app.', 'How I work with teams day to day.'];
  var BT_AREA = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
  var bento = function () {
    return '<section class="bt-grid">' + D.skills.map(function (g, i) {
      var ship = /App Store/.test(g.group), core = i === 0;
      var extra = core ? '<div class="bt-roll" aria-label="Built in Swift, UIKit, SwiftUI and Objective-C"><span aria-hidden="true">Built in</span><span class="bt-win" aria-hidden="true"><span class="bt-reel"><span>Swift</span><span>UIKit</span><span>SwiftUI</span><span>Objective-C</span><span>Swift</span></span></span></div>' :
        ship ? '<div class="bt-ship" aria-hidden="true"><div class="bt-steps"><span>Signing</span><span>TestFlight</span><span>Review</span><span>Ready for Sale</span></div><i class="bt-bar"><b></b></i></div>' : '';
      return '<article class="bt rv d' + (i % 3) + (core ? ' big' : '') + (ship ? ' dark big' : '') + '" style="grid-area:' + BT_AREA[i] + '"' + (ship ? ' data-pub role="button" tabindex="0" aria-haspopup="dialog" aria-label="App Store and release: see how I ship"' : '') + '>' +
        '<span class="bt-light" aria-hidden="true"></span><small class="bt-n">' + ('0' + (i + 1)).slice(-2) + '</small><h3>' + esc(g.group) + '</h3><p>' + BT_NOTES[i] + '</p>' + extra +
        '<div class="bt-chips">' + g.items.map(function (it, k) { return '<span style="--d:' + k + '">' + esc(it[0]) + '</span>'; }).join('') + '</div>' +
        (ship ? '<span class="bt-go">See how I ship <i aria-hidden="true">→</i></span>' : '') + '</article>';
    }).join('') + '</section>';
  };
  function wireBento() {
    var grid = $('.bt-grid'); if (!grid) return;
    var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches, fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
    // tilt toward the pointer, with a soft light where it is
    if (fine && !reduce) {
      grid.addEventListener('pointermove', function (e) {
        var t = e.target.closest('.bt'); if (!t) return; var r = t.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
        t.style.setProperty('--lx', (x * 100).toFixed(1) + '%'); t.style.setProperty('--ly', (y * 100).toFixed(1) + '%');
        t.style.transform = 'perspective(1000px) rotateX(' + ((.5 - y) * 5).toFixed(2) + 'deg) rotateY(' + ((x - .5) * 6).toFixed(2) + 'deg) translateY(-3px)';
        t.classList.add('lit');
      });
      grid.addEventListener('pointerout', function (e) { var t = e.target.closest('.bt'); if (t && !t.contains(e.relatedTarget)) { t.style.transform = ''; t.classList.remove('lit'); } });
    }
    // the iOS tile rolls through the languages
    var reel = $('.bt-reel', grid);
    if (reel && !reduce) {
      var n = 0, N = reel.children.length - 1;
      setInterval(function () {
        n++; reel.style.transition = 'transform .7s cubic-bezier(.7,0,.2,1)'; reel.style.transform = 'translateY(' + (-n * 100 / reel.children.length) + '%)';
        if (n === N) setTimeout(function () { reel.style.transition = 'none'; reel.style.transform = 'translateY(0)'; n = 0; }, 750);
      }, 2200);
    }
    // the App Store tile runs a small release
    var steps = $$('.bt-steps span', grid), bar = $('.bt-bar b', grid);
    if (steps.length) {
      var k = -1;
      var tick = function () {
        k = k >= steps.length ? -1 : k + 1;
        steps.forEach(function (s, i) { s.classList.toggle('done', i < k); s.classList.toggle('on', i === k); });
        bar.style.width = (Math.max(0, Math.min(steps.length, k + 1)) / steps.length * 100) + '%';
        setTimeout(tick, k === steps.length - 1 ? 2400 : k === steps.length ? 600 : 1300);
      };
      if (reduce) { steps.forEach(function (s) { s.classList.add('done'); }); bar.style.width = '100%'; } else tick();
    }
    grid.addEventListener('keydown', function (e) { var t = e.target.closest('[data-pub]'); if (t && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); t.click(); } });
  }

  R.skills = function () {
    return head('Skills', 'The stack <em>I ship with.</em>', 'Everything I build with, grouped the way I use it.') + bento() + cta();
  };

  /* ---------- Experience: one calm line per role that opens in place ---------- */
  var xaSpan = function (x) { var y = x.dates.match(/\d{4}/g) || []; return y.length > 1 ? y[0] + ' – ' + y[1] : (x.current ? y[0] + ' – now' : y[0]); };
  var xpAcc = function () {
    return '<section class="xa">' + D.experience.map(function (x, i) {
      var open = !!x.current;
      return '<div class="xa-r rv' + (open ? ' open' : '') + '"><button class="xa-h" type="button" aria-expanded="' + open + '" aria-controls="xa' + i + '"><small>' + esc(xaSpan(x)) + '</small><b>' + esc(x.role) + '</b><span>' + esc(x.company) + (x.current ? ' <em class="xa-now">Current</em>' : '') + '</span><i aria-hidden="true">+</i></button>' +
        '<div class="xa-b" id="xa' + i + '"><div><div class="xa-in"><p class="xa-m">' + esc(x.dates) + ' · ' + esc(x.place) + '</p><ul>' + x.points.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') + '</ul>' + chips(x.tech) + '</div></div></div></div>';
    }).join('') + '</section>';
  };

  /* ---------- Projects: pick technologies, only the apps built with all of them stay ---------- */
  var techFilter = function () {
    var count = {}; D.projects.forEach(function (p) { p.tech.forEach(function (t) { count[t] = (count[t] || 0) + 1; }); });
    var techs = Object.keys(count).sort(function (a, b) { return count[b] - count[a] || a.localeCompare(b); });
    return '<section class="tfx"><div class="tfx-top rv"><span class="tfx-l">Filter by technology</span><button class="tfx-clear" type="button" hidden>Clear</button></div>' +
      '<div class="tfx-k rv" role="group" aria-label="Filter apps by technology">' + techs.map(function (t) { return '<button type="button" aria-pressed="false" data-t="' + esc(t) + '">' + esc(t) + '<i>' + count[t] + '</i></button>'; }).join('') + '</div>' +
      '<p class="tfx-o" aria-live="polite">Showing all ' + D.projects.length + ' apps. Pick one or more technologies to narrow them down.</p>' +
      '<div class="tfx-g">' + D.projects.map(function (p, i) {
        return '<article class="tfx-c" data-i="' + i + '"><button class="tfx-hit" data-app="' + i + '" aria-label="Open ' + esc(p.name) + '"></button><small>' + esc(p.label) + ' · ' + esc(p.years) + '</small><b>' + esc(p.name) + '</b><p>' + esc(p.summary) + '</p>' +
          '<div class="tfx-ch">' + p.tech.map(function (t) { return '<span data-t="' + esc(t) + '">' + esc(t) + '</span>'; }).join('') + '</div><div class="tfx-ft">' + statusTag(p) + storeTag(p) + '</div></article>';
      }).join('') + '</div></section>';
  };

  function wireXP() {
    // experience rows
    document.addEventListener('click', function (e) { var h = e.target.closest && e.target.closest('.xa-h'); if (!h) return; var r = h.parentNode, open = !r.classList.contains('open'); r.classList.toggle('open', open); h.setAttribute('aria-expanded', open); });
    // technology filter
    var box = $('.tfx'); if (!box) return;
    var sel = [], cards = $$('.tfx-c', box), out = $('.tfx-o', box), clr = $('.tfx-clear', box), reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    var apply = function () {
      var first = cards.map(function (c) { return c.hidden ? null : c.getBoundingClientRect(); }), n = 0;
      cards.forEach(function (c) { var p = D.projects[+c.getAttribute('data-i')], ok = sel.every(function (t) { return p.tech.indexOf(t) > -1; }); c.hidden = !ok; if (ok) n++; $$('.tfx-ch span', c).forEach(function (s) { s.classList.toggle('tin', sel.indexOf(s.getAttribute('data-t')) > -1); }); });
      if (!reduce) cards.forEach(function (c, k) { if (c.hidden || !c.animate) return; var b = c.getBoundingClientRect(), a = first[k]; if (!a) c.animate([{ opacity: 0, transform: 'scale(.95)' }, { opacity: 1, transform: 'none' }], { duration: 350, easing: 'cubic-bezier(.2,.8,.2,1)' }); else if (Math.abs(a.left - b.left) + Math.abs(a.top - b.top) > 1) c.animate([{ transform: 'translate(' + (a.left - b.left) + 'px,' + (a.top - b.top) + 'px)' }, { transform: 'none' }], { duration: 450, easing: 'cubic-bezier(.2,.8,.2,1)' }); });
      out.textContent = sel.length ? (n ? n + ' app' + (n === 1 ? '' : 's') + ' built with ' + sel.join(' + ') : 'No app uses all of ' + sel.join(' + ') + ' together. Try removing one.') : 'Showing all ' + D.projects.length + ' apps. Pick one or more technologies to narrow them down.';
      clr.hidden = !sel.length;
    };
    box.addEventListener('click', function (e) {
      var b = e.target.closest('.tfx-k button');
      if (b) { var t = b.getAttribute('data-t'), k = sel.indexOf(t); if (k > -1) sel.splice(k, 1); else sel.push(t); b.classList.toggle('on', k < 0); b.setAttribute('aria-pressed', k < 0); apply(); return; }
      if (e.target.closest('.tfx-clear')) { sel = []; $$('.tfx-k button', box).forEach(function (x) { x.classList.remove('on'); x.setAttribute('aria-pressed', 'false'); }); apply(); }
    });
  }

  R.experience = function () {
    return head('Experience', 'Six years, <em>trainee to senior.</em>', 'From a job-oriented course in 2019 to senior work on a large Objective-C app for smart-home and IoT products in 2026.') +
      '<dl class="kv strip rv">' + [['Years', esc(D.years) + ' in iOS'], ['Companies', '2'], ['Apps', D.appsTotal + ' worked on'], ['App Store', D.appsOnStore + ' releases']].map(function (s) { return '<div><dt>' + s[0] + '</dt><dd>' + s[1] + '</dd></div>'; }).join('') + '</dl>' +
      xpAcc() + cta();
  };

  R.projects = function () {
    return head('Projects', 'Selected work, <em>in one place.</em>', 'The ' + D.appsBuilt + ' apps I built from scratch or led, out of ' + D.appsTotal + ' I\'ve worked on, across fintech, delivery, IoT, healthcare and social. Open any one for its features and the stack behind it.') +
      techFilter() +
      secHead('—', 'Open source', 'Tools of <em>my own.</em>') + '<div class="oss">' + D.openSource.map(function (o) { return '<a class="os rv" href="' + o.url + '" target="_blank" rel="noopener"><small>' + esc(o.kind) + '</small><b>' + esc(o.name) + '</b><p>' + esc(o.text) + '</p><span class="more">View on GitHub ' + I.out + '</span></a>'; }).join('') + '</div>' + cta();
  };

  R.certificates = function () {
    return head('Certificates', 'Learning, <em>with receipts.</em>', D.certificates.length + ' certificates earned alongside client work. Open any one to see it full size; ' + D.certificates.filter(function (c) { return c.url; }).length + ' can be verified online.') +
      issuerBar() + '<section class="certs all" id="cgrid">' + D.certificates.map(function (c, i) { return '<button class="cert rv" data-cert="' + i + '" data-style="' + c.style + '"><span class="ct-img"><img src="' + c.img + '" alt="" loading="lazy" /></span><b>' + esc(c.title) + '</b><small>' + esc(c.issuer) + ' · ' + esc(c.date.split(' · ')[0]) + (c.url ? ' · verifiable' : '') + '</small></button>'; }).join('') + '</section>' + cta();
  };

  /* ---------- Get in touch: scan to save my contact (QR of a vCard) + .vcf download ---------- */
  var VCARD = ['BEGIN:VCARD', 'VERSION:3.0', 'N:Khatri;Sanket;;;', 'FN:Sanket Khatri', 'TITLE:Senior iOS Developer', 'TEL;TYPE=CELL:+918401073198', 'EMAIL;TYPE=INTERNET:' + D.email, 'URL:' + D.linkedin, 'URL:' + D.github, 'ADR;TYPE=WORK:;;;Ahmedabad;Gujarat;;India', 'END:VCARD'].join('\r\n');
  var qrCard = function () {
    return '<div class="qrc rv d2"><div class="qrc-code" role="img" aria-label="QR code that saves Sanket Khatri to your contacts"><span>Loading QR…</span></div>' +
      '<div class="qrc-t"><span class="eyebrow">Save my contact</span><h3><span class="q-l">Scan to save my contact</span><span class="q-s">Scan to save my contact</span></h3>' +
      '<p class="muted"><span class="q-l">On a laptop? Point your phone\'s camera at the code to add Sanket Khatri (phone, email, LinkedIn).</span><span class="q-s">Scan it from another phone, or tap below to save my phone, email and LinkedIn straight to this one.</span></p>' +
      '<button class="btn sm" type="button" data-vcf>' + I.dl + ' Download contact card</button></div></div>';
  };
  function wireQR() {
    document.addEventListener('click', function (e) {
      if (!e.target.closest || !e.target.closest('[data-vcf]')) return;
      var a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([VCARD], { type: 'text/vcard' })); a.download = 'Sanket_Khatri.vcf';
      document.body.appendChild(a); a.click(); setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 800);
    });
    var box = $('.qrc-code'); if (!box) return;
    var draw = function () { box.innerHTML = ''; try { new window.QRCode(box, { text: VCARD, width: 232, height: 232, colorDark: '#111111', colorLight: '#ffffff', correctLevel: window.QRCode.CorrectLevel.M }); box.removeAttribute('title'); } catch (_) { box.innerHTML = '<span>Use “Download contact card”</span>'; } };
    var load = function () { if (window.QRCode) return draw(); var s = document.createElement('script'); s.src = 'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js'; s.async = true; s.onload = draw; s.onerror = draw; document.head.appendChild(s); };
    if ('IntersectionObserver' in window) { var io = new IntersectionObserver(function (es) { if (es[0].isIntersecting) { io.disconnect(); load(); } }, { rootMargin: '200px' }); io.observe(box); } else load();
  }

  R.contact = function () {
    return head('Get in touch', 'Let\'s build something <em>native.</em>', 'Open to senior iOS roles and selected projects. Email or WhatsApp is the fastest way to reach me.') +
      '<section class="contact"><div class="rv"><a class="mega" href="mailto:' + D.email + '">' + esc(D.email).replace('@', '<wbr>@') + '</a><p class="muted">Usually replies within a day · <span class="ist"></span> in Ahmedabad</p><div class="list">' +
      CONTACTS.map(function (c) { return '<a class="lrow" href="' + c[3] + '"' + (c[4] ? ' target="_blank" rel="noopener"' : '') + '><span class="lr-ic">' + c[0] + '</span><b>' + c[1] + '</b><span>' + c[2] + '</span>' + I.ar + '</a>'; }).join('') +
      cvLink('lrow', '<span class="lr-ic">' + I.dl + '</span><b>CV</b><span>Download PDF</span>' + I.dl) +
      '<button class="lrow" data-cover><span class="lr-ic">' + I.doc + '</span><b>Cover letter</b><span>Download PDF</span>' + I.dl + '</button><a class="lrow" href="cover-letter.html"><span class="lr-ic">' + I.doc + '</span><b>Cover letter</b><span>Read it online</span>' + I.ar + '</a></div></div>' +
      '<div class="c-side"><div class="formcard rv d1"><span class="eyebrow">Message</span><h3>Tell me about <em>your project</em></h3><p class="muted">This opens your email app with everything filled in.</p>' + formHTML() + '</div>' + qrCard() + '</div></section>';
  };

  R.cover = function () { return head('Cover letter', 'A letter for <em>your team.</em>', 'Ready to download as a PDF or print. My CV is one click away too.') + coverBtns() + letterHTML(); };

  var FOOT = function () {
    return '<footer class="foot no-print">' + MK38('sm') + '<span>Sanket Khatri · Senior iOS Developer · ' + esc(D.location) + ' · © ' + new Date().getFullYear() + '</span>' +
      '<span class="soc"><a href="mailto:' + D.email + '">Email</a><a href="' + WA + '" target="_blank" rel="noopener">WhatsApp</a><a href="' + D.linkedin + '" target="_blank" rel="noopener">LinkedIn</a><a href="' + D.github + '" target="_blank" rel="noopener">GitHub</a><a href="#main">Back to top ↑</a></span></footer>';
  };

  /* ---------- Lilac: Expertise as a release board whose cards move themselves to Done ---------- */
  var SC = ['#6b4fd8', '#1f8fb8', '#d9822b', '#2a9d5c'];
  var TASKS = [[0, 'Distribution certificate'], [0, 'Provisioning profile'], [0, 'App ID & capabilities'],
    [1, 'Archive the release build'], [1, 'Upload to TestFlight'], [1, 'Internal & external testers'],
    [2, 'Screenshots & metadata'], [2, 'In-app purchases'], [2, 'Submit for App Review'],
    [3, 'Release to the App Store'], [3, 'Watch Crashlytics']];
  var SPEC = function () {
    var card = function (t, k) { return '<div class="kc" data-k="' + k + '" style="--c:' + SC[t[0]] + '"><div class="kc-top"><span class="kc-st">' + ST_IC.todo + '</span><i>SK-' + (101 + k) + '</i><span class="kc-av">SK</span></div><b>' + esc(t[1]) + '</b><span class="kc-tag">' + esc(PUB[t[0]][1]) + '</span></div>'; };
    var col = function (id, name) { return '<section class="kcol" data-col="' + id + '"><header><span class="kh-ic">' + ST_IC[id] + '</span><b>' + name + '</b><i class="kh-n">0</i></header><div class="kcol-b"></div></section>'; };
    var o = overlay('board',
      '<div class="kb-wrap"><div class="kb-head"><div><span class="eyebrow">My expertise · release board</span><h2>Version 6.0 → <em>App Store</em></h2><p class="muted">Every release, the same ' + TASKS.length + ' tasks across four stages. Watch them move to Done.</p></div>' +
      '<button class="btn sm" data-spx-close>Close ' + I.x + '</button></div>' +
      '<div class="kb-prog"><div class="kb-stages">' + PUB.map(function (s, k) { return '<span style="--c:' + SC[k] + '"><i></i>' + esc(s[1]) + '</span>'; }).join('') + '</div><div class="kb-bar"><i></i></div><small class="kb-count">0 of ' + TASKS.length + ' done</small></div>' +
      '<div class="kb-cols">' + col('todo', 'To do') + col('doing', 'In progress') + col('done', 'Done') + '</div>' +
      '<div class="kb-end"><span class="kb-check">' + ST_IC.done + '</span><div><h3>Shipped. Version 6.0 is <em>Ready for Sale.</em></h3><div class="kb-stats"><span><b>' + D.appsTotal + '</b> apps worked on</span><span><b>' + D.appsOnStore + '</b> on the App Store</span><span><b>' + esc(D.years) + '</b> years in iOS</span></div>' +
      '<div class="mp-pills">' + livePills() + '</div><div class="row-btns"><a class="btn pri sm" href="projects.html">See the ' + D.appsBuilt + ' featured apps ' + I.ar + '</a><button class="btn sm" data-kb="replay">Run the board again ⟲</button></div></div></div></div>', 'App Store publishing release board');
    var cols = {}; $$('.kcol', o).forEach(function (c) { cols[c.getAttribute('data-col')] = $('.kcol-b', c); });
    var count = function () { $$('.kcol', o).forEach(function (c) { $('.kh-n', c).textContent = $$('.kc', c).length; }); var d = $$('.kc', cols.done).length; $('.kb-count', o).textContent = d + ' of ' + TASKS.length + ' done'; o.style.setProperty('--p', (d / TASKS.length).toFixed(3)); };
    // FLIP: move a card to another column and animate it from where it was
    var move = function (el, to) {
      var a = el.getBoundingClientRect(); cols[to].insertBefore(el, to === 'done' ? cols[to].firstChild : null);
      $('.kc-st', el).innerHTML = ST_IC[to]; el.className = 'kc ' + to;
      var b = el.getBoundingClientRect();
      if (!REDUCED && el.animate) el.animate([{ transform: 'translate(' + (a.left - b.left) + 'px,' + (a.top - b.top) + 'px)' }, { transform: 'none' }], { duration: 520, easing: 'cubic-bezier(.2,.8,.2,1)' });
      count();
    };
    var stage = function (s) { $$('.kb-stages span', o).forEach(function (el, i) { el.classList.toggle('on', i === s); el.classList.toggle('ok', i < s); }); };
    var play = function () {
      o.classList.remove('done'); cols.todo.innerHTML = TASKS.map(card).join(''); cols.doing.innerHTML = ''; cols.done.innerHTML = ''; count(); stage(-1);
      var cards = $$('.kc', cols.todo);
      cards.forEach(function (el, k) {
        later(function () { move(el, 'doing'); stage(TASKS[k][0]); }, 900 + k * 760);
        later(function () { move(el, 'done'); if (k === cards.length - 1) { stage(4); later(function () { o.classList.add('done'); var e = $('.kb-end', o); o.scrollTo({ top: o.scrollTop + e.getBoundingClientRect().top - innerHeight * .3, behavior: REDUCED ? 'auto' : 'smooth' }); }, 500); } }, 900 + k * 760 + 620);
      });
    };
    o.addEventListener('click', function (e) { if (e.target.closest('[data-kb="replay"]')) { OV && OV.timers.forEach(clearTimeout); o.scrollTo({ top: 0 }); play(); } });
    play();
  };

  // a small label beside the pointer says what a click will do
  var hintFor = function (el) {
    if (!el || !el.closest) return '';
    var x = el.closest('[data-hint],[data-store],[data-app],[data-cert],[data-cover],[data-pub],[download],a[href^="mailto:"],a[href^="tel:"],a[target="_blank"],.nav a,.more,a.tr');
    if (!x) return '';
    if (x.hasAttribute('data-hint')) return x.getAttribute('data-hint');
    if (x.hasAttribute('data-store')) return 'Open on the App Store ↗';
    if (x.hasAttribute('data-app')) return 'Open details';
    if (x.hasAttribute('data-cert')) return 'View full size';
    if (x.hasAttribute('data-cover')) return 'Download cover letter';
    if (x.hasAttribute('data-pub')) return 'Open the release board';
    if (x.hasAttribute('download')) return 'Download PDF';
    var h = x.getAttribute('href') || '';
    if (h.indexOf('mailto:') === 0) return 'Write an email';
    if (h.indexOf('tel:') === 0) return 'Call';
    if (x.getAttribute('target') === '_blank') return 'Opens in a new tab ↗';
    return '';
  };

  // write each signature with a pen: ink travels along every stroke in order at an even speed, with a short lift between strokes
  function penWrite(svg) {
    var t = .25, SPEED = 700;
    $$('.st', svg).forEach(function (g) {
      var ps = $$('path', g), L = ps[0].getTotalLength(), d = Math.max(.08, L / SPEED);
      ps.forEach(function (p) { p.style.strokeDasharray = (L + 1) + ' ' + (L + 1); p.style.strokeDashoffset = L + 1; p.style.animation = 'penInk ' + d.toFixed(2) + 's ' + t.toFixed(2) + 's cubic-bezier(.4,.05,.55,.95) forwards'; });
      t += d + (L < 60 ? .06 : .14);
    });
  }
  var AFTER = function () {
    wireBento(); wireIssuer(); wireXP(); wireQR();
    if (!REDUCED) $$('.sig').forEach(penWrite);
    if (FINE && !REDUCED) {
      var lb = document.createElement('div'); lb.className = 'hint no-print'; lb.setAttribute('aria-hidden', 'true'); document.body.appendChild(lb);
      var tx = 0, ty = 0, x = 0, y = 0, raf = 0;
      var loop = function () { x += (tx - x) * .25; y += (ty - y) * .25; lb.style.transform = 'translate(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px)'; raf = Math.abs(tx - x) + Math.abs(ty - y) > .3 ? requestAnimationFrame(loop) : 0; };
      document.addEventListener('pointermove', function (e) {
        var t = hintFor(e.target);
        tx = e.clientX + 16; ty = e.clientY + 18;
        if (t) { if (lb.textContent !== t) lb.textContent = t; if (!lb.classList.contains('on')) { x = tx; y = ty; } lb.classList.add('on'); } else lb.classList.remove('on');
        if (!raf) raf = requestAnimationFrame(loop);
        // soft lilac mesh drifts toward the pointer
        document.documentElement.style.setProperty('--mx', (e.clientX / innerWidth - .5).toFixed(3)); document.documentElement.style.setProperty('--my', (e.clientY / innerHeight - .5).toFixed(3));
      }, { passive: true });
      document.addEventListener('pointerdown', function () { lb.classList.remove('on'); });
    }
    // click on empty space: a lilac checkmark draws itself
    onEmptyClick(function (x, y) { fx('tick', x, y, '<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="21"/><path d="M14 24.5l7 7 13-14"/></svg>', 1300); });
  };

  /* ---------- modal ---------- */
  var modal = document.createElement('div');
  modal.className = 'modal'; modal.id = 'modal'; modal.hidden = true; modal.setAttribute('role', 'dialog'); modal.setAttribute('aria-modal', 'true'); modal.setAttribute('aria-label', 'Details');
  modal.innerHTML = '<div class="m-box" id="mBox"></div>';
  document.body.appendChild(modal);
  var lastFocus = null;
  function openModal(html, kind) { lastFocus = document.activeElement; var b = $('#mBox'); b.className = 'm-box' + (kind ? ' ' + kind : ''); b.innerHTML = '<button class="m-x" data-close aria-label="Close">' + I.x + '</button>' + html; modal.hidden = false; document.body.classList.add('lock'); b.scrollTop = 0; $('.m-x').focus(); }
  function closeModal() { if (modal.hidden) return; modal.hidden = true; document.body.classList.remove('lock'); if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true }); }
  function appModal(i) {
    var p = D.projects[i], n = (i + 1) % D.projects.length;
    openModal('<div class="m-app" style="--a:' + p.color[0] + '"><div class="m-body"><div class="m-top"><span class="m-idx">' + ('0' + (i + 1)).slice(-2) + '</span><div><h2>' + esc(p.name) + '</h2><span class="muted">' + esc(p.label) + ' · ' + esc(p.years) + ' · ' + esc(p.company) + '</span></div></div>' +
      '<div class="m-tags">' + statusTag(p) + '</div><p>' + esc(p.description) + '</p><h4>Key features</h4><ul>' + p.features.map(function (f) { return '<li>' + esc(f) + '</li>'; }).join('') + '</ul>' +
      '<h4>Built with</h4>' + chips(p.tech) + '<div class="row-btns m-btns">' + (p.appStore ? '<a class="asbadge lg" href="' + p.appStore + '" target="_blank" rel="noopener" aria-label="Download ' + esc(p.name) + ' on the App Store">' + asInner + '</a>' : '') + '<button class="btn sm" data-app="' + n + '">Next: ' + esc(D.projects[n].name) + ' ' + I.ar + '</button><a class="btn sm pri" href="contact.html">Discuss a similar app</a></div></div></div>', 'k-app');
  }
  function certModal(i) {
    var c = D.certificates[i];
    openModal('<div class="m-cert"><div class="frame"><img src="' + c.img + '" alt="' + esc(c.title) + ' certificate from ' + esc(c.issuer) + '" /></div><div class="bar"><div><h2>' + esc(c.title) + '</h2><span class="muted">' + esc(c.issuer) + ' · ' + esc(c.date) + '</span></div><div class="row-btns">' +
      '<a class="btn sm" href="' + c.img + '" target="_blank" rel="noopener">Full size ' + I.out + '</a>' + (c.url ? '<a class="btn sm pri" href="' + c.url + '" target="_blank" rel="noopener">Verify ' + I.out + '</a>' : '') + '</div></div></div>', 'k-cert');
  }
  function pubModal() {
    openModal('<div class="m-pub">' +
      '<div class="mp-head"><span class="eyebrow">My speciality</span><h2>From Xcode to the App Store, <em>end to end.</em></h2>' +
      '<p>Shipping is part of the job, not an afterthought. I handle the whole release path myself, from signing to the build users download.</p>' +
      '<div class="mp-stats"><div><b>' + D.appsTotal + '</b><small>apps worked on</small></div><div><b>' + D.appsOnStore + '</b><small>on the App Store</small></div><div><b>' + esc(String(D.years)) + '</b><small>years in iOS</small></div></div></div>' +
      '<ol class="mp-steps">' + PUB.map(function (st, k) { return '<li><span class="mp-ic">' + st[0] + '</span><div><i>Step 0' + (k + 1) + '</i><b>' + esc(st[1]) + '</b><small>' + esc(st[2]) + '</small></div></li>'; }).join('') + '</ol>' +
      '<div class="mp-live"><h4>Live on the App Store</h4><div class="mp-pills">' + LIVE.map(function (p) { return '<span class="asbadge pill" role="link" data-store="' + p.appStore + '" title="Open ' + esc(p.name) + ' on the App Store">' + asInner.split('<span')[0] + esc(p.name) + '</span>'; }).join('') + '</div></div>' +
      '<div class="mp-foot"><a class="btn pri" href="projects.html">See the ' + D.appsBuilt + ' featured apps ' + I.ar + '</a><a class="btn" href="contact.html">Get in touch</a></div>' +
      '</div>', 'k-pub');
  }

  /* ---------- render ---------- */
  var main = $('#main');
  main.className = 'content';
  main.innerHTML = (R[page] || R.index)() + FOOT();

  /* ---------- behaviour ---------- */
  document.addEventListener('click', function (e) {
    var t = e.target;
    if (t.closest('[data-close]') || t === modal) { closeModal(); return; }
    if (t.closest('[data-spx-close]')) { closeOverlay(); return; }
    var pb = t.closest('[data-pub]'); if (pb) { e.preventDefault(); closeMenu(); (typeof SPEC === 'function' ? SPEC : pubModal)(); return; }
    var cvb = t.closest('[data-cover]'); if (cvb) { downloadCover(cvb); return; }
    if (t.closest('#printBtn')) { window.print(); return; }
    var st = t.closest('[data-store]'); if (st) { e.preventDefault(); e.stopPropagation(); window.open(st.getAttribute('data-store'), '_blank', 'noopener'); return; }
    var a = t.closest('[data-app]'); if (a) { appModal(+a.getAttribute('data-app')); return; }
    var c = t.closest('[data-cert]'); if (c) { certModal(+c.getAttribute('data-cert')); return; }
    var f = t.closest('[data-f]');
    if (f) { $$('[data-f]').forEach(function (b) { b.classList.toggle('on', b === f); b.setAttribute('aria-pressed', b === f); }); $$('#pgrid [data-cat]').forEach(function (el) { el.hidden = !(f.dataset.f === 'all' || el.dataset.cat === f.dataset.f); el.classList.add('in'); }); return; }
    var cf = t.closest('[data-cf]');
    if (cf) { $$('[data-cf]').forEach(function (b) { b.classList.toggle('on', b === cf); b.setAttribute('aria-pressed', b === cf); }); $$('#cgrid [data-style]').forEach(function (el) { el.hidden = !(cf.dataset.cf === 'all' || el.dataset.style === cf.dataset.cf); el.classList.add('in'); }); }
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { closeModal(); closeMenu(); closeOverlay(); } });
  if (page === 'cover' && location.hash === '#print') setTimeout(function () { window.print(); }, 600);
  var form = $('#cform');
  if (form) form.addEventListener('submit', function (e) {
    e.preventDefault();
    var n = $('#fn').value.trim(), t = $('#ft').value, m = $('#fm').value.trim();
    location.href = 'mailto:' + D.email + '?subject=' + encodeURIComponent(t + ' — from ' + n) + '&body=' + encodeURIComponent(m + '\n\n— ' + n);
  });
  var tick = function () { try { var s = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Kolkata' }).format(new Date()) + ' IST'; $$('.ist').forEach(function (el) { el.textContent = s; }); } catch (_) {} };
  tick(); setInterval(tick, 30000);
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }); }, { threshold: .08, rootMargin: '0px 0px -40px 0px' });
    $$('.rv').forEach(function (n) { io.observe(n); });
  } else $$('.rv').forEach(function (n) { n.classList.add('in'); });
  if (typeof AFTER === 'function') AFTER();
  parallax();
  fetch('https://api.github.com/repos/sanketk2020/MacSpaceCleaner').then(function (r) { return r.ok ? r.json() : null; }).then(function (j) {
    if (j && typeof j.stargazers_count === 'number') $$('[data-stars]').forEach(function (s) { s.textContent = j.stargazers_count; });
  }).catch(function () {});
})();

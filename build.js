/* ================================================================
   build.js — generates a standalone page per project.

   Run after editing projects.js:

       node build.js

   Writes /<id>/index.html for every project, so each one is reachable
   at its own clean URL (e.g. /blastoise) on any static host — no
   redirects or server config needed. Pages are fully rendered HTML, so
   they work without JavaScript and produce real link previews.
================================================================ */

const fs = require('fs');
const path = require('path');
const PROJECTS = require('./projects.js');

const SITE = 'Ethan Zhou';
const CSS_VERSION = 21;

const esc = s => String(s).replace(/[&<>"]/g, c =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

const FAVICON =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E" +
  "%3Crect width='64' height='64' rx='14' fill='%23B0522F'/%3E" +
  "%3Ctext x='32' y='44' font-family='Georgia,serif' font-size='34' font-weight='bold' " +
  "fill='%23F6EEDC' text-anchor='middle'%3EEZ%3C/text%3E%3C/svg%3E";

function page(p) {
  const tags = p.tags.map(([label, cls]) =>
    `<span class="tag tag--${cls}">${esc(label)}</span>`).join('\n          ');

  const stats = (p.stats || []).length ? `
        <div class="modal-stats">
          ${p.stats.map(([v, l]) => `<div class="mstat">
            <span class="mstat-value">${esc(v)}</span>
            <span class="mstat-label">${esc(l)}</span>
          </div>`).join('\n          ')}
        </div>` : '';

  const points = (p.points || []).length ? `
        <ul class="modal-points">
          ${p.points.map(pt => `<li>${esc(pt)}</li>`).join('\n          ')}
        </ul>` : '';

  const sections = (p.sections || []).map(sec => `
        <section class="modal-section">
          <h2 class="modal-section-heading">${esc(sec.heading)}</h2>
          <ul class="modal-points">
            ${sec.points.map(pt => `<li>${esc(pt)}</li>`).join('\n            ')}
          </ul>
        </section>`).join('\n');

  const quote = p.quote ? `
        <blockquote class="modal-quote">${esc(p.quote.text)}<cite>&mdash; ${esc(p.quote.cite)}</cite></blockquote>` : '';

  const links = (p.links || []).filter(l => l.url && l.url.trim());
  const linkRow = links.length ? `
        <div class="modal-links">
          ${links.map(l => `<a class="btn btn-primary" href="${esc(l.url.trim())}" target="_blank" rel="noopener">${esc(l.label)} &#8599;</a>`).join('\n          ')}
        </div>` : '';

  const media = p.img ? `
      <div class="project-hero-media">
        <img src="../${esc(p.img)}" alt="${esc(p.title)}">
      </div>` : '';

  const desc = (p.blurb || p.summary || '').slice(0, 200);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${esc(p.title)} &middot; ${SITE}</title>
  <meta name="description" content="${esc(desc)}" />

  <meta property="og:type" content="article" />
  <meta property="og:title" content="${esc(p.title)} &middot; ${SITE}" />
  <meta property="og:description" content="${esc(desc)}" />
  ${p.img ? `<meta property="og:image" content="../${esc(p.img)}" />` : ''}
  <meta name="twitter:card" content="summary_large_image" />

  <link rel="icon" href="${FAVICON}" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="../style.css?v=${CSS_VERSION}" />
</head>
<body>

  <header class="site-header">
    <a class="header-name" href="../">${SITE}</a>
    <nav class="header-nav" aria-label="Page sections">
      <a href="../#background">Background</a>
      <a href="../#projects">Projects</a>
      <a href="../#contact">Contact</a>
    </nav>
  </header>

  <main class="project-page">
    <a class="project-back" href="../#projects">&larr; All projects</a>

    <article class="project-article">${media}

      <div class="project-body">
        <div class="modal-tags">
          ${tags}
        </div>

        <h1 class="project-title">${esc(p.title)}</h1>
        ${p.meta ? `<p class="modal-meta">${esc(p.meta)}</p>` : ''}
        <p class="modal-summary">${esc(p.summary)}</p>
${stats}${points}${sections}${quote}${linkRow}
      </div>
    </article>
  </main>

  <footer class="site-footer" id="contact">
    <div class="footer-inner">
      <h2 class="footer-heading">Get in touch</h2>
      <p class="footer-note">Always happy to talk robotics, research, or a new project.</p>
      <div class="footer-links">
        <a href="mailto:ezhoumd@gmail.com" class="btn btn-primary">ezhoumd@gmail.com</a>
        <a href="https://www.linkedin.com/in/ezhoumd/" target="_blank" rel="noopener" class="btn btn-outline">LinkedIn</a>
        <a href="https://github.com/ezhoumd" target="_blank" rel="noopener" class="btn btn-outline">GitHub</a>
      </div>
      <p class="footer-copy">&copy; <span id="year"></span> ${SITE}</p>
    </div>
  </footer>

  <script>document.getElementById('year').textContent = new Date().getFullYear();</script>
</body>
</html>
`;
}

let written = 0;
for (const p of PROJECTS) {
  const dir = path.join(__dirname, p.id);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), page(p));
  written++;
  console.log(`  /${p.id}/`);
}
console.log(`\nGenerated ${written} project pages.`);

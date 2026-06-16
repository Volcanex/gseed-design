// templates/console/ds-base.js
// Loads the G — Design Language into this template page: global stylesheet
// + the compiled component bundle. One file, one base line to edit if a
// consuming project relocates the system under _ds/<folder>.
(() => {
  const base = '../..';
  for (const p of ['styles.css']) {
    const l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = base + '/' + p;
    document.head.appendChild(l);
  }
  const s = document.createElement('script');
  s.src = base + '/_ds_bundle.js';
  s.onerror = () =>
    console.error(
      'ds-base.js: failed to load ' + s.src +
      ' — if this is a consuming project, point the base line at the bound ' +
      '_ds/<folder> tree relative to this page; in a fresh design system the ' +
      'bundle may simply not be compiled yet.'
    );
  document.head.appendChild(s);
})();

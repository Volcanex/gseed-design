# UI Kit — Console (OS-zine)

A demonstration surface for the **G — Design Language**. Not a recreation of an
existing product (none was supplied) — it shows the language *working*: a
monospaced, black-ground console crossed with a zine layout.

## What it demonstrates
- **φ-split canvas** — a golden-ratio major/minor division (`1.618fr / 1fr`).
- **Sideways edge type** — the version ticker runs up the left rail.
- **Small-grid backdrop** — toggleable 64px hairline grid behind the hero.
- **The GABRIEL highlight** — the wordmark via the `GName` primitive.
- **Composed from core components** — `Button`, `IconButton`, `Tag`, `Field`,
  `Toggle`, `Card`, `StatusLine`, `Sideways`, `GName`. No re-implementation.

## Interaction
- Switch **sources** in the sidebar → hero + feed swap.
- Toggle the **grid** in the top bar.
- Type in the **Append** field and **PUSH** (or Enter) → entry prepends to the feed.

## Files
- `index.html` — mounts the app; aliases the compiled DS namespace to `window.GDS`.
- `App.jsx` — shell: sidebar + φ-split canvas + top bar + status line.
- `Sidebar.jsx` / `MajorZone.jsx` / `MinorZone.jsx` — the three regions.
- `seed.js` — plain content data.
- `console.css` — structural layout only; all color/type from tokens.

## Note
Components are read off `window.GDS` (aliased from the generated
`window.GDesignLanguage_267337`). The `_ds_bundle.js` is compiled automatically —
if the screen is blank, the bundle has not been built yet.

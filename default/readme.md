# G — Design Language

**System Design Language Base.** A personal, project-agnostic design language —
the shared visual grammar for everything *G* makes. Not a product UI; a *base*.
Think **clean OS** (precise, gridded, monospaced, functional) **crossed with a
zine** (printed, irregular, sideways type, raw hairlines). Black is the ground.
Everything is square. Everything is aligned.

> "Big thick font, then sideways small text on the edges. Right angles. Small
> grids. Stuff is irregular in layout but all still square and in line. Golden
> ratios. The black is the background."

---

## Sources

- **Fonts (supplied by user, in `uploads/`):**
  - `minimal-mono.zip` → **Minimal Mono** (Atelier Olschinsky, 2017) — Regular /
    Bold / Black `.otf`. *Display / titles.* Licensed **personal use only**;
    commercial license required from `office@olschinsky.at` before shipping
    production work. **Flag:** confirm licensing before any commercial release.
  - `Silka-Mono-Regular.zip` → **Silka Mono** (Atipo Foundry) — Regular, webfont
    kit (woff2/ttf). *Body / running text.*
- **No codebase, Figma, or product screens were provided.** This system is built
  from the written brief + the two type families. Where this guide describes
  product surfaces (the UI kit, the slides) they are *demonstrations of the
  language*, not recreations of an existing product.

Extracted binaries live in `assets/fonts/`.

---

## The brand in one breath

A monospaced, black-ground publishing system. Loud slab-mono titles. Quiet
geometric-mono body. One electric blue used like a highlighter — never as a
fill, only as a hit. Grey does the reading work. White is for heat. Layouts are
modular grids that look hand-arranged but never break the square: blocks are
different sizes, sit at different offsets, yet every edge lands on a line.

### The signature: the GABRIEL highlight
In a wordmark or headline, the letters **G · A · B · R · I · E · L** are set in
the highlight **blue**; every other glyph stays **grey**. It is the system's
fingerprint — a name hidden in the type. Use it sparingly and deliberately
(wordmarks, hero lines, a single key word), never on a whole paragraph.

---

## CONTENT FUNDAMENTALS

**Voice.** Terse, technical, lower-drama. Reads like an OS status line or a
printed spec sheet. Statements, not sales. No exclamation marks. No emoji.

- **Casing.** Display and labels are **UPPERCASE**. Running body is sentence
  case. Microtype (edge tickers, captions) is uppercase with wide tracking.
- **Person.** Neutral / imperative for system copy ("SELECT A SOURCE", "NO
  SIGNAL"). First-person singular *"I"* is allowed for the author's own notes
  (this is a personal language). Avoid "you" marketing-speak.
- **Numbers & metadata.** Lean into them as texture: indices (`01 / 12`),
  coordinates (`φ 0.618`), timestamps, version stamps (`v0.1 — BASE`). Pad with
  leading zeros. They double as graphic elements.
- **Punctuation as glyph.** `·` (middle dot), `/`, `—` (em dash), `<-` and `->`
  arrows, brackets `[ ]`. These separate and decorate.
- **Length.** Short lines. Fragments welcome. A caption can be three words. A
  title can be one.

*Examples:*
> `SYSTEM DESIGN LANGUAGE BASE · v0.1`
> `NO SIGNAL — STANDBY`
> `SOURCE 03 / 12 · φ-ALIGNED`
> `G A B R I E L` *(blue letters spell the name)*

---

## VISUAL FOUNDATIONS

**Color.** Exactly four values, no more.
| Token | Hex | Role |
|---|---|---|
| `--g-black` | `#131316` | **Ground.** The background, always. Near-black, faintly cool. |
| `--g-grey`  | `#e2dcde` | **Text on black.** All running copy. Soft warm grey. |
| `--g-blue`  | `#ff4fd8` | **Highlight (dark).** Strong magenta *(trial)*. Accent hits — a key letter, a rule, a cursor, a state. Never a large fill. |
| `--g-paper` | `#fffcfc` | **Highlight / heat.** Emphasis, hot titles, the brightest text. |
Derived neutrals are *opacity steps of the grey* (hairlines, dimmed microtype,
panel washes) — see `tokens/colors.css`. No new hues are ever introduced. No
gradients.

**Type.** Two monospaced families.
- **Minimal Mono** — slab-mono, display only. Prefer **Black (900)** for the big
  loud titles ("thick"), Bold (700) for sections. UPPERCASE, tight tracking,
  stacked at `line-height ~0.92`.
- **Silka Mono** — clean geometric mono, body only. Regular. Sentence case,
  `line-height ~1.6`.
- Scale is a **golden-ratio (φ 1.618)** display ramp over a tight functional
  body ramp. See `tokens/typography.css`.

**Layout & grid.** Small grids, right angles, golden ratios.
- An **8px lattice** governs spacing; a **64px module** is the small-grid cell.
- Composition is **modular and irregular** — blocks of differing size and offset
  — but every block is a **square-cornered rectangle** whose edges snap to the
  grid. Irregular *arrangement*, regular *geometry*.
- Use **golden-ratio splits** for primary divisions (`--phi` / `--phi-inv`): a
  big display zone and a slim φ-minor margin/rail.
- **Sideways text on the edges** is a core move: vertical microtype (tickers,
  indices, labels) runs up the left/right margins, rotated 90°.

**Backgrounds.** Flat black. Optional **small-grid hairline backdrop**
(`.g-grid-bg`) for an OS/graph-paper read. No images-as-background by default;
when imagery arrives it is **micrographic** — small, technical, inset into a
grid cell, monochrome or duotone in the blue. (Micrographics are imagined for
now; real assets to be added later.)

**Borders & "elevation".** Depth is drawn with **hairlines, not shadows.**
- Corner radius is **0px**. Always. Right angles.
- Hairline rule `1px` (`--border`), active rule `2px` (`--border-strong`).
- **No drop shadows, no blur.** The only "shadow" is a hard `1px` inset rule
  (`--inset-line`). Cards are rectangles defined by their border, not elevation.
- Transparency is used only as the opacity-stepped neutrals (washes, hairlines);
  never frosted-glass blur.

**Motion.** OS-precise, never playful.
- Easing `cubic-bezier(0.2,0,0,1)`; durations 90 / 160 / 280ms.
- Transitions are **opacity and 1px position/color shifts** — no bounce, no
  scale-pop, no easing overshoot. A blinking block cursor is the one allowed
  "animation" flourish.

**States.**
- **Hover:** raise the line to `--border-strong`, or lift text grey → paper, or
  reveal the blue rule. ~`opacity`/color only.
- **Press:** invert — blue fill, black text — or nudge `1px`. No shrink-scale.
- **Focus:** `2px` blue rule (`--border-accent`), never a glow.
- **Selected / active:** the accent (magenta in dark, azure in light).
- **Text selection — the token effect.** Highlighting text reads like LLM
  tokens: selection breaks into a cycling palette of magentas, purples and
  blues — one colour per word, switching every four letters once a word runs
  long. Shipped as `tokens/selection.css` (the per-token `::selection` palette)
  plus `assets/token-select.js` (pre-wraps text into `.tok-N` spans). Drop the
  one script line into any static page; untokenised text falls back to a single
  magenta. React surfaces re-render the spans away — wrap after mount.

**Imagery vibe (for when micrographics land).** Cool, technical, high-contrast.
Monochrome or duotone toward the blue. Grainy/printed over glossy. Always
contained in a grid cell with a hairline frame — never full-bleed photographic.

---

## ICONOGRAPHY

The language is **typographic-first** — it prefers a *glyph* or a *label* to a
drawn icon. The approach, in order of preference:

1. **Unicode / ASCII marks as icons.** Arrows `← → ↑ ↓ <- ->`, the middle dot
   `·`, brackets `[ ]`, the block cursor `▌`, box-drawing `─ │ ┌ ┐`, math marks
   `× ÷ ± φ`, geometric `■ □ ▲ ▶`. Set in the mono families they line up on the
   grid for free. This is the default.
2. **Hairline geometric SVG icons** when a true icon is needed (chevrons, close,
   menu, status dots): **1px / 1.5px stroke, square caps, square corners,**
   drawn on a 24px grid to match the line system. Monochrome `currentColor`;
   blue only for an active state.
3. **No emoji. Ever.** They break the monochrome, square, monospaced world.

For consuming projects that want a fuller icon set, substitute a **square-cut,
hairline CDN set** — e.g. **Lucide** (2px, square-join variant) or **Phosphor
(thin/light)** — and recolor to `currentColor`. *(Substitution — not part of the
supplied brief; flag if used in production.)* No icon font is bundled here.

---

## INDEX — what's in this folder

**Foundations / entry**
- `styles.css` — the single entry point consumers link. `@import`s everything.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`,
  `selection.css` (the LLM-token `::selection` palette),
  `base.css` (reset + utilities: `.g-label`, `.g-sideways`, `.g-grid-bg`,
  `.g-frame`, `.g-hot`).
- `assets/g-name.js` — global GABRIEL auto-highlighter (`.g-name`).
- `assets/token-select.js` — global token-selection tokenizer.
- `assets/fonts/` — Minimal Mono (Regular/Bold/Black), Silka Mono (woff2/ttf).

**Specimen cards** (Design System tab) — `guidelines/` : colors, type, spacing,
brand/signature cards.

**Components** (`window` namespace — see `check_design_system`) — `components/`:
- `core/` — `Button`, `IconButton`, `Tag`, `Badge`, `Field` (input), `Toggle`,
  `Card`, `Panel`, `GName` (the GABRIEL highlighter), `Sideways` (edge ticker),
  `StatusLine`.

**UI kit** — `ui_kits/console/` — a demonstration "OS-zine" surface composed
from the primitives.

**Template** — `templates/console/` — the same console surface as a copyable
starting point (`@template`), loading the system via `ds-base.js`.

**Slides** — `slides/` — title, section, big-quote, index/grid, spec sample
slides in the language.

**Skill** — `SKILL.md` (+ this `readme.md`) — makes the folder usable as a
downloadable Agent Skill.

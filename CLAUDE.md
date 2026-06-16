# gseed-design

**Owner:** Gabriel Penman · inherits `gseed`. The g-system design-language SSOT.
One language ships: `default/` (the "G — Design Language", authored in Claude
Design / claude.ai/design and handed off here).

## Layout

- `default/styles.css` — the only file consumers link. A list of `@import`s; it
  reaches every token + `@font-face`. Order matters: fonts → colors → type →
  spacing → base → selection.
- `default/tokens/` — `colors.css` (the four values + derived neutrals +
  semantic aliases + the `[data-theme]` light/dark scopes), `typography.css`,
  `spacing.css`, `fonts.css`, `selection.css` (the per-token `::selection`
  palette), `base.css` (reset + `.g-label` / `.g-sideways` / `.g-grid-bg` /
  `.g-frame` / `.g-hot` utilities).
- `default/assets/fonts/` — Minimal Mono (Regular/Bold/Black `.otf`) + Silka
  Mono (woff2/ttf) binaries.
- `default/assets/g-name.js` — global GABRIEL auto-highlighter (`.g-name`).
- `default/assets/token-select.js` — global LLM-token selection tokenizer.
- `default/{components,guidelines,ui_kits,templates,slides}/` — **reference
  only.** React (JSX) recreations + specimen cards + sample slides that
  demonstrate the language. Not consumed at runtime.
- `default/{_ds_bundle.js,_ds_manifest.json,_adherence.oxlintrc.json}` — Claude
  Design compiler artifacts; let the reference cards render and the folder
  round-trip back into claude.ai/design. Generated — don't hand-edit.

## The consumption model — copy, never import at runtime

Consumers copy the entry closure (`styles.css` + `tokens/` + `assets/`) into
their own tree on setup and link `styles.css`. Source of truth stays here. This
is why drift is the failure mode (see gcore conventions) — there is no runtime
link to enforce sync.

## Gotchas

- **Not a drop-in over the old pack.** v1.0.0 inverts the identity (warm
  paper/navy/Newsreader → black/magenta/monospaced) and reuses semantic var
  names with opposite values (`--bg`, `--accent`). Dropping it into a consumer
  built on the old vars flips it to black and breaks styling. Reskin per-site.
- **`--g-blue` holds magenta.** The dark-mode highlight is `#ff4fd8`, but the
  token kept its blue name to avoid rippling a rename through every component.
  Light-mode highlight is the genuinely-blue `--g-blue-ink`. Rename to
  `--g-accent` only if you also update every reference in one pass.
- **`--g-blue-ink` (`#1a6fe6`) is inferred,** not sampled from
  gabrielpenman.co.uk. One-token swap if the exact brand hex turns up.
- **Minimal Mono is personal-use-only** (Atelier Olschinsky). Commercial license
  required before any commercial/public surface ships it.
- **React components don't fit the Flask/Jinja consumers.** Only the CSS layer +
  fonts + the two JS helpers port. The JSX/UI-kit/slides are reference.
- **No identity mark yet.** No `symbol.svg`/favicon — to be added.

## As a skill

`default/SKILL.md` makes the pack usable as a downloadable Agent Skill (drop
`default/` into `~/.claude/skills/g-design/`). It reads `default/readme.md` — the
full design guide (content fundamentals, visual foundations, iconography).

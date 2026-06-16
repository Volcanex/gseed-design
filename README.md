# gseed-design

**G — Design Language.** The system-wide visual grammar for everything *G*
makes. One language ships here: `default/`. Not a product UI — a *base*.

> Clean OS (precise, gridded, monospaced, functional) crossed with a zine
> (printed, irregular, sideways type, raw hairlines). Black is the ground.
> Everything is square. Everything is aligned.

## The language in four values

| Token | Hex | Role |
|---|---|---|
| `--g-black` | `#131316` | ground — the background, always |
| `--g-grey`  | `#e2dcde` | text on black — running copy |
| `--g-blue`  | `#ff4fd8` | highlight (dark mode) — **magenta**, never a fill |
| `--g-paper` | `#fffcfc` | heat — emphasis, hot titles |

Light mode flips to ink-on-paper with an azure highlight (`--g-blue-ink`,
`#1a6fe6`); both modes are mixable `data-theme` scopes. Type is two monospaced
families — Minimal Mono (display) + Silka Mono (body). Signature move: the
**GABRIEL highlight** — letters `G·A·B·R·I·E·L` burn the accent colour, every
other glyph stays grey. Full guide: [`default/readme.md`](default/readme.md).

## Consuming it

Copy `default/`'s entry closure into your project on setup and link the single
entry point — **never import at runtime**, source of truth stays here:

```
default/styles.css        → link this one file
default/tokens/*.css       (reached via @import from styles.css)
default/assets/fonts/*     (the webfont binaries)
default/assets/g-name.js       optional — global GABRIEL auto-highlighter
default/assets/token-select.js optional — LLM-token text-selection effect
```

Declare lineage in your `pyproject.toml`:

```toml
[tool.gcore]
design = "gseed-design/default@1.0.0"
```

## Not a drop-in over the old language

v1.0.0 is a full identity replacement, not a token bump. The previous pack was
warm paper (`#fcfaf3`) + navy + Newsreader serif; this is black + magenta +
monospaced, and the semantic var names **collide** (old `--bg` was near-white,
here it is near-black). Reskin each consumer deliberately — do not overwrite a
consumer's CSS and expect it to keep working.

## Open items

- **Favicon / identity mark** — `default/symbol-dark.svg` and
  `default/symbol-light.svg`: a square tile, hairline ring, hyphen as the
  highlight hit (magenta on black / azure on paper). A first mark, not final.
- **Minimal Mono licensing** — Atelier Olschinsky, **personal-use only**. A
  commercial license (`office@olschinsky.at`) is required before it ships on any
  commercial/public surface (e.g. gabrielpenman.com).

`reference/` material (React component recreations, UI kit, slides, specimen
cards) lives under `default/` as authored in Claude Design; it demonstrates the
language but is not consumed at runtime by the Flask/Jinja g- projects.

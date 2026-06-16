---
name: g-design
description: Use this skill to generate well-branded interfaces and assets for G — the System Design Language Base — either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping. An OS-meets-zine aesthetic: black ground, monospaced type, one electric blue highlight, right angles, golden-ratio grids, sideways edge text.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Fast orientation
- **Ground is black** (`#131316`), always the background. Grey (`#E2DCDE`) reads. The highlight is strong magenta `#FF4FD8` in dark mode / azure `#1A6FE6` in light mode — a *highlight only* (a key letter, a rule, a cursor, a state), never a large fill. Paper white (`#FFFCFC`) is heat/emphasis. **Four values, no more. No gradients.**
- **Type:** Minimal Mono (Black 900) for loud UPPERCASE titles; Silka Mono (Regular) for sentence-case body. Both monospaced. Golden-ratio display scale.
- **Geometry:** 0px radius, right angles. Depth is **hairlines, not shadows**. 8px lattice, 64px grid module, φ 1.618 splits. Irregular arrangement, regular geometry.
- **Signature:** the GABRIEL highlight — letters G·A·B·R·I·E·L set in blue, the rest grey.
- **Sideways microtype** runs up the margins. No emoji — use ASCII/Unicode marks as icons.
- **Text selection** looks like LLM tokens — cycling magentas/purples/blues, one colour per word/4-char chunk. Ship `tokens/selection.css` + add `assets/token-select.js` to static pages.

## Where things are
- `styles.css` — single entry point; link it and you get tokens, fonts, base utilities (`.g-label`, `.g-sideways`, `.g-grid-bg`, `.g-frame`, `.g-hot`).
- `tokens/` — colors, typography, spacing, fonts.
- `assets/fonts/` — Minimal Mono + Silka Mono binaries.
- `components/core/` — React primitives (`Button`, `IconButton`, `Tag`, `Field`, `Toggle`, `Card`, `StatusLine`, `Sideways`, `GName`). Each has a `.prompt.md`.
- `ui_kits/console/` — a full OS-zine surface composed from the primitives.
- `slides/` — five sample slide types (title, section, quote, index, spec).
- `guidelines/` — foundation specimen cards.

When using the React components in a standalone artifact, load the compiled `_ds_bundle.js` and read components off the `window` namespace (see any card or `ui_kits/console/index.html` for the pattern).

# gseed-design

Design language packs for g- projects. Each language is a directory containing:
- `tokens.css` — `:root` CSS custom properties only (colours, fonts, spacing). No components.
- `symbol.svg` — identity mark for the language/project

**Usage:** copy the directory into your project's `static/css/` on setup. Extend with component styles per-project. Never import at runtime — copy on setup, source of truth stays here.

**Lineage:** declare in `pyproject.toml` under `[tool.gcore]`:
```toml
[tool.gcore]
design = "gseed-design/default@0.1.0"
```

## Languages

- `default/` — g-supersystem identity. Warm off-white, navy accent (#2d4a6b), Newsreader + Inter + JetBrains Mono. Used by all g- tools and gabrielpenman.co.uk.

## Adding a language
New directory with `tokens.css` and `symbol.svg`, entry in this list.

A square 1:1 button for a single glyph — toolbar controls, close, nav. Prefer ASCII marks (`×`, `→`, `▌`, `≡`) or hairline SVG over drawn icons.

```jsx
<IconButton label="Close">×</IconButton>
<IconButton label="Next" size="sm">{"->"}</IconButton>
<IconButton label="Grid" active>▦</IconButton>
```

Always pass `label` for accessibility. `active` gives the blue state. Sizes `sm` (28) / `md` (36) / `lg` (44) keep hit targets square and on the grid.

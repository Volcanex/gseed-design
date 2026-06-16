The signature GABRIEL highlighter — renders a string per-letter, burning the letters G·A·B·R·I·E·L blue and leaving the rest grey. Use on wordmarks, hero lines, and one key word per view. Never on a whole paragraph.

```jsx
<GName as="h1" style={{ font: "var(--text-hero)" }}>GABRIEL</GName>
<GName>GRID AND BASE</GName>
{/* custom highlight set */}
<GName letters="OS">OPEN SYSTEM</GName>
```

Pass plain text as the only child. Override the highlighted set with `letters`, or the colors with `hot` / `cool`. Render as any tag via `as`.

The signature margin ticker — vertical uppercase microtype that runs up an edge rail. Use it on left/right margins to label, index, or stamp a version. A core G move.

```jsx
<Sideways>SYSTEM DESIGN LANGUAGE BASE · v0.1</Sideways>
<Sideways direction="down" color="var(--accent)">φ 1.618</Sideways>
```

`direction="up"` (default) reads bottom-to-top; `"down"` reads top-to-bottom. Tune `size`, `color`, `tracking`. Place inside a thin flex rail column.

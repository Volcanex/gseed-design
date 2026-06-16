An OS-style status bar — a row of monospaced cells divided by hairline rules, with an optional blinking block cursor (the one motion flourish the language allows).

```jsx
<StatusLine
  items={[
    { label: "READY", hot: true, dot: true },
    "SOURCE 03 / 12",
    "φ-ALIGNED",
  ]}
  cursor
/>
```

Items are plain strings or `{ label, hot, dot }`. `hot` colors a cell blue, `dot` adds a square status dot. Use at the top or bottom of a surface as a system readout.

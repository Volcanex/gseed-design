A square hairline container — the panel primitive. Depth comes from the 1px border, never a shadow. Optional uppercase header carries a label and a right-aligned index.

```jsx
<Card label="Source" index="03 / 12">
  <p>Body content…</p>
</Card>

<Card accent label="Live">…</Card>
```

`accent` swaps to a blue hairline frame. Omit `label`/`index` for a bare framed block. Set `pad` to override body padding.

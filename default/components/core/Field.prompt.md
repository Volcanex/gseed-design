A hairline monospaced text input with an uppercase label and a blue focus rule. The form primitive of the language.

```jsx
<Field label="Source" value={v} onChange={e => set(e.target.value)} placeholder="enter id" index="01" />
<Field label="Query" variant="line" value={q} onChange={...} />
```

Variants: `box` (framed, faint fill) or `line` (underline only). Pass `index` for a right-aligned ordinal. Focus turns the label and rule blue. Text is set hot (paper) in mono.

A square, hairline, monospaced button — the primary action element of the G language. Use for any commit/confirm/navigate action.

```jsx
<Button variant="primary" size="md" onClick={go}>RUN</Button>
<Button variant="secondary" iconRight={"->"}>NEXT</Button>
<Button variant="ghost" size="sm">CANCEL</Button>
```

Variants: `primary` (blue hairline, inverts to solid blue on press), `secondary` (grey hairline), `ghost` (borderless, dims). Sizes: `sm` / `md` / `lg`. Labels are auto-uppercased and letter-spaced — pass plain text. Use ASCII arrows (`->`, `<-`) as `iconLeft` / `iconRight` rather than drawn icons.

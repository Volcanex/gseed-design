A square OS-style switch — a blue block slides a precise 1px across a hairline track. No rounding, no bounce.

```jsx
<Toggle checked={on} onChange={setOn} label="Grid" />
```

On state turns the track blue-washed and the knob solid blue; the label brightens to paper. Controlled via `checked` / `onChange(next)`.

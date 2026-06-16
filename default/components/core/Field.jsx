import React from "react";

/**
 * Field — a hairline mono text input with an uppercase label.
 * Square, underline-or-box, blue focus rule. Optional sideways index.
 */
export function Field({
  label,
  value,
  onChange,
  placeholder = "",
  type = "text",
  variant = "box",
  disabled = false,
  index,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);

  const inputBase = {
    width: "100%",
    background: "transparent",
    color: "var(--text-hot)",
    fontFamily: "var(--font-mono)",
    fontSize: "13px",
    letterSpacing: "0.02em",
    border: 0,
    outline: "none",
    padding: variant === "box" ? "10px 12px" : "8px 0",
    borderRadius: 0,
  };

  const wrap = variant === "box"
    ? {
        border: "1px solid",
        borderColor: focus ? "var(--border-accent)" : "var(--border)",
        background: "var(--g-fill)",
      }
    : {
        borderBottom: "1px solid",
        borderColor: focus ? "var(--border-accent)" : "var(--border-strong)",
      };

  return (
    <label style={{ display: "block", ...style }}>
      {label && (
        <span
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            textTransform: "uppercase",
            letterSpacing: "0.16em",
            color: focus ? "var(--accent)" : "var(--text-muted)",
            marginBottom: "7px",
          }}
        >
          <span>{label}</span>
          {index != null && <span style={{ color: "var(--text-faint)" }}>{index}</span>}
        </span>
      )}
      <div style={{ transition: "border-color var(--dur) var(--ease)", ...wrap }}>
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{ ...inputBase, opacity: disabled ? 0.4 : 1 }}
          {...rest}
        />
      </div>
    </label>
  );
}

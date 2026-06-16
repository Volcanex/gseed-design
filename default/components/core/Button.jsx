import React from "react";

/**
 * Button — G Design Language
 * Square, hairline, monospaced. Three variants, two sizes.
 * Hover lifts the rule; press inverts to a blue fill. No radius, no shadow.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  iconLeft = null,
  iconRight = null,
  onClick,
  type = "button",
  style,
  ...rest
}) {
  const [pressed, setPressed] = React.useState(false);
  const [hover, setHover] = React.useState(false);

  const pads = {
    sm: { padding: "6px 12px", fontSize: "11px" },
    md: { padding: "10px 18px", fontSize: "12px" },
    lg: { padding: "14px 26px", fontSize: "13px" },
  }[size];

  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    fontFamily: "var(--font-mono)",
    textTransform: "uppercase",
    letterSpacing: "0.14em",
    lineHeight: 1,
    border: "1px solid",
    borderRadius: "0",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.4 : 1,
    transition: "background var(--dur) var(--ease), color var(--dur) var(--ease), border-color var(--dur) var(--ease)",
    userSelect: "none",
    ...pads,
  };

  const variants = {
    primary: {
      background: pressed ? "var(--g-blue)" : hover ? "var(--g-blue-wash)" : "transparent",
      color: pressed ? "var(--g-black)" : "var(--g-blue)",
      borderColor: "var(--g-blue-line)",
    },
    secondary: {
      background: pressed ? "var(--g-grey)" : "transparent",
      color: pressed ? "var(--g-black)" : "var(--text)",
      borderColor: hover ? "var(--border-strong)" : "var(--border)",
    },
    ghost: {
      background: "transparent",
      color: hover ? "var(--text-hot)" : "var(--text-muted)",
      borderColor: "transparent",
    },
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPressed(false); }}
      onMouseDown={() => !disabled && setPressed(true)}
      onMouseUp={() => setPressed(false)}
      style={{ ...base, ...variants[variant], ...style }}
      {...rest}
    >
      {iconLeft}
      <span>{children}</span>
      {iconRight}
    </button>
  );
}

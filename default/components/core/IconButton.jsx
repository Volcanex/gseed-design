import React from "react";

/**
 * IconButton — a square hairline button sized for a single glyph.
 * Pass an ASCII mark or an SVG node as children. 1:1, no radius.
 */
export function IconButton({
  children,
  label,
  size = "md",
  active = false,
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const dim = { sm: 28, md: 36, lg: 44 }[size];

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: dim,
        height: dim,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-mono)",
        fontSize: size === "sm" ? "13px" : "15px",
        lineHeight: 1,
        background: active ? "var(--g-blue-wash)" : "transparent",
        color: active ? "var(--accent)" : hover ? "var(--text-hot)" : "var(--text-muted)",
        border: "1px solid",
        borderColor: active ? "var(--g-blue-line)" : hover ? "var(--border-strong)" : "var(--border)",
        borderRadius: 0,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.4 : 1,
        transition: "color var(--dur) var(--ease), border-color var(--dur) var(--ease), background var(--dur) var(--ease)",
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}

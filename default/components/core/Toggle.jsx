import React from "react";

/**
 * Toggle — a square OS switch. Slides a blue block across a hairline track.
 * No rounding, no bounce — a 1px-precise position shift.
 */
export function Toggle({
  checked = false,
  onChange,
  label,
  disabled = false,
  style,
  ...rest
}) {
  const W = 44, H = 22, K = 18;
  return (
    <label
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "12px",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.4 : 1,
        ...style,
      }}
    >
      <span
        onClick={() => !disabled && onChange && onChange(!checked)}
        style={{
          position: "relative",
          width: W,
          height: H,
          flex: "none",
          background: checked ? "var(--g-blue-wash)" : "transparent",
          border: "1px solid",
          borderColor: checked ? "var(--g-blue-line)" : "var(--border-strong)",
          borderRadius: 0,
          transition: "border-color var(--dur) var(--ease), background var(--dur) var(--ease)",
        }}
        {...rest}
      >
        <span
          style={{
            position: "absolute",
            top: 1,
            left: checked ? W - K - 3 : 1,
            width: K,
            height: H - 4,
            background: checked ? "var(--g-blue)" : "var(--text-muted)",
            transition: "left var(--dur) var(--ease), background var(--dur) var(--ease)",
          }}
        />
      </span>
      {label && (
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            textTransform: "uppercase",
            letterSpacing: "0.14em",
            color: checked ? "var(--text-hot)" : "var(--text-muted)",
          }}
        >
          {label}
        </span>
      )}
    </label>
  );
}

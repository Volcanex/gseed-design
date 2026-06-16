import React from "react";

/**
 * StatusLine — an OS status bar. A row of mono cells separated by hairlines,
 * with an optional blinking block cursor. The one allowed "animation".
 */
export function StatusLine({
  items = [],
  cursor = false,
  align = "left",
  style,
  ...rest
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "stretch",
        justifyContent: align === "right" ? "flex-end" : "flex-start",
        border: "1px solid var(--border)",
        background: "var(--g-fill)",
        height: 30,
        fontFamily: "var(--font-mono)",
        fontSize: "10px",
        textTransform: "uppercase",
        letterSpacing: "0.16em",
        ...style,
      }}
      {...rest}
    >
      {items.map((it, i) => {
        const obj = typeof it === "string" ? { label: it } : it;
        return (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "0 12px",
              borderRight: i < items.length - 1 ? "1px solid var(--border)" : "none",
              color: obj.hot ? "var(--accent)" : "var(--text-muted)",
            }}
          >
            {obj.dot && (
              <span style={{ width: 5, height: 5, background: "currentColor", display: "inline-block" }} />
            )}
            {obj.label}
          </span>
        );
      })}
      {cursor && (
        <span style={{ display: "inline-flex", alignItems: "center", padding: "0 12px", color: "var(--accent)" }}>
          <span className="g-blink" style={{ animation: "g-blink 1s steps(1) infinite" }}>▌</span>
          <style>{`@keyframes g-blink{50%{opacity:0}}`}</style>
        </span>
      )}
    </div>
  );
}

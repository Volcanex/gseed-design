import React from "react";

/**
 * Card — a square hairline container. Optional uppercase header with an
 * index on the right. Depth is the border, never a shadow.
 */
export function Card({
  children,
  label,
  index,
  accent = false,
  pad = "var(--pad-card)",
  style,
  ...rest
}) {
  return (
    <section
      style={{
        background: "var(--g-fill)",
        border: "1px solid",
        borderColor: accent ? "var(--g-blue-line)" : "var(--border)",
        borderRadius: 0,
        ...style,
      }}
      {...rest}
    >
      {(label || index != null) && (
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 14px",
            borderBottom: "1px solid var(--border)",
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            textTransform: "uppercase",
            letterSpacing: "0.16em",
          }}
        >
          <span style={{ color: accent ? "var(--accent)" : "var(--text-muted)" }}>{label}</span>
          {index != null && <span style={{ color: "var(--text-faint)" }}>{index}</span>}
        </header>
      )}
      <div style={{ padding: pad }}>{children}</div>
    </section>
  );
}

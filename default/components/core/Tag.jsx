import React from "react";

/**
 * Tag — a hairline mono chip. Index labels, sources, metadata.
 * Square, uppercase, wide-tracked. Optional leading dot.
 */
export function Tag({
  children,
  tone = "default",
  dot = false,
  style,
  ...rest
}) {
  const tones = {
    default: { color: "var(--text-muted)", borderColor: "var(--border)" },
    hot: { color: "var(--accent)", borderColor: "var(--g-blue-line)" },
    solid: { color: "var(--g-black)", background: "var(--accent)", borderColor: "var(--accent)" },
  }[tone];

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        fontFamily: "var(--font-mono)",
        fontSize: "10px",
        textTransform: "uppercase",
        letterSpacing: "0.16em",
        lineHeight: 1,
        padding: "5px 8px",
        border: "1px solid",
        borderRadius: 0,
        ...tones,
        ...style,
      }}
      {...rest}
    >
      {dot && (
        <span
          style={{
            width: 5,
            height: 5,
            background: tone === "solid" ? "var(--g-black)" : "currentColor",
            display: "inline-block",
          }}
        />
      )}
      {children}
    </span>
  );
}

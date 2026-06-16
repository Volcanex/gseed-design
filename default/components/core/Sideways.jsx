import React from "react";

/**
 * Sideways — vertical edge microtype. The brand's margin ticker.
 * Runs uppercase mono up a rail, rotated 90°. Reads bottom-to-top by default.
 */
export function Sideways({
  children,
  direction = "up",
  size = "10px",
  color = "var(--text-muted)",
  tracking = "0.32em",
  style,
  ...rest
}) {
  return (
    <span
      style={{
        writingMode: "vertical-rl",
        transform: direction === "up" ? "rotate(180deg)" : "none",
        fontFamily: "var(--font-mono)",
        fontSize: size,
        textTransform: "uppercase",
        letterSpacing: tracking,
        color,
        whiteSpace: "nowrap",
        userSelect: "none",
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}

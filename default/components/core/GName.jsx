import React from "react";

const NAME = new Set(["G", "A", "B", "R", "I", "E", "L"]);

// Flatten any React children (strings, numbers, arrays, wrapped elements)
// down to plain text — robust to editor instrumentation that wraps text nodes.
function extractText(node) {
  if (node == null || node === false || node === true) return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(extractText).join("");
  if (React.isValidElement(node)) return extractText(node.props && node.props.children);
  return "";
}

/**
 * GName — the signature GABRIEL highlighter.
 * Splits text per-character; letters G·A·B·R·I·E·L render in the highlight
 * blue, every other glyph in grey. The fingerprint of the G language.
 */
export function GName({
  children,
  letters,
  as = "span",
  hot = "var(--accent)",
  cool = "var(--text)",
  style,
  ...rest
}) {
  const set = letters
    ? new Set(letters.toUpperCase().split(""))
    : NAME;
  const text = extractText(children);
  const Tag = as;
  return (
    <Tag style={style} {...rest}>
      {text.split("").map((ch, i) => (
        <span key={i} style={{ color: set.has(ch.toUpperCase()) ? hot : cool }}>
          {ch}
        </span>
      ))}
    </Tag>
  );
}

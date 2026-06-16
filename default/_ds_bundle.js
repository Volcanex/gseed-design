/* @ds-bundle: {"format":3,"namespace":"GDesignLanguage_267337","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Field","sourcePath":"components/core/Field.jsx"},{"name":"GName","sourcePath":"components/core/GName.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Sideways","sourcePath":"components/core/Sideways.jsx"},{"name":"StatusLine","sourcePath":"components/core/StatusLine.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Toggle","sourcePath":"components/core/Toggle.jsx"}],"sourceHashes":{"assets/g-name.js":"915366c9745f","assets/token-select.js":"8f397f96390b","components/core/Button.jsx":"9186eeabffa2","components/core/Card.jsx":"3ed5d1535e47","components/core/Field.jsx":"12220de2e2cd","components/core/GName.jsx":"6e4b0c6a61d9","components/core/IconButton.jsx":"68c8b9e8e63c","components/core/Sideways.jsx":"5c56e8712fff","components/core/StatusLine.jsx":"50a4f1facd27","components/core/Tag.jsx":"be6291674623","components/core/Toggle.jsx":"87b8e75ecfc0","ui_kits/console/App.jsx":"9799fdabe849","ui_kits/console/MajorZone.jsx":"1df317dd9cfc","ui_kits/console/MinorZone.jsx":"02577ef561c1","ui_kits/console/Sidebar.jsx":"d33523aff485","ui_kits/console/seed.js":"134e1ff85f55"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.GDesignLanguage_267337 = window.GDesignLanguage_267337 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// assets/g-name.js
try { (() => {
/* ============================================================
   G — Design Language · GABRIEL auto-highlighter
   The signature rule, enforced globally so cards never hand-code
   it: any element with class .g-name has its text split per
   letter — G·A·B·R·I·E·L become .g-hot (var(--accent)), every
   other glyph .g-cool (var(--text)). Colors come straight from
   the global tokens, so a palette change needs no card edits.

   Usage:  <h1 class="g-name">GRID AND BASE</h1>
   <br> and nested markup are preserved; runs once, idempotent.
   (React surfaces use the <GName> component instead.)
   ============================================================ */
(function () {
  var HOT = {
    G: 1,
    A: 1,
    B: 1,
    R: 1,
    I: 1,
    E: 1,
    L: 1
  };
  function split(el) {
    if (el.getAttribute("data-gname-done")) return;
    var kids = Array.prototype.slice.call(el.childNodes);
    kids.forEach(function (node) {
      if (node.nodeType === 3) {
        var text = node.nodeValue;
        if (!text) return;
        var frag = document.createDocumentFragment();
        for (var i = 0; i < text.length; i++) {
          var ch = text[i];
          if (ch === " " || ch === "\n" || ch === "\t") {
            frag.appendChild(document.createTextNode(ch));
            continue;
          }
          var s = document.createElement("span");
          s.textContent = ch;
          s.className = HOT[ch.toUpperCase()] ? "g-hot" : "g-cool";
          frag.appendChild(s);
        }
        el.replaceChild(frag, node);
      } else if (node.nodeType === 1 && node.tagName !== "BR") {
        split(node);
      }
    });
    el.setAttribute("data-gname-done", "1");
  }
  function run() {
    var els = document.querySelectorAll(".g-name");
    for (var i = 0; i < els.length; i++) split(els[i]);
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/g-name.js", error: String((e && e.message) || e) }); }

// assets/token-select.js
try { (() => {
/* ============================================================
   G — Design Language · token-select.js
   Pre-wraps text into .tok-N spans so native selection renders
   the LLM-token look (see tokens/selection.css). One span per
   word; words longer than 5 chars split into 4-char chunks.
   Colours cycle through the palette across the whole document
   so a selection spanning many words reads as varied tokens.

   Whitespace is preserved as bare text nodes (line-wrapping is
   unaffected). Skips script/style/inputs and GABRIEL wordmarks
   (.g-name) so their treatment is untouched. Idempotent.

   Scope: tags [data-tokens] if present, else <body>.
   Static surfaces only — React views re-render away the spans.
   ============================================================ */
(function () {
  var COUNT = 6;
  var SKIP_TAG = {
    SCRIPT: 1,
    STYLE: 1,
    NOSCRIPT: 1,
    TEXTAREA: 1,
    INPUT: 1,
    SELECT: 1,
    CODE: 1,
    KBD: 1,
    SAMP: 1,
    SVG: 1
  };
  var n = 0;
  function tok(str) {
    var s = document.createElement("span");
    s.className = "tok-" + n++ % COUNT;
    s.textContent = str;
    return s;
  }
  function wrap(node) {
    var text = node.nodeValue;
    if (!text || !/\S/.test(text)) return; // keep whitespace-only as-is
    var frag = document.createDocumentFragment();
    var parts = text.split(/(\s+)/); // keep the separators
    for (var i = 0; i < parts.length; i++) {
      var part = parts[i];
      if (part === "") continue;
      if (/^\s+$/.test(part)) {
        frag.appendChild(document.createTextNode(part));
        continue;
      }
      if (part.length > 5) {
        for (var j = 0; j < part.length; j += 4) frag.appendChild(tok(part.slice(j, j + 4)));
      } else {
        frag.appendChild(tok(part));
      }
    }
    node.parentNode.replaceChild(frag, node);
  }
  function walk(el) {
    if (!el) return;
    if (el.tagName && SKIP_TAG[el.tagName]) return;
    if (el.nodeType === 1) {
      if (el.getAttribute("data-no-tokens") !== null) return;
      var cl = el.classList;
      if (cl && (cl.contains("g-name") || cl.contains("tok-0") || cl.contains("tok-1") || cl.contains("tok-2") || cl.contains("tok-3") || cl.contains("tok-4") || cl.contains("tok-5"))) return;
      if (el.getAttribute("data-tok-done")) return;
    }
    var kids = Array.prototype.slice.call(el.childNodes);
    for (var i = 0; i < kids.length; i++) {
      var k = kids[i];
      if (k.nodeType === 3) wrap(k);else if (k.nodeType === 1) walk(k);
    }
    if (el.nodeType === 1) el.setAttribute("data-tok-done", "1");
  }
  function run() {
    walk(document.querySelector("[data-tokens]") || document.body);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", run);else run();
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/token-select.js", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — G Design Language
 * Square, hairline, monospaced. Three variants, two sizes.
 * Hover lifts the rule; press inverts to a blue fill. No radius, no shadow.
 */
function Button({
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
    sm: {
      padding: "6px 12px",
      fontSize: "11px"
    },
    md: {
      padding: "10px 18px",
      fontSize: "12px"
    },
    lg: {
      padding: "14px 26px",
      fontSize: "13px"
    }
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
    ...pads
  };
  const variants = {
    primary: {
      background: pressed ? "var(--g-blue)" : hover ? "var(--g-blue-wash)" : "transparent",
      color: pressed ? "var(--g-black)" : "var(--g-blue)",
      borderColor: "var(--g-blue-line)"
    },
    secondary: {
      background: pressed ? "var(--g-grey)" : "transparent",
      color: pressed ? "var(--g-black)" : "var(--text)",
      borderColor: hover ? "var(--border-strong)" : "var(--border)"
    },
    ghost: {
      background: "transparent",
      color: hover ? "var(--text-hot)" : "var(--text-muted)",
      borderColor: "transparent"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPressed(false);
    },
    onMouseDown: () => !disabled && setPressed(true),
    onMouseUp: () => setPressed(false),
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, rest), iconLeft, /*#__PURE__*/React.createElement("span", null, children), iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — a square hairline container. Optional uppercase header with an
 * index on the right. Depth is the border, never a shadow.
 */
function Card({
  children,
  label,
  index,
  accent = false,
  pad = "var(--pad-card)",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      background: "var(--g-fill)",
      border: "1px solid",
      borderColor: accent ? "var(--g-blue-line)" : "var(--border)",
      borderRadius: 0,
      ...style
    }
  }, rest), (label || index != null) && /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 14px",
      borderBottom: "1px solid var(--border)",
      fontFamily: "var(--font-mono)",
      fontSize: "10px",
      textTransform: "uppercase",
      letterSpacing: "0.16em"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: accent ? "var(--accent)" : "var(--text-muted)"
    }
  }, label), index != null && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-faint)"
    }
  }, index)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: pad
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Field — a hairline mono text input with an uppercase label.
 * Square, underline-or-box, blue focus rule. Optional sideways index.
 */
function Field({
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
    borderRadius: 0
  };
  const wrap = variant === "box" ? {
    border: "1px solid",
    borderColor: focus ? "var(--border-accent)" : "var(--border)",
    background: "var(--g-fill)"
  } : {
    borderBottom: "1px solid",
    borderColor: focus ? "var(--border-accent)" : "var(--border-strong)"
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "var(--font-mono)",
      fontSize: "10px",
      textTransform: "uppercase",
      letterSpacing: "0.16em",
      color: focus ? "var(--accent)" : "var(--text-muted)",
      marginBottom: "7px"
    }
  }, /*#__PURE__*/React.createElement("span", null, label), index != null && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-faint)"
    }
  }, index)), /*#__PURE__*/React.createElement("div", {
    style: {
      transition: "border-color var(--dur) var(--ease)",
      ...wrap
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...inputBase,
      opacity: disabled ? 0.4 : 1
    }
  }, rest))));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Field.jsx", error: String((e && e.message) || e) }); }

// components/core/GName.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function GName({
  children,
  letters,
  as = "span",
  hot = "var(--accent)",
  cool = "var(--text)",
  style,
  ...rest
}) {
  const set = letters ? new Set(letters.toUpperCase().split("")) : NAME;
  const text = extractText(children);
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: style
  }, rest), text.split("").map((ch, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      color: set.has(ch.toUpperCase()) ? hot : cool
    }
  }, ch)));
}
Object.assign(__ds_scope, { GName });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/GName.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — a square hairline button sized for a single glyph.
 * Pass an ASCII mark or an SVG node as children. 1:1, no radius.
 */
function IconButton({
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
  const dim = {
    sm: 28,
    md: 36,
    lg: 44
  }[size];
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
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
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Sideways.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Sideways — vertical edge microtype. The brand's margin ticker.
 * Runs uppercase mono up a rail, rotated 90°. Reads bottom-to-top by default.
 */
function Sideways({
  children,
  direction = "up",
  size = "10px",
  color = "var(--text-muted)",
  tracking = "0.32em",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      writingMode: "vertical-rl",
      transform: direction === "up" ? "rotate(180deg)" : "none",
      fontFamily: "var(--font-mono)",
      fontSize: size,
      textTransform: "uppercase",
      letterSpacing: tracking,
      color,
      whiteSpace: "nowrap",
      userSelect: "none",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Sideways });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Sideways.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusLine.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StatusLine — an OS status bar. A row of mono cells separated by hairlines,
 * with an optional blinking block cursor. The one allowed "animation".
 */
function StatusLine({
  items = [],
  cursor = false,
  align = "left",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
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
      ...style
    }
  }, rest), items.map((it, i) => {
    const obj = typeof it === "string" ? {
      label: it
    } : it;
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: "0 12px",
        borderRight: i < items.length - 1 ? "1px solid var(--border)" : "none",
        color: obj.hot ? "var(--accent)" : "var(--text-muted)"
      }
    }, obj.dot && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 5,
        height: 5,
        background: "currentColor",
        display: "inline-block"
      }
    }), obj.label);
  }), cursor && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      padding: "0 12px",
      color: "var(--accent)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "g-blink",
    style: {
      animation: "g-blink 1s steps(1) infinite"
    }
  }, "\u258C"), /*#__PURE__*/React.createElement("style", null, `@keyframes g-blink{50%{opacity:0}}`)));
}
Object.assign(__ds_scope, { StatusLine });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusLine.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — a hairline mono chip. Index labels, sources, metadata.
 * Square, uppercase, wide-tracked. Optional leading dot.
 */
function Tag({
  children,
  tone = "default",
  dot = false,
  style,
  ...rest
}) {
  const tones = {
    default: {
      color: "var(--text-muted)",
      borderColor: "var(--border)"
    },
    hot: {
      color: "var(--accent)",
      borderColor: "var(--g-blue-line)"
    },
    solid: {
      color: "var(--g-black)",
      background: "var(--accent)",
      borderColor: "var(--accent)"
    }
  }[tone];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
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
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      background: tone === "solid" ? "var(--g-black)" : "currentColor",
      display: "inline-block"
    }
  }), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/core/Toggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Toggle — a square OS switch. Slides a blue block across a hairline track.
 * No rounding, no bounce — a 1px-precise position shift.
 */
function Toggle({
  checked = false,
  onChange,
  label,
  disabled = false,
  style,
  ...rest
}) {
  const W = 44,
    H = 22,
    K = 18;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "12px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.4 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", _extends({
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      position: "relative",
      width: W,
      height: H,
      flex: "none",
      background: checked ? "var(--g-blue-wash)" : "transparent",
      border: "1px solid",
      borderColor: checked ? "var(--g-blue-line)" : "var(--border-strong)",
      borderRadius: 0,
      transition: "border-color var(--dur) var(--ease), background var(--dur) var(--ease)"
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 1,
      left: checked ? W - K - 3 : 1,
      width: K,
      height: H - 4,
      background: checked ? "var(--g-blue)" : "var(--text-muted)",
      transition: "left var(--dur) var(--ease), background var(--dur) var(--ease)"
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "11px",
      textTransform: "uppercase",
      letterSpacing: "0.14em",
      color: checked ? "var(--text-hot)" : "var(--text-muted)"
    }
  }, label));
}
Object.assign(__ds_scope, { Toggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Toggle.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/App.jsx
try { (() => {
/* global React, GDS, Sidebar, MajorZone, MinorZone */
// App — the console shell. Wires the sidebar, φ-split canvas, top bar, status.
function App() {
  const seed = window.CONSOLE_SEED;
  const [sources, setSources] = React.useState(seed);
  const [active, setActive] = React.useState(seed[0].id);
  const [gridOn, setGridOn] = React.useState(true);
  const [theme, setTheme] = React.useState("dark");
  const {
    Toggle,
    IconButton,
    Tag,
    StatusLine
  } = GDS;
  const source = sources.find(s => s.id === active);
  const activeIdx = sources.findIndex(s => s.id === active);
  function send(text) {
    setSources(prev => prev.map(s => s.id === active ? {
      ...s,
      feed: [{
        id: Date.now(),
        txt: text,
        t: "now"
      }, ...s.feed]
    } : s));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "cz-app",
    "data-theme": theme
  }, /*#__PURE__*/React.createElement(Sidebar, {
    sources: sources,
    active: active,
    onSelect: setActive
  }), /*#__PURE__*/React.createElement("div", {
    className: "cz-main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cz-top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cz-top-l"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cz-top-title"
  }, source.name), /*#__PURE__*/React.createElement("span", {
    className: "cz-top-idx"
  }, String(activeIdx + 1).padStart(2, "0"), " / ", String(sources.length).padStart(2, "0"), " \xB7 \u03C6-ALIGNED")), /*#__PURE__*/React.createElement("div", {
    className: "cz-top-r"
  }, /*#__PURE__*/React.createElement(Toggle, {
    checked: theme === "light",
    onChange: v => setTheme(v ? "light" : "dark"),
    label: theme === "light" ? "Light" : "Dark"
  }), /*#__PURE__*/React.createElement(Toggle, {
    checked: gridOn,
    onChange: setGridOn,
    label: "Grid"
  }), /*#__PURE__*/React.createElement(IconButton, {
    label: "search"
  }, "\u2315"), /*#__PURE__*/React.createElement(IconButton, {
    label: "menu"
  }, "\u2261"))), /*#__PURE__*/React.createElement("div", {
    className: "cz-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cz-canvas"
  }, /*#__PURE__*/React.createElement(MajorZone, {
    source: source,
    gridOn: gridOn
  }), /*#__PURE__*/React.createElement(MinorZone, {
    source: source,
    onSend: send
  }))), /*#__PURE__*/React.createElement("div", {
    className: "cz-status"
  }, /*#__PURE__*/React.createElement(StatusLine, {
    items: [{
      label: source.live ? "LIVE" : "STANDBY",
      hot: source.live,
      dot: true
    }, "SOURCE " + String(activeIdx + 1).padStart(2, "0") + " / " + String(sources.length).padStart(2, "0"), {
      label: theme === "light" ? "INK / PAPER" : "PAPER / BLACK",
      hot: theme === "light"
    }, "φ 1.618"],
    cursor: true
  }))));
}
window.App = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/MajorZone.jsx
try { (() => {
/* global React, GDS */
// MajorZone — the φ-major hero panel: kicker, loud title, lead, metric tiles.
function MajorZone({
  source,
  gridOn
}) {
  const {
    Tag,
    GName
  } = GDS;
  return /*#__PURE__*/React.createElement("div", {
    className: "cz-major"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cz-major-grid" + (gridOn ? " is-on" : "")
  }), /*#__PURE__*/React.createElement("div", {
    className: "cz-major-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cz-hero"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cz-hero-kicker"
  }, source.kicker), /*#__PURE__*/React.createElement(GName, {
    as: "h1",
    className: "cz-hero-title"
  }, source.title), /*#__PURE__*/React.createElement("p", {
    className: "cz-hero-lead"
  }, source.lead), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      flexWrap: "wrap"
    }
  }, source.tags.map((t, i) => /*#__PURE__*/React.createElement(Tag, {
    key: i,
    tone: i === 0 ? "hot" : "default",
    dot: i === 0
  }, t)))), /*#__PURE__*/React.createElement("div", {
    className: "cz-tiles"
  }, source.metrics.map((m, i) => /*#__PURE__*/React.createElement("div", {
    className: "cz-tile",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "cz-tile-n"
  }, m.n), /*#__PURE__*/React.createElement("span", {
    className: "cz-tile-l",
    dangerouslySetInnerHTML: {
      __html: m.l
    }
  }))))));
}
window.MajorZone = MajorZone;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/MajorZone.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/MinorZone.jsx
try { (() => {
/* global React, GDS */
// MinorZone — the φ-minor rail: a live feed + a compose row.
function MinorZone({
  source,
  onSend
}) {
  const {
    Field,
    Button
  } = GDS;
  const [draft, setDraft] = React.useState("");
  function send() {
    const v = draft.trim();
    if (!v) return;
    onSend(v);
    setDraft("");
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "cz-minor"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cz-minor-head"
  }, /*#__PURE__*/React.createElement("span", null, "FEED \xB7 ", source.name), /*#__PURE__*/React.createElement("span", null, String(source.feed.length).padStart(2, "0"), " / \u221E")), /*#__PURE__*/React.createElement("div", {
    className: "cz-feed"
  }, source.feed.map((f, i) => /*#__PURE__*/React.createElement("div", {
    className: "cz-feed-row",
    key: f.id ?? i
  }, /*#__PURE__*/React.createElement("span", {
    className: "cz-feed-idx"
  }, String(source.feed.length - i).padStart(2, "0")), /*#__PURE__*/React.createElement("span", {
    className: "cz-feed-txt",
    dangerouslySetInnerHTML: {
      __html: f.txt
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "cz-feed-t"
  }, f.t)))), /*#__PURE__*/React.createElement("div", {
    className: "cz-compose"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cz-compose-row"
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Append",
    variant: "box",
    value: draft,
    placeholder: "type entry",
    onChange: e => setDraft(e.target.value),
    onKeyDown: e => e.key === "Enter" && send(),
    index: "\u21B5"
  })), /*#__PURE__*/React.createElement("div", {
    className: "cz-compose-row",
    style: {
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: () => setDraft("")
  }, "CLEAR"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: send,
    iconRight: "->"
  }, "PUSH"))));
}
window.MinorZone = MinorZone;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/MinorZone.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/Sidebar.jsx
try { (() => {
/* global React, GDS */
// Sidebar — left rail of the console.
function Sidebar({
  sources,
  active,
  onSelect
}) {
  const {
    GName,
    Sideways,
    Tag
  } = GDS;
  return /*#__PURE__*/React.createElement("aside", {
    className: "cz-side"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cz-side-rail"
  }, /*#__PURE__*/React.createElement(Sideways, {
    tracking: "0.34em"
  }, "SYSTEM DESIGN LANGUAGE BASE \xB7 v0.1 \xB7 \u03C6")), /*#__PURE__*/React.createElement("div", {
    className: "cz-side-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cz-brand"
  }, /*#__PURE__*/React.createElement(GName, {
    as: "div",
    className: "cz-brand-mark"
  }, "GABRIEL"), /*#__PURE__*/React.createElement("span", {
    className: "cz-brand-sub"
  }, "CONSOLE / BASE")), /*#__PURE__*/React.createElement("nav", {
    className: "cz-nav"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cz-nav-cap"
  }, "SOURCES \xB7 ", String(sources.length).padStart(2, "0")), sources.map((s, i) => /*#__PURE__*/React.createElement("button", {
    key: s.id,
    className: "cz-nav-item" + (active === s.id ? " is-active" : ""),
    onClick: () => onSelect(s.id)
  }, /*#__PURE__*/React.createElement("span", {
    className: "cz-nav-idx"
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("span", {
    className: "cz-nav-label"
  }, s.name), /*#__PURE__*/React.createElement("span", {
    className: "cz-nav-dot",
    "data-on": s.live ? "1" : "0"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "cz-side-foot"
  }, /*#__PURE__*/React.createElement(Tag, {
    dot: true
  }, "BUILD \u03C60.618"))));
}
window.Sidebar = Sidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/seed.js
try { (() => {
/* Seed data for the console UI kit. Plain content, no logic. */
window.CONSOLE_SEED = [{
  id: "base",
  name: "Base",
  live: true,
  kicker: "01 · SYSTEM DESIGN LANGUAGE",
  title: "GRID\nLOCKED",
  lead: "The base is the shared grammar every project speaks. Loud slab-mono titles, quiet body, one electric accent used like a highlighter.",
  tags: ["LIVE", "φ-ALIGNED", "RIGHT ANGLES"],
  metrics: [{
    n: "04",
    l: "CORE <b>VALUES</b>"
  }, {
    n: "0px",
    l: "CORNER <b>RADIUS</b>"
  }, {
    n: "φ",
    l: "1.618 <b>SPLIT</b>"
  }],
  feed: [{
    id: 1,
    txt: "<b>Ground</b> set to #131316. Black is the background, always.",
    t: "12:04"
  }, {
    id: 2,
    txt: "Grey carries the reading. The accent is a hit, never a fill.",
    t: "12:03"
  }, {
    id: 3,
    txt: "Letters G·A·B·R·I·E·L carry the highlight in the wordmark.",
    t: "12:01"
  }]
}, {
  id: "type",
  name: "Type",
  live: false,
  kicker: "02 · TWO MONOSPACED FAMILIES",
  title: "THICK\nQUIET",
  lead: "Minimal Mono shouts in Black 900. Silka Mono speaks in Regular. A golden-ratio display ramp over a tight functional body.",
  tags: ["MINIMAL MONO", "SILKA MONO", "φ RAMP"],
  metrics: [{
    n: "2",
    l: "FAMILIES <b>MONO</b>"
  }, {
    n: "900",
    l: "DISPLAY <b>WEIGHT</b>"
  }, {
    n: "110",
    l: "HERO <b>PX</b>"
  }],
  feed: [{
    id: 1,
    txt: "Display set UPPERCASE at line-height 0.92, tracked tight.",
    t: "11:58"
  }, {
    id: 2,
    txt: "Body sentence-case at 1.6. The two never compete.",
    t: "11:52"
  }, {
    id: 3,
    txt: "Sideways microtype rides the margins at 0.34em.",
    t: "11:50"
  }]
}, {
  id: "grid",
  name: "Grid",
  live: true,
  kicker: "03 · IRREGULAR BUT SQUARE",
  title: "OFF\nALIGN",
  lead: "Blocks of differing size and offset, but every edge lands on the lattice. Irregular arrangement, regular geometry.",
  tags: ["8PX LATTICE", "64PX CELL", "HAIRLINES"],
  metrics: [{
    n: "8",
    l: "LATTICE <b>PX</b>"
  }, {
    n: "64",
    l: "MODULE <b>CELL</b>"
  }, {
    n: "1px",
    l: "RULE <b>NO SHADOW</b>"
  }],
  feed: [{
    id: 1,
    txt: "Depth is drawn with hairlines. <b>No drop shadows.</b>",
    t: "11:40"
  }, {
    id: 2,
    txt: "Primary division uses the φ-major / φ-minor split.",
    t: "11:35"
  }, {
    id: 3,
    txt: "Micrographics sit inset in a grid cell, framed.",
    t: "11:31"
  }]
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/seed.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.GName = __ds_scope.GName;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Sideways = __ds_scope.Sideways;

__ds_ns.StatusLine = __ds_scope.StatusLine;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Toggle = __ds_scope.Toggle;

})();

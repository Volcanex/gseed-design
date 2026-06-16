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
  var HOT = { G: 1, A: 1, B: 1, R: 1, I: 1, E: 1, L: 1 };

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

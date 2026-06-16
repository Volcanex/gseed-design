/* global React, GDS */
// Sidebar — left rail of the console.
function Sidebar({ sources, active, onSelect }) {
  const { GName, Sideways, Tag } = GDS;
  return (
    <aside className="cz-side">
      <div className="cz-side-rail">
        <Sideways tracking="0.34em">SYSTEM DESIGN LANGUAGE BASE · v0.1 · φ</Sideways>
      </div>
      <div className="cz-side-body">
        <div className="cz-brand">
          <GName as="div" className="cz-brand-mark">GABRIEL</GName>
          <span className="cz-brand-sub">CONSOLE / BASE</span>
        </div>

        <nav className="cz-nav">
          <span className="cz-nav-cap">SOURCES · {String(sources.length).padStart(2, "0")}</span>
          {sources.map((s, i) => (
            <button
              key={s.id}
              className={"cz-nav-item" + (active === s.id ? " is-active" : "")}
              onClick={() => onSelect(s.id)}
            >
              <span className="cz-nav-idx">{String(i + 1).padStart(2, "0")}</span>
              <span className="cz-nav-label">{s.name}</span>
              <span className="cz-nav-dot" data-on={s.live ? "1" : "0"}></span>
            </button>
          ))}
        </nav>

        <div className="cz-side-foot">
          <Tag dot>BUILD φ0.618</Tag>
        </div>
      </div>
    </aside>
  );
}
window.Sidebar = Sidebar;

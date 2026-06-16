/* global React, GDS */
// MajorZone — the φ-major hero panel: kicker, loud title, lead, metric tiles.
function MajorZone({ source, gridOn }) {
  const { Tag, GName } = GDS;
  return (
    <div className="cz-major">
      <div className={"cz-major-grid" + (gridOn ? " is-on" : "")}></div>
      <div className="cz-major-inner">
        <div className="cz-hero">
          <span className="cz-hero-kicker">{source.kicker}</span>
          <GName as="h1" className="cz-hero-title">{source.title}</GName>
          <p className="cz-hero-lead">{source.lead}</p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {source.tags.map((t, i) => (
              <Tag key={i} tone={i === 0 ? "hot" : "default"} dot={i === 0}>{t}</Tag>
            ))}
          </div>
        </div>

        <div className="cz-tiles">
          {source.metrics.map((m, i) => (
            <div className="cz-tile" key={i}>
              <span className="cz-tile-n">{m.n}</span>
              <span className="cz-tile-l" dangerouslySetInnerHTML={{ __html: m.l }}></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
window.MajorZone = MajorZone;

/* global React, GDS */
// MinorZone — the φ-minor rail: a live feed + a compose row.
function MinorZone({ source, onSend }) {
  const { Field, Button } = GDS;
  const [draft, setDraft] = React.useState("");

  function send() {
    const v = draft.trim();
    if (!v) return;
    onSend(v);
    setDraft("");
  }

  return (
    <div className="cz-minor">
      <div className="cz-minor-head">
        <span>FEED · {source.name}</span>
        <span>{String(source.feed.length).padStart(2, "0")} / ∞</span>
      </div>

      <div className="cz-feed">
        {source.feed.map((f, i) => (
          <div className="cz-feed-row" key={f.id ?? i}>
            <span className="cz-feed-idx">{String(source.feed.length - i).padStart(2, "0")}</span>
            <span className="cz-feed-txt" dangerouslySetInnerHTML={{ __html: f.txt }}></span>
            <span className="cz-feed-t">{f.t}</span>
          </div>
        ))}
      </div>

      <div className="cz-compose">
        <div className="cz-compose-row">
          <Field
            label="Append"
            variant="box"
            value={draft}
            placeholder="type entry"
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            index="↵"
          />
        </div>
        <div className="cz-compose-row" style={{ justifyContent: "flex-end" }}>
          <Button variant="ghost" size="sm" onClick={() => setDraft("")}>CLEAR</Button>
          <Button variant="primary" size="sm" onClick={send} iconRight={"->"}>PUSH</Button>
        </div>
      </div>
    </div>
  );
}
window.MinorZone = MinorZone;

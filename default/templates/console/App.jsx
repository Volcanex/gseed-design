/* global React, GDS, Sidebar, MajorZone, MinorZone */
// App — the console shell. Wires the sidebar, φ-split canvas, top bar, status.
function App() {
  const seed = window.CONSOLE_SEED;
  const [sources, setSources] = React.useState(seed);
  const [active, setActive] = React.useState(seed[0].id);
  const [gridOn, setGridOn] = React.useState(true);
  const [theme, setTheme] = React.useState("dark");

  const { Toggle, IconButton, Tag, StatusLine } = GDS;
  const source = sources.find((s) => s.id === active);
  const activeIdx = sources.findIndex((s) => s.id === active);

  function send(text) {
    setSources((prev) =>
      prev.map((s) =>
        s.id === active
          ? { ...s, feed: [{ id: Date.now(), txt: text, t: "now" }, ...s.feed] }
          : s
      )
    );
  }

  return (
    <div className="cz-app" data-theme={theme}>
      <Sidebar sources={sources} active={active} onSelect={setActive} />

      <div className="cz-main">
        <div className="cz-top">
          <div className="cz-top-l">
            <span className="cz-top-title">{source.name}</span>
            <span className="cz-top-idx">{String(activeIdx + 1).padStart(2, "0")} / {String(sources.length).padStart(2, "0")} · φ-ALIGNED</span>
          </div>
          <div className="cz-top-r">
            <Toggle checked={theme === "light"} onChange={(v) => setTheme(v ? "light" : "dark")} label={theme === "light" ? "Light" : "Dark"} />
            <Toggle checked={gridOn} onChange={setGridOn} label="Grid" />
            <IconButton label="search">⌕</IconButton>
            <IconButton label="menu">≡</IconButton>
          </div>
        </div>

        <div className="cz-body">
          <div className="cz-canvas">
            <MajorZone source={source} gridOn={gridOn} />
            <MinorZone source={source} onSend={send} />
          </div>
        </div>

        <div className="cz-status">
          <StatusLine
            items={[
              { label: source.live ? "LIVE" : "STANDBY", hot: source.live, dot: true },
              "SOURCE " + String(activeIdx + 1).padStart(2, "0") + " / " + String(sources.length).padStart(2, "0"),
              { label: theme === "light" ? "INK / PAPER" : "PAPER / BLACK", hot: theme === "light" },
              "φ 1.618",
            ]}
            cursor
          />
        </div>
      </div>
    </div>
  );
}
window.App = App;

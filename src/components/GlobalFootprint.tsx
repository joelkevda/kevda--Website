import { KevdaGlobe } from "./KevdaGlobe";

export function GlobalFootprint() {
  return (
    <section className="kv-globe-section">
      <div className="kv-globe-inner">
        <div>
          <div className="kv-eyebrow">
            <div className="kv-eyebrow-bar" />
            <span className="kv-eyebrow-text">Global Footprint</span>
          </div>

          <h2 className="kv-h2 kv-globe-h2">
            Two locations.<br />
            <em>One execution standard.</em>
          </h2>

          <div className="kv-globe-locs">
            <div className="kv-globe-loc-card kv-globe-loc-card--gold">
              <div className="kv-globe-loc-name">Boston, MA</div>
              <div className="kv-globe-loc-sub">
                Scientific leadership, client relations,<br />
                and strategic direction.
              </div>
            </div>

            <div className="kv-globe-loc-card kv-globe-loc-card--teal">
              <div className="kv-globe-loc-name">Bangalore, India</div>
              <div className="kv-globe-loc-sub">
                PhD-led lab operations,<br />
                execution, and delivery.
              </div>
            </div>
          </div>
        </div>

        <div className="kv-globe-stage">
          <KevdaGlobe />
        </div>
      </div>
    </section>
  );
}

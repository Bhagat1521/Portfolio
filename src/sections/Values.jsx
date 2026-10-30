import Reveal from "../components/Reveal";
import { values } from "../data/content";

export default function Values() {
  return (
    <section style={{ padding: "20px 0 60px" }}>
      <div className="wrap">
        <Reveal className="ctr">
          <div>
            <span className="lbl">What I bring</span>
            <h2>What I Bring</h2>
          </div>
        </Reveal>
        <div className="sg f" style={{ marginTop: 50 }}>
          {values.map((item) => (
            <Reveal key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Marquee() {
  const items = [
    'Molecular Biology & Vector Engineering',
    'Cell Engineering & Functional Analysis',
    'Protein Characterization & Immunoassays',
    'Specialized RNA & Advanced Delivery',
    'Boston, MA',
    'Bangalore, India',
  ];

  const repeated = [...items, ...items, ...items];

  return (
    <div className="marquee-root" aria-hidden="true">
      <div className="marquee-track">
        {repeated.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="marquee-dot">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

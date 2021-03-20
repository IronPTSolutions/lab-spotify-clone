import "./Popularity.css";

export default function Popularity({ popularity = 0 }) {
  return (
    <div className="Popularity">
      {popularity > 0 &&
        [...Array(popularity)].map((_, i) => (
          <div className="filled" key={`f-${i}`} />
        ))}
      {popularity < 8 &&
        [...Array(8 - popularity)].map((_, i) => (
          <div className="empty" key={`e-${i}`} />
        ))}
    </div>
  );
}

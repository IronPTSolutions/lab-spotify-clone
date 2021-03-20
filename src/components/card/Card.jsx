import './Card.css';

export default function Card({cover, name, year}) {
  /*
    1. cover
    2. title
    3. year
    */
  return <div className="Card">
    <div className="card-cover" style={{ backgroundImage: `url(${cover})` }} />
    <div className="card-name">{name}</div>
    <div className="card-year">{year}</div>
  </div>;
}

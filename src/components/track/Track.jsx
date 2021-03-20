import { toMMss } from "../../utils/time";
import Popularity from "./popularity/Popularity";
import "./Track.css";

export default function Track({ name, duration, popularity, index }) {
  /* 
    1. index
    2. heart
    3. title
    4. duration
    5. popularity
    */
  return (
    <tr className="Track">
      <td className="track-number">{index}</td>
      <td className="track-like">{"<3"}</td>
      <td className="track-name">{name}</td>
      <td className="track-duration">{toMMss(duration)}</td>
      <td className="track-popularity">
        <Popularity popularity={popularity} />
      </td>
    </tr>
  );
}

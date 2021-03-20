import { toMMss } from "../../../utils/time";
import "./AlbumHeader.css";

export default function AlbumHeader({
  name,
  cover,
  artist,
  tracksLength,
  duration,
  year,
}) {
  return (
    <div className="AlbumHeader">
      <div className="album-cover" style={{ backgroundImage: `url(${cover})` }}></div>
      <div className="album-info">
        <div className="album-label">Álbum</div>
        <div className="album-name">{name}</div>
        <div className="album-artist">
          De <strong>{artist}</strong>
        </div>
        <div className="album-extra">
          <span className="year">{year}</span>
          <span className="separator">·</span>
          <span className="tracks-number">
            {tracksLength} canciones, {toMMss(duration).split(":")[0]} min
          </span>
        </div>
        <div className="album-buttons">
          <div className="play">Reproducir</div>
          <div className="album-button like">{"<3"}</div>
          <div className="album-button more">...</div>
        </div>
      </div>
    </div>
  );
}

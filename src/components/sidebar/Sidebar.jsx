import "./Sidebar.css";
import home from "../../assets/home.svg";
import tracks from "../../assets/tracks.svg";
import explore from "../../assets/explore.svg";

export default function Sidebar({ playlists = [] }) {
  /*
	1. Sections
	2. Your library
	3. Playlists
	4. Add playlist
	*/
  return (
    <div className="Sidebar">
      <div className="sections">
        <div className="section">
          <div className="icon">
            <img src={home} alt="Home" />
          </div>
          <div className="section-name">Home</div>
        </div>
        <div className="section">
          <div className="icon">
            <img src={explore} alt="Explore" />
          </div>
          <div className="section-name">Explorar</div>
        </div>
        <div className="section">
          <div className="icon">
            <img src={tracks} alt="Radio" />
          </div>
          <div className="section-name">Radio</div>
        </div>
      </div>
      <div className="sidebar-scrollable">
        <div className="your-library">
          <div className="sidebar-title">Tu biblioteca</div>
          <div className="library-elements">
            <div className="library-element">Especialmente para ti</div>
            <div className="library-element">Escuchad. recient.</div>
            <div className="library-element">Canciones que te gustan</div>
            <div className="library-element">Álbumes</div>
            <div className="library-element">Artistas</div>
            <div className="library-element">Archivos Locales</div>
            <div className="library-element">Podcasts</div>
          </div>
        </div>
        <div className="playlists">
          <div className="sidebar-title">Playlists</div>
          <div className="library-elements">
            {playlists.map((p, i) => (
              <div className="playlist" key={i}>
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="add-list">
        <div className="add-button">+</div>
        <div className="add-label">Nueva lista</div>
      </div>
    </div>
  );
}

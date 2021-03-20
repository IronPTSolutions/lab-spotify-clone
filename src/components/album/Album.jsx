import "./Album.css";
import album from "../../constants/album.json";
import Header from "../header/Header";
import Track from "../track/Track";
import AlbumHeader from "./albumHeader/AlbumHeader";
import Card from "../card/Card";
import { useState } from "react";

export default function Album() {
  /*
	1. album header
	2. album tracks
	3. other albums
	*/
  const [scrollTop, setScrollTop] = useState(0);
  const onScroll = (e) => {
    setScrollTop(e.target.scrollTop);
  };
  return (
    <div className="Album" onScroll={onScroll}>
      <Header scrollTop={scrollTop} />
      <AlbumHeader
        {...album}
        duration={album.tracks.reduce((a, v) => a + v.duration, 0)}
        tracksLength={album.tracks.length}
      />
      <table className="album-tracks">
        <thead className="tracks-header">
          <tr className="Track">
            <th>#</th>
            <th></th>
            <th className="left">Título</th>
            <th>mm:ss</th>
            <th>{"<3"}</th>
          </tr>
        </thead>
        <tbody>
          {album.tracks.map((track, k) => (
            <Track {...track} index={k + 1} key={k} />
          ))}
        </tbody>
      </table>
      <div className="album-label">
        © ℗ {album.year} {album.label}
      </div>
      <div className="more">
        <div className="more-title">Más de {album.artist}</div>
        <div className="more-albums">
          {album.otherAlbums.map((album, i) => (
            <Card {...album} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

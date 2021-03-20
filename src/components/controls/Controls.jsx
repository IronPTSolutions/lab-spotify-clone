import "./Controls.css";
import album from "../../constants/album.json";
import like from "../../assets/like.svg";
import shuffle from "../../assets/shuffle.svg";
import play from "../../assets/play.svg";
import next from "../../assets/next.svg";
import devices from "../../assets/devices.svg";
import tracks from "../../assets/tracks.svg";
import speaker from "../../assets/speaker.svg";
import expand from "../../assets/expand.svg";
import ProgressBar from "./progressBar/ProgressBar";
import { toMMss } from "../../utils/time";

export default function Controls() {
  /*
	1. current song
	2. controls + progress bar
	3. devices, volume slider, full screen
	*/
  return (
    <div className="Controls">
      <div className="current-track">
        <div className="current-track-img">
          <img src={album.cover} alt="Album cover" />
        </div>
        <div className="current-track-info">
          <div className="current-track-name">{album.tracks[0].name}</div>
          <div className="current-track-artist">{album.artist}</div>
        </div>
        <div className="current-track-like">
          <img src={like} alt="Like" />
        </div>
      </div>
      <div className="controls-wrapper">
        <div className="controls-buttons">
          <div className="controls-button">
            <img src={shuffle} alt="Shuffle" />
          </div>
          <div className="controls-buttons-main">
            <div className="controls-button controls-button-previous">
              <img src={next} alt="Previous" />
            </div>
            <div className="controls-button">
              <img src={play} alt="Play" />
            </div>
            <div className="controls-button">
              <img src={next} alt="Next" />
            </div>
          </div>
          <div className="controls-button">
            <img src={shuffle} alt="Shuffle" />
          </div>
        </div>
        <div className="progress">
          <div className="start">{toMMss(15)}</div>
          <ProgressBar progress={(100 * 15) / album.tracks[0].duration} />
          <div className="end">{toMMss(album.tracks[0].duration)}</div>
        </div>
      </div>
      <div className="side-controls">
        <div className="controls-button">
          <img src={tracks} alt="Tracks" />
        </div>
        <div className="controls-button">
          <img src={devices} alt="Devices" />
        </div>
        <div className="volume">
          <div className="controls-button">
            <img src={speaker} alt="Speaker" />
          </div>
          <div className="volume-slider">
            <ProgressBar progress={50} />
          </div>
        </div>
        <div className="controls-button">
          <img src={expand} alt="Expand" />
        </div>
      </div>
    </div>
  );
}

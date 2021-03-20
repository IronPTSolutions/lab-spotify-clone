import "./App.css";
import user from "./constants/user.json";
import Sidebar from "./components/sidebar/Sidebar";
import Album from "./components/album/Album";
import Controls from "./components/controls/Controls";

function App() {
  return (
    <div className="App">
      <div>
        <Sidebar playlists={user.playlists} />
        <div>
          <Album />
        </div>
      </div>
      <Controls/>
    </div>
  );
}

export default App;

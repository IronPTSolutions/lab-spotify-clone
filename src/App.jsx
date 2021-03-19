import "./App.css";
import user from "./constants/user.json";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Album from "./components/album/Album";
import Controls from "./components/controls/Controls";

function App() {
  return (
    <div className="App">
      <div>
        <Sidebar playlists={user.playlists} />
        <div>
          <Header name={user.name} />
          <Album />
        </div>
      </div>
      <Controls/>
    </div>
  );
}

export default App;

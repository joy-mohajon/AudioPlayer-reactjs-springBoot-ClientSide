import AudioPlayer from "./Components/AudioPlayer/AudioPlayer";
import AudioPlayerPage from "./Components/AudioPlayerPage/AudioPlayerPage";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <AudioPlayerPage />
      <AudioPlayer />
    </div>
  );
}

export default App;

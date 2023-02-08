import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AudioPlayerAuth from "./Components/AudioPlayerAuth/AudioPlayerAuth";
import AudioPlayerPage from "./Components/AudioPlayerPage/AudioPlayerPage";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Sidebar />}>
          <Route path="/" element={<AudioPlayerAuth />}>
            <Route index element={<AudioPlayerPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

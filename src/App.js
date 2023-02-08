import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AudioPlayerAuth from "./Components/AudioPlayerAuth/AudioPlayerAuth";
import AudioPlayerPage from "./Components/Pages/AudioPlayerPage";
import Search from "./Components/Pages/Search";
import Sidebar from "./Components/Sidebar/Sidebar";
import styles from "./app.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <Routes>
          <Route path="/" element={<Sidebar />}>
            <Route path="/" element={<AudioPlayerAuth />}>
              <Route index element={<AudioPlayerPage />} />
              <Route path="/search" element={<Search />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

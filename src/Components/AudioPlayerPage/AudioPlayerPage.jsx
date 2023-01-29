import React from "react";
import AudioContainer from "../AudioContainer/AudioContainer";
import AudioPlayerAuth from "../AudioPlayerAuth/AudioPlayerAuth";
import styles from "./AudioPlayerPage.module.css";

const AudioPlayer = () => {
  return (
    <div className={styles.audio_player}>
      <AudioPlayerAuth />
      <AudioContainer />
    </div>
  );
};

export default AudioPlayer;

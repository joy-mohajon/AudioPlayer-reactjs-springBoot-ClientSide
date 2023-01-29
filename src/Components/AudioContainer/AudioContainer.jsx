import React from "react";
import styles from "./AudioContainer.module.css";
import AudioAlbums from "../AudioAlbums/AudioAlbums";
import AllAudios from "../AllAudios/AllAudios";

const AudioContainer = () => {
  return (
    <div className={styles.music_content}>
      <AudioAlbums />
      <AllAudios />
    </div>
  );
};

export default AudioContainer;

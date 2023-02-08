import React, { useState } from "react";
import PlayerVolume from "../PlayerVolume/PlayerVolume";
import styles from "./AudioPlayer.module.css";
import icons8_musical from "../../assets/images/icons8-musical-96 (2).png";
import PlayerController from "../PlayerController/PlayerController";
import { computeHeadingLevel } from "@testing-library/react";

const AudioPlayer = ({ audio }) => {
  const [volumeRange, setVolumeRange] = useState(1);
  const { title, artist, filename } = audio;

  const updateVolume = (range) => {
    setVolumeRange(range);
  };

  return (
    <div class={styles.music_player}>
      <div class={styles.player_content}>
        <div class={styles.player_block}>
          <img src={icons8_musical} alt="" />
        </div>
        <div className={styles.details}>
          <p className={styles.title}>{title ? title : "Preme pora baron"}</p>
          <p className={styles.artist}>{artist ? artist : "Hasan"}</p>
        </div>
      </div>
      <PlayerController volume={volumeRange} />
      <PlayerVolume updateVolume={updateVolume} />
    </div>
  );
};

export default AudioPlayer;

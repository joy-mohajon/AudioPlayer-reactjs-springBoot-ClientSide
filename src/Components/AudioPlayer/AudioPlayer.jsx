import React, { useState } from "react";
import PlayerVolume from "../PlayerVolume/PlayerVolume";
import styles from "./AudioPlayer.module.css";
import icons8_musical from "../../assets/images/icons8-musical-96 (2).png";
import PlayerController from "../PlayerController/PlayerController";

const AudioPlayer = () => {
  const [volumeRange, setVolumeRange] = useState(1);

  const updateVolume = (range) => {
    setVolumeRange(range);
    console.log(volumeRange);
  };

  return (
    <div class={styles.music_player}>
      <div class={styles.player_content}>
        <div class={styles.player_block}>
          <img src={icons8_musical} alt="" />
        </div>
        <p>Amar Dehokhan | Pritom</p>
      </div>
      <PlayerController volume={volumeRange} />
      <PlayerVolume updateVolume={updateVolume} />
    </div>
  );
};

export default AudioPlayer;

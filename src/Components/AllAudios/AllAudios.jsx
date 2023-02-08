import React, { useState } from "react";

import AudioPlayer from "../AudioPlayer/AudioPlayer";
import Music from "../Music/Music";
import styles from "./AllAudios.module.css";

const AllAudios = ({ data }) => {
  const [details, setDetails] = useState({});

  const detailsHandler = (audioInfo) => {
    setDetails(audioInfo);
  };

  return (
    <>
      <div className={styles.musics}>
        {data &&
          data.map((audio, index) => {
            return (
              <Music key={index} audio={audio} infoHandler={detailsHandler} />
            );
          })}
      </div>
      <AudioPlayer audio={details} />
    </>
  );
};

export default AllAudios;

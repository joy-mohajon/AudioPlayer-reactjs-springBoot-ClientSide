import React from "react";
import { useQuery } from "react-query";
import fetchAudios from "../../fetchAudios";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import Music from "../Music/Music";
import styles from "./AllAudios.module.css";

const AllAudios = () => {
  const { data } = useQuery("audios", () => fetchAudios());
  console.log(data);
  return (
    <>
      <div className={styles.musics}>
        {data &&
          data.map((audio, index) => {
            return <Music key={index} audio={audio} />;
          })}
      </div>
      <AudioPlayer />
    </>
  );
};

export default AllAudios;

import React, { useState } from "react";
import { useQuery } from "react-query";
import fetchAudios from "../../fetchdata/fetchAudios";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import LoadingMusic from "../Music/LoadingMusic";
import styles from "./LoadingAudios.module.css";

const LoadingAudios = () => {
  const { data } = useQuery("audios", () => fetchAudios());

  const arr = new Array(10);
  const [audio, setAudio] = useState(arr);

  console.log(data);
  return (
    <>
      <div className={styles.musics}>
        <LoadingMusic />;
        <LoadingMusic />;
        <LoadingMusic />;
        <LoadingMusic />;
        <LoadingMusic />;
        <LoadingMusic />;
        <LoadingMusic />;
        <LoadingMusic />;
        <LoadingMusic />;
        <LoadingMusic />;
        <LoadingMusic />;
        <LoadingMusic />;
        <LoadingMusic />;
        <LoadingMusic />;
        <LoadingMusic />;
        <LoadingMusic />;
        <LoadingMusic />;
        <LoadingMusic />;
        <LoadingMusic />;
        <LoadingMusic />;
        <LoadingMusic />;
        <LoadingMusic />;
        <LoadingMusic />;
        <LoadingMusic />;
        <LoadingMusic />;
        <LoadingMusic />;
        <LoadingMusic />;
        <LoadingMusic />;
      </div>
      <AudioPlayer />
    </>
  );
};

export default LoadingAudios;

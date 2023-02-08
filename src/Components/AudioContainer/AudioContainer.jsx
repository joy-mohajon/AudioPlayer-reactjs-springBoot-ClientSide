import React, { useEffect, useState } from "react";
import styles from "./AudioContainer.module.css";
import AudioAlbums from "../AudioAlbums/AudioAlbums";
import AllAudios from "../AllAudios/AllAudios";
import { useQuery } from "react-query";
import fetchAudioByLang from "../../fetchdata/fetchAudioByLang";

const AudioContainer = () => {
  const [album, setAlbum] = useState("All");

  const { data, refetch } = useQuery("filterAudio", () =>
    fetchAudioByLang(album)
  );

  useEffect(() => {
    refetch();
  }, [album, refetch]);

  const filterAudios = (album) => {
    setAlbum(album);
  };

  return (
    <div className={styles.music_content}>
      <AudioAlbums filterAudio={filterAudios} />
      <AllAudios data={data} />
    </div>
  );
};

export default AudioContainer;

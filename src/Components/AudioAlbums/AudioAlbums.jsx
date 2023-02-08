import { useEffect, useState } from "react";
import { useQuery } from "react-query";

import fetchAudios from "../../fetchdata/fetchAudios";
import AllAudios from "../AllAudios/AllAudios";
import styles from "./AudioAlbums.module.css";

const AudioAlbums = ({ filterAudio }) => {
  const { data } = useQuery("audios", () => fetchAudios());

  const [audios, setAudios] = useState(data);

  const names = ["All"];
  const [albumNames, setalbumNames] = useState(names);

  const light = new Array(albumNames.length).fill(0);
  light[0] = 1;
  const [active, setActive] = useState(light);

  const [album, setAlbum] = useState("");

  useEffect(() => {
    if (audios) {
      audios.forEach(({ language }) => {
        if (!names.includes(language)) {
          names.push(language);
        }
      });
    }
  }, []);

  const albumHandler = (album, index) => {
    filterAudio(album);

    album === "All" ? setAlbum("") : setAlbum(album);

    for (let i = 0; i < light.length; i++) {
      if (index === i) {
        light[i] = 1;
      } else {
        light[i] = 0;
      }
    }
    setActive(light);
  };

  return (
    <div>
      <div className={styles.music_albums}>
        <h2>{album} Album Songs</h2>
        <hr />
        <div className={styles.album_names}>
          {albumNames &&
            albumNames.map((name, index) => {
              return (
                <h6
                  key={index}
                  onClick={() => albumHandler(name, index)}
                  className={active[index] ? styles.light : ""}
                >
                  {name}
                </h6>
              );
            })}
        </div>
        <hr />
      </div>
    </div>
  );
};

export default AudioAlbums;

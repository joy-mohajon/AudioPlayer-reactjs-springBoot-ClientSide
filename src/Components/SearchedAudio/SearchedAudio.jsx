import React, { useEffect, useState } from "react";
import AllAudios from "../AllAudios/AllAudios";
import styles from "./SearchedAudio.module.css";

const SearchedAudio = ({ data }) => {
  const names = [];
  const [albumNames, setalbumNames] = useState(names);

  useEffect(() => {
    if (data) {
      data.forEach(({ language }) => {
        if (!names.includes(language)) {
          names.push(language);
        }
      });
    }
  }, []);

  return (
    <div className={styles.searchContainer}>
      {albumNames &&
        albumNames.map((name) => {
          return (
            <div className={styles.searchContent}>
              <h2>{name} Album Songs</h2>
              <hr />
              <AllAudios
                data={data.filter((audio) => audio.language === name)}
              />
            </div>
          );
        })}
    </div>
  );
};

export default SearchedAudio;

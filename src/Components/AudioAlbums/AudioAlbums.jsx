import React from "react";
import styles from "./AudioAlbums.module.css";

const AlbamNames = () => {
  return (
    <div>
      <div class={styles.music_albums}>
        <h2>English Album Songs</h2>
        <hr />
        <div class={styles.album_names}>
          <h6>All</h6>
          <h6>Bengali</h6>
          <h6>Hindi</h6>
          <h6 class={styles.english}>English</h6>
          <h6>Punjabi</h6>
          <h6>Banlga</h6>
          <h6>Tamil</h6>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default AlbamNames;

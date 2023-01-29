import React from "react";
import styles from "./Sidebar.module.css";
import Spotify_Logo_RGB_White from "../../assets/images/Spotify_Logo_RGB_White.png";
import icons8_home_page from "../../assets/images/icons8_home_page.png";
import icons8_search from "../../assets/images/icons8_search.png";
import icons8_heart from "../../assets/images/icons8_heart.png";
import icons8_addNew from "../../assets/images/icons8_addNew.png";

const Sidebar = () => {
  return (
    <div class={styles.sidebar}>
      <img
        src={Spotify_Logo_RGB_White}
        class="img-fluid"
        alt="Spotify_Logo_RGB_White"
      />
      <div class={styles.sidebar_content}>
        <h5 class={styles.sidebar_text}>
          <img
            class={styles.sidebar_icon}
            src={icons8_home_page}
            alt="sidebar home icon"
          />
          Home
        </h5>
        <h5 class={styles.sidebar_text}>
          <img
            class={styles.sidebar_icon}
            src={icons8_search}
            alt="search icon"
          />
          Search
        </h5>
        <h5 class={styles.sidebar_text}>
          <img
            class={styles.sidebar_icon}
            src={icons8_heart}
            alt="heart icon"
          />
          Liked Songs
        </h5>
        <h5 class={styles.sidebar_text}>
          <img
            class={styles.sidebar_icon}
            src={icons8_addNew}
            alt="add new icon"
          />
          Create PlayList
        </h5>
      </div>
      <hr class="text-light w-75 m-auto mb-20px" />
      <div class={styles.sidebar_playlist}></div>
    </div>
  );
};

export default Sidebar;

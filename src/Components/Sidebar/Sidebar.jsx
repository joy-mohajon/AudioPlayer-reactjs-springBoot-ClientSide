import React, { useEffect, useState } from "react";
import styles from "./Sidebar.module.css";
import Spotify_Logo_RGB_White from "../../assets/images/Spotify_Logo_RGB_White.png";
import icons8_home_page from "../../assets/images/icons8_home_page.png";
import icons8_search from "../../assets/images/icons8_search.png";
import icons8_heart from "../../assets/images/icons8_heart.png";
import icons8_addNew from "../../assets/images/icons8_addNew.png";
import { Link, Outlet } from "react-router-dom";

const Sidebar = () => {
  const arr = new Array(3).fill(0);
  arr[0] = 1;
  const [active, setActive] = useState(arr);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    for (let i = 0; i < arr.length; i++) {
      if (i === index) {
        arr[i] = 1;
      } else {
        arr[i] = 0;
      }
    }
    setActive(arr);
  }, [index]);

  return (
    <>
      <div className={styles.sidebar}>
        <img
          src={Spotify_Logo_RGB_White}
          className="img-fluid"
          alt="Spotify_Logo_RGB_White"
        />
        <div className={styles.sidebar_content}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <h5
              onClick={() => setIndex(0)}
              className={active[0] ? styles.active : styles.inactive}
            >
              <img
                className={styles.sidebar_icon}
                src={icons8_home_page}
                alt="sidebar home icon"
              />
              Home
            </h5>
          </Link>
          <Link to="/search" style={{ textDecoration: "none" }}>
            <h5
              onClick={() => setIndex(1)}
              className={active[1] ? styles.active : styles.inactive}
            >
              <img
                className={styles.sidebar_icon}
                src={icons8_search}
                alt="search icon"
              />
              Search
            </h5>
          </Link>
          <Link to="/liked" style={{ textDecoration: "none" }}>
            <h5
              onClick={() => setIndex(2)}
              className={active[2] ? styles.active : styles.inactive}
            >
              <img
                className={styles.sidebar_icon}
                src={icons8_heart}
                alt="heart icon"
              />
              Liked Songs
            </h5>
          </Link>

          <h5 className={styles.sidebar_text}>
            <img
              className={styles.sidebar_icon}
              src={icons8_addNew}
              alt="add new icon"
            />
            Create PlayList
          </h5>
        </div>
        <hr className="text-light w-75 m-auto mb-20px" />
        <div className={styles.sidebar_playlist}></div>
      </div>
      <Outlet />
    </>
  );
};

export default Sidebar;

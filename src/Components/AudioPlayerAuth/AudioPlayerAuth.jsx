import React from "react";
import styles from "./AudioPlayerAuth.module.css";
import { Outlet } from "react-router-dom";

const AudioPlayerAuth = () => {
  return (
    <div className={styles.audio_player}>
      <div className={styles.main_header}>
        <button className={`${styles.btn} btn`}>Login</button>
        <button className={`${styles.btn} btn`}>Signup</button>
      </div>
      <Outlet />
    </div>
  );
};

export default AudioPlayerAuth;

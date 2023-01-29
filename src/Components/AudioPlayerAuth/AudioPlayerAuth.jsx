import React from "react";
import styles from "./AudioPlayerAuth.module.css";

const AudioPlayerAuth = () => {
  return (
    <div>
      <div class={styles.main_header}>
        <button class={`${styles.btn} btn`}>Login</button>
        <button class={`${styles.btn} btn`}>Signup</button>
      </div>
    </div>
  );
};

export default AudioPlayerAuth;

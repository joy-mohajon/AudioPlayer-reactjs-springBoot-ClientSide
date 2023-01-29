import React, { useEffect, useRef, useState } from "react";
import styles from "./PlayerController.module.css";
import icons8_rewind from "../../assets/images/icons8-rewind-48.png";
import icons8_forward from "../../assets/images/icons8-fast-forward-64.png";
import premePoraBaron from "../../assets/mp3/Preme Pora Baron- [PagalWorld.NL].mp3";

const PlayerController = ({ volume }) => {
  const [paused, setPaused] = useState(true);

  const audioRef = useRef(null);
  const audioCurrentTime = useRef(null);
  const audioTotalTime = useRef(null);
  const audioProgress = useRef(null);

  console.log("playerC:", volume);
  useEffect(() => {
    audioRef.current.addEventListener("timeupdate", function () {
      let currentTime = Math.round(audioRef.current.currentTime);
      let duration = Math.round(audioRef.current.duration);

      let currentMinute = Math.floor(currentTime / 60);
      let currentSecond = currentTime % 60;
      let durationMinute = Math.floor(duration / 60);
      let durationSecond = duration % 60;

      audioCurrentTime.current.innerHTML =
        currentMinute.toString() + ":" + currentSecond.toString();
      audioTotalTime.current.innerHTML =
        durationMinute.toString() + ":" + durationSecond.toString();

      let percent = (currentTime / duration) * 100;
      audioProgress.current.value = percent;

      if (percent === 100) {
        setPaused(true);
      }
    });
  }, []);

  useEffect(() => {
    if (volume <= 0) {
      audioRef.current.muted = true;
    } else {
      audioRef.current.muted = false;
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const playPauseButton = () => {
    setPaused(!paused);
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  const backward = () => {
    audioRef.current.currentTime = audioRef.current.currentTime - 5;
  };

  const forward = () => {
    audioRef.current.currentTime = audioRef.current.currentTime + 5;
  };

  return (
    <div className={styles.audio_player}>
      <audio ref={audioRef} src={premePoraBaron} type="audio/mpeg"></audio>
      <div className={styles.controls}>
        <div className={styles.audio_cnt}>
          <img src={icons8_rewind} onClick={backward} alt="" />
          <div onClick={playPauseButton} className={styles.play_pause_button}>
            <div
              className={`${styles.button} ${!paused ? styles.paused : ""}`}
            ></div>
          </div>
          <img src={icons8_forward} onClick={forward} alt="" />
        </div>
        <progress
          ref={audioProgress}
          class={styles.progress_bar}
          value="0"
          max="100"
        ></progress>
        <div class={styles.audio_time}>
          <p ref={audioCurrentTime}>0.00</p>
          <p ref={audioTotalTime}>0.00</p>
        </div>
      </div>
    </div>
  );
};

export default PlayerController;

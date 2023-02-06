import React, { Suspense } from "react";
import styles from "./AudioContainer.module.css";
import AudioAlbums from "../AudioAlbums/AudioAlbums";
import AllAudios from "../AllAudios/AllAudios";
import { QueryClientProvider, QueryClient } from "react-query";
import LoadingAudios from "../LoadingAudios/LoadingAudios";

const AudioContainer = () => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
      },
    },
  });

  return (
    <div className={styles.music_content}>
      <QueryClientProvider client={client}>
        <Suspense fallback={<h1>Loading...</h1>}>
          <AudioAlbums />
          <AllAudios />
          {/* <LoadingAudios /> */}
        </Suspense>
      </QueryClientProvider>
    </div>
  );
};

export default AudioContainer;

import React, { Suspense } from "react";
import AudioContainer from "../AudioContainer/AudioContainer";
import { QueryClientProvider, QueryClient } from "react-query";

const AudioPlayer = () => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
      },
    },
  });

  return (
    <QueryClientProvider client={client}>
      <Suspense fallback={<h1>Loading...</h1>}>
        <AudioContainer />
      </Suspense>
    </QueryClientProvider>
  );
};

export default AudioPlayer;

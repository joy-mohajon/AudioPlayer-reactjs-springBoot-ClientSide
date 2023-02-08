import React, { Suspense } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import SearchButton from "../SearchButton/SearchButton";

const Search = () => {
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
        <SearchButton />
      </Suspense>
    </QueryClientProvider>
  );
};

export default Search;

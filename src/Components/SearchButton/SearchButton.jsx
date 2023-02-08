import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import fetchAudios from "../../fetchdata/fetchAudios";
import SearchedAudio from "../SearchedAudio/SearchedAudio";
import styles from "./SearchButton.module.css";

const SearchButton = () => {
  const { data } = useQuery("audios", () => fetchAudios());
  const [audios, setAudios] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");

  console.log("audios", audios);

  useEffect(() => {
    const newData = data.filter((value) => {
      if (searchTerm === "") {
        return value;
      } else if (value.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return value;
      }
    });
    setAudios(newData);
  }, [data, searchTerm]);

  return (
    <div className={styles.searchContainer}>
      {/* <form> */}
      <div className={styles.searchInput}>
        <input
          type="text"
          name="audio"
          placeholder="Search Audio..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* <input type="submit" value="Search"></input> */}
      {/* </form> */}
      <SearchedAudio data={audios} />
    </div>
  );
};

export default SearchButton;

import axios from "axios";

const fetchAudioByLang = async (lang) => {
  console.log("fetching", lang);
  const res = axios.get(`http://localhost:8081/api/audios/${lang}/`);
  return (await res).data;
};

export default fetchAudioByLang;

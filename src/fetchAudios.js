import axios from "axios";

const fetchAudios = async () => {
  const res = await axios.get("http://localhost:8081/api/audios/");
  return res.data;
};
export default fetchAudios;

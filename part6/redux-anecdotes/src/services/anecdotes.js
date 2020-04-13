import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes";

const getAll = async () => {
  const res = axios.get(baseUrl);
  return (await res).data;
};

export default { getAll };

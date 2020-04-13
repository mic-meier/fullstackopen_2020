import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes";

const getAll = async () => {
  const res = axios.get(baseUrl);
  return (await res).data;
};

const createNew = async (content) => {
  const object = { content: content, votes: 0 };
  const res = await axios.post(baseUrl, object);
  return res.data;
};

const likeAnecdote = async (anecdote) => {
  const object = { content: anecdote.content, votes: anecdote.votes };
  const res = await axios.put(`${baseUrl}/${anecdote.id}`, object);
  return res.data;
};

export default { getAll, createNew, likeAnecdote };

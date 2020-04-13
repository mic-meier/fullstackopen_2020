const reducer = (state = [], action) => {
  switch (action.type) {
    case "INIT":
      return action.data;
    case "CREATE": {
      const anecdote = action.data;
      return [...state, anecdote];
    }
    case "LIKE":
      const id = action.data.id;
      const anecdoteToLike = state.find((anecdote) => anecdote.id === id);
      const likedAnecdote = {
        ...anecdoteToLike,
        votes: anecdoteToLike.votes + 1,
      };
      return state.map((anecdote) =>
        anecdote.id !== id ? anecdote : likedAnecdote
      );
    default:
  }
  return state;
};

// Action creators
export const initializeAnecdotes = (anecdotes) => {
  return {
    type: "INIT",
    data: anecdotes,
  };
};

export const createAnecdote = (content) => {
  return {
    type: "CREATE",
    data: { content, votes: 0 },
  };
};

export const voteOnAnecdote = (id) => {
  return {
    type: "LIKE",
    data: { id },
  };
};
export default reducer;

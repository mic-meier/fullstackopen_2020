import anecdotesService from "../services/anecdotes";

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
export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdotesService.getAll();
    dispatch({
      type: "INIT",
      data: anecdotes,
    });
  };
};

export const createAnecdote = (data) => {
  return {
    type: "CREATE",
    data: {
      content: data.content,
      id: data.id,
      votes: 0,
    },
  };
};

export const voteOnAnecdote = (id) => {
  return {
    type: "LIKE",
    data: { id },
  };
};
export default reducer;

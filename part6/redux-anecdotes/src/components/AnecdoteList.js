import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { voteOnAnecdote } from "../reducers/anecdoteReducer";

const AnecdoteList = () => {
  const anecdotes = useSelector((state) =>
    state.sort((a, b) => {
      if (a.votes > b.votes) {
        return -1;
      }
      if (a.votes < b.votes) {
        return 1;
      }
      return 0;
    })
  );
  const dispatch = useDispatch();

  const vote = (id) => {
    dispatch(voteOnAnecdote(id));
  };

  return (
    <>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
          <br />
        </div>
      ))}
    </>
  );
};

export default AnecdoteList;

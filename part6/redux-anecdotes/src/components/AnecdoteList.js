import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { voteOnAnecdote } from "../reducers/anecdoteReducer";
import {
  displayNotification,
  hideNotification,
} from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const anecdotes = useSelector(({ anecdotes }) =>
    anecdotes.sort((a, b) => {
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

  const vote = (id, anecdote) => {
    dispatch(voteOnAnecdote(id));
    dispatch(displayNotification(`Voted for anecdote "${anecdote}"`));
    setTimeout(() => {
      dispatch(hideNotification);
    }, 2000);
  };

  return (
    <>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id, anecdote.content)}>
              vote
            </button>
          </div>
          <br />
        </div>
      ))}
    </>
  );
};

export default AnecdoteList;

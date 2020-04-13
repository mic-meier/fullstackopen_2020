import React from "react";
import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import {
  displayNotification,
  hideNotification,
} from "../reducers/notificationReducer";
import anecdotesService from "../services/anecdotes";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const add = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    const newAnecdote = await anecdotesService.createNew(content);
    dispatch(createAnecdote(newAnecdote));
    dispatch(displayNotification("New anecdote created"));
    setTimeout(() => {
      dispatch(hideNotification());
    }, 2000);
  };

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={add}>
        <div>
          <input name="anecdote" />
        </div>
        <button>create</button>
      </form>
      <br />
    </>
  );
};

export default AnecdoteForm;

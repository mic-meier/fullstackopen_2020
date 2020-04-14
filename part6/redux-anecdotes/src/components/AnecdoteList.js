import React from "react";
import { connect } from "react-redux";
import { voteOnAnecdote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteList = (props) => {
  // const filter = useSelector(({ filter }) => filter.searchText);
  const anecdotes = () => {
    return props.anecdotes
      .filter((anecdote) =>
        anecdote.content
          .toLowerCase()
          .includes(props.filter.searchText.toLowerCase())
      )
      .sort((a, b) => {
        if (a.votes > b.votes) {
          return -1;
        }
        if (a.votes < b.votes) {
          return 1;
        }
        return 0;
      });
  };

  // const dispatch = useDispatch();

  const vote = (anecdote) => {
    // dispatch(voteOnAnecdote(anecdote));
    // dispatch(setNotification(`Voted for anecdote "${anecdote.content}"`, 2));
    console.log("TODO");
  };

  return (
    <>
      {anecdotes().map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
          <br />
        </div>
      ))}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter,
  };
};

const ConnectedAnecdoteList = connect(mapStateToProps)(AnecdoteList);
export default ConnectedAnecdoteList;

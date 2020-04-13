const initialState = { searchText: "" };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FILTER_ANECDOTES":
      return {
        searchText: action.searchText,
      };
    default:
      return state;
  }
};

export const setFilter = (searchText) => {
  return {
    type: "FILTER_ANECDOTES",
    searchText: searchText,
  };
};

export default reducer;

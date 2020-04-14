const initialState = {
  message: "",
  display: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_NOTIFICATION":
      return { ...state, message: action.message, display: true };

    case "HIDE_NOTIFICATION":
      return { ...state, message: "", display: false };
    default:
      return state;
  }
};

let id;

export const setNotification = (message, time) => {
  return async (dispatch) => {
    clearTimeout(id);
    dispatch({
      type: "SHOW_NOTIFICATION",
      message: message,
    });
    id = setTimeout(() => {
      dispatch({
        type: "HIDE_NOTIFICATION",
      });
    }, time * 1000);
  };
};

export default reducer;

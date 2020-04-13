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

export const setNotification = (message, time) => {
  return async (dispatch) => {
    dispatch({
      type: "SHOW_NOTIFICATION",
      message: message,
    });
    setTimeout(() => {
      dispatch({
        type: "HIDE_NOTIFICATION",
      });
    }, time * 1000);
  };
};

export default reducer;

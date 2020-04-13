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

export const displayNotification = (notificationMessage) => {
  return {
    type: "SHOW_NOTIFICATION",
    message: notificationMessage,
  };
};

export const hideNotification = () => {
  return {
    type: "HIDE_NOTIFICATION",
  };
};

export default reducer;

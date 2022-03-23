const initialState = {
  token: "",
  userInfo: {},
  selectedChat: "",
  chats: [],
  notification: [],
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      const { token, userInfo } = action.payload;

      return {
        ...state,
        token: token,
        userInfo: userInfo,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        state,
      };
    case "SELECT_CHAT":
      const { data } = action.payload;
      return {
        ...state,
        selectedChat: data,
      };
    case "EMPTY_SELECT_CHAT":
      return {
        ...state,
        selectedChat: "",
      };
    case "CHATS":
      const { chats } = action.payload;
      return {
        ...state,
        chats: chats,
      };
    case "SET_NOTIFICATION":
      const { notify } = action.payload;
      return {
        ...state,
        notification: notify,
      };
    default:
      return {
        ...state,
        token: localStorage.getItem("token")
          ? localStorage.getItem("token")
          : null,
        userInfo: localStorage.getItem("userInfo")
          ? localStorage.getItem("userInfo")
          : null,
      };
  }
};

export default AuthReducer;

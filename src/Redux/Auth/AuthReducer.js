import { BEGIN_LOGIN, SUCCESS_LOGIN, FAILURE_LOGIN } from "./AuthActions";

const initialState = {
  beginLogin: false,
  succesLogin: false,
  failureLogin: false,
  posts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case BEGIN_LOGIN:
      return {
        ...state,
        beginLogin: true,
        succesLogin: false,
        failureLogin: false,
      };
    case SUCCESS_LOGIN:
      return {
        ...state,
        beginLogin: false,
        succesLogin: true,
        failureLogin: false,
        posts: action.payload,
      };
    case FAILURE_LOGIN:
      return {
        ...state,
        beginLogin: false,
        succesLogin: false,
        failureLogin: true,
        posts: [],
      };
    default:
      return state;
  }
};

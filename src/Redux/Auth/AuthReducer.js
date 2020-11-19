import {
  BEGIN_LOGIN,
  SUCCESS_LOGIN,
  FAILURE_LOGIN,
  MAKE_LOGOUT,
} from "./AuthActions";

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
        beginLogin: true
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
    case MAKE_LOGOUT:
      return {
        ...state,
        succesLogin: false,
      };
    default:
      return state;
  }
};

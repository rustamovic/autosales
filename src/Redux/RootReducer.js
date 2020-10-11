import { combineReducers } from "redux";

//reducers
import AuthReducer from "./Auth/AuthReducer";

export const rootReducer = combineReducers({
  auth: AuthReducer,
});

import { combineReducers } from "redux";

//reducers
import AuthReducer from "./Auth/AuthReducer";
import addCarReducer from "./addCar/addCarReducer";

export const rootReducer = combineReducers({
  auth: AuthReducer,
  addCar: addCarReducer,
});

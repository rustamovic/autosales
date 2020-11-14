import { combineReducers } from "redux";

//reducers
import AuthReducer from "./Auth/AuthReducer";
import addCarReducer from "./addCar/addCarReducer";
import adminLoginReducer from "./adminLogin/adminLoginReducer";
import sellerReducer from "./seller/sellerReducer";
import userProfileReducer from "./userProfile/userProfileReducer";

export const rootReducer = combineReducers({
  auth: AuthReducer,
  addCar: addCarReducer,
  admin: adminLoginReducer,
  seller: sellerReducer,
  userProfile: userProfileReducer
});

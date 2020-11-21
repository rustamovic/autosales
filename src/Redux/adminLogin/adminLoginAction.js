import axiosInstance from "../../services/axiosInstance";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const ADMIN_LOGIN_BEGIN = "ADMIN_LOGIN_BEGIN";
export const ADMIN_LOGIN_SUCCESS = "ADMIN_LOGIN_SUCCESS";
export const ADMIN_LOGIN_FAIL = "ADMIN_LOGIN_FAIL";

export const ADD_ADMIN_BEGIN = "ADD_ADMIN_BEGIN";
export const ADD_ADMIN_SUCCESS = "ADD_ADMIN_SUCCESS";
export const ADD_ADMIN_FAIL = "ADD_ADMIN_FAIL";

export const adminLogin = (email, password, history) => async (dispatch) => {
  dispatch({ type: ADMIN_LOGIN_BEGIN });

  try {
    const data = {
      email: email,
      password: password,
    };

    await axiosInstance().post("/admin/login", data);
    dispatch({ type: ADMIN_LOGIN_SUCCESS });
    history.push("/admin-list");
    dispatch(showLoading());
    setTimeout(() => {
      dispatch(hideLoading());
    }, 1500);
  } catch (error) {
    dispatch({ type: ADMIN_LOGIN_FAIL });
    dispatch(hideLoading());
  }
};

export const addAdmin = (name, email, password, history) => async (dispatch) => {
  dispatch({ type: ADD_ADMIN_BEGIN });
  dispatch(showLoading());

  try {
    const data = {
      name: name,
      email: email,
      password: password,
    };
    await axiosInstance().post("/admin/add-admin", data);
    dispatch({ type: ADD_ADMIN_SUCCESS });
    dispatch(hideLoading());
    history.push("/admin-list")
  } catch (error) {
    dispatch({ type: ADD_ADMIN_FAIL });

    dispatch(hideLoading());
  }
};

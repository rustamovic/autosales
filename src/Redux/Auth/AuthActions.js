import axiosInstance from "../../services/axiosInstance";

export const BEGIN_LOGIN = "BEGIN_LOGIN";
export const SUCCESS_LOGIN = "SUCCESS_LOGIN";
export const FAILURE_LOGIN = "FAILURE_LOGIN";

export const MAKE_LOGOUT = 'MAKE_LOGOUT';

export const makeLogin = (emailAddress) => async (dispatch) => {
  dispatch({ type: BEGIN_LOGIN });

  try {
    const response = await axiosInstance().post("/login", {
      emailAddress: emailAddress,
    });

    dispatch({ type: SUCCESS_LOGIN, payload: response });
    localStorage.setItem("token", response.data);
    localStorage.setItem("email", emailAddress);
  } catch (err) {
    dispatch({ type: FAILURE_LOGIN });
  }
};

export const makeLogout = () => {
  return {
    type: MAKE_LOGOUT
  }
}
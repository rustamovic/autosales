import axiosInstance from "../../services/axiosInstance";

export const BEGIN_LOGIN = "BEGIN_LOGIN";
export const SUCCESS_LOGIN = "SUCCESS_LOGIN";
export const FAILURE_LOGIN = "FAILURE_LOGIN";

export const makeLogin = (emailAddress) => async (dispatch) => {
  dispatch({ type: BEGIN_LOGIN });

  try {
    const response = await axiosInstance().post("/login", {
      emailAddress: emailAddress,
    });

    dispatch({ type: SUCCESS_LOGIN, payload: response });
    console.log(response, "response");
  } catch (err) {
    dispatch({ type: FAILURE_LOGIN });
  }
};

import axios from "axios";
// import { mainApi } from "../../service/mainApi";

export const BEGIN_LOGIN = "BEGIN_LOGIN";
export const SUCCESS_LOGIN = "SUCCESS_LOGIN";
export const FAILURE_LOGIN = "FAILURE_LOGIN";

export const makeLogin = (userName, password) => async (dispatch) => {
  dispatch({ type: BEGIN_LOGIN });

  //   const config = {
  //     userName: userName,
  //     password: password,
  //   };

  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    dispatch({ type: SUCCESS_LOGIN, payload: response });
  } catch (err) {
    dispatch({ type: FAILURE_LOGIN });
  }
};

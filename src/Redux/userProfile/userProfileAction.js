import axiosInstance from "../../services/axiosInstance";

// /profile?email=javoh@gmail.com
export const USER_PROFILE_BEGIN = "USER_PROFILE_BEGIN";
export const USER_PROFILE_SUCCESS = "USER_PROFILE_SUCCESS";
export const USER_PROFILE_FAIL = "USER_PROFILE_FAIL"


export const userProfileLogin = (email) => async dispatch => {
    dispatch({type: USER_PROFILE_BEGIN});

    try {
        const response = await axiosInstance().get(`/profile?email=${email}`);

        dispatch({type: USER_PROFILE_SUCCESS, payload: response})
    } catch (error) {
        dispatch({type: USER_PROFILE_FAIL})
    }
}

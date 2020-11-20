import axiosInstance from "../../services/axiosInstance";

// /profile?email=javoh@gmail.com
export const USER_PROFILE_BEGIN = "USER_PROFILE_BEGIN";
export const USER_PROFILE_SUCCESS = "USER_PROFILE_SUCCESS";
export const USER_PROFILE_FAIL = "USER_PROFILE_FAIL"

export const HANDLE_DATA = "HANDLE_DATA";

export const userProfileLogin = () => async dispatch => {
    dispatch({type: USER_PROFILE_BEGIN});

    try {

        const email = localStorage.getItem("email");
        const response = await axiosInstance().get(`/profile?email=${email}`);

        dispatch({type: USER_PROFILE_SUCCESS, payload: response.data.seller});
    } catch (error) {
        dispatch({type: USER_PROFILE_FAIL})
    }
};

export const handleObjectData = (data) => {
    return {
        type: HANDLE_DATA,
        payload: data
    }
}
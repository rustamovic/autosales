import axiosInstance from "../../services/axiosInstance";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const ADMIN_SELLER_BEGIN = "ADMIN_SELLER_BEGIN";
export const ADMIN_SELLER_SUCCESS = "ADMIN_SELLER_SUCCESS";
export const ADMIN_SELLER_FAIL = "ADMIN_SELLER_FAIL";

// /admin/seller/details/
export const ADMIN_SELLER_BY_ID_BEGIN = "ADMIN_SELLER_BY_ID_BEGIN";
export const ADMIN_SELLER_BY_ID_SUCCESS = "ADMIN_SELLER_BY_ID_SUCCESS";
export const ADMIN_SELLER_BY_ID_FAIL = "ADMIN_SELLER_BY_ID_FAIL";

export const adminSeller = () => async (dispatch) => {
  dispatch({ type: ADMIN_SELLER_BEGIN });

  try {
    const response = await axiosInstance().get("/admin/seller");

    dispatch({ type: ADMIN_SELLER_SUCCESS, payload: response.data });
    dispatch(showLoading());
    setTimeout(() => {
      dispatch(hideLoading());
    }, 1500);
  } catch (error) {
    dispatch({ type: ADMIN_SELLER_FAIL });
    dispatch(hideLoading());
  }
};

export const getSellerById = (id) => async (dispatch) => {
  dispatch({ type: ADMIN_SELLER_BY_ID_BEGIN });

  try {
    const response = await axiosInstance().get(`/admin/seller/details/${id}`);

    dispatch({ type: ADMIN_SELLER_BY_ID_SUCCESS, payload: response });
    dispatch(showLoading());
    setTimeout(() => {
      dispatch(hideLoading());
    }, 1500);
  } catch (error) {
    dispatch({ type: ADMIN_SELLER_BY_ID_FAIL });
    dispatch(hideLoading());
  }
};

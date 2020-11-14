import {
  ADMIN_SELLER_BEGIN,
  ADMIN_SELLER_SUCCESS,
  ADMIN_SELLER_FAIL,
  ADMIN_SELLER_BY_ID_BEGIN,
  ADMIN_SELLER_BY_ID_SUCCESS,
  ADMIN_SELLER_BY_ID_FAIL,
} from "./sellerAction";

const initialState = {
  sellerBegin: false,
  sellerSuccess: false,
  sellerFail: false,
  sellerData: [],
  sellerByIdBegin: false,
  sellerByIdSuccess: false,
  sellerByIdFail: false,
  sellerByIdData: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_SELLER_BEGIN:
      return {
        ...state,
        sellerBegin: true,
      };
    case ADMIN_SELLER_SUCCESS:
      return {
        ...state,
        sellerBegin: false,
        sellerSuccess: true,
        sellerFail: false,
        sellerData: action.payload,
      };
    case ADMIN_SELLER_FAIL:
      return {
        ...state,
        sellerBegin: false,
        sellerSuccess: false,
        sellerFail: true,
      };
    case ADMIN_SELLER_BY_ID_BEGIN:
      return {
        ...state,
        sellerByIdBegin: false,
      };
    case ADMIN_SELLER_BY_ID_SUCCESS:
      return {
        ...state,
        sellerByIdBegin: false,
        sellerByIdSuccess: true,
        sellerByIdFail: false,
        sellerByIdData: action.payload,
      };
    case ADMIN_SELLER_BY_ID_FAIL:
      return {
        ...state,
        sellerByIdBegin: false,
        sellerByIdSuccess: false,
        sellerByIdFail: true,
      };
    default:
      return state;
  }
};

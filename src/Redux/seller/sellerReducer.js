import {
  ADMIN_SELLER_BEGIN,
  ADMIN_SELLER_SUCCESS,
  ADMIN_SELLER_FAIL,
  ADMIN_SELLER_BY_ID_BEGIN,
  ADMIN_SELLER_BY_ID_SUCCESS,
  ADMIN_SELLER_BY_ID_FAIL,
  HANDLE_SELLER_DATA
} from "./sellerAction";

const initialState = {
  sellerBegin: false,
  sellerSuccess: false,
  sellerFail: false,
  sellerData: [],
  count: 0,
  sellerByIdBegin: false,
  sellerByIdSuccess: false,
  sellerByIdFail: false,
  sellerByIdData: [],
  handlingData: {}
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
        count: action.count
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
    case HANDLE_SELLER_DATA:
      return {
        ...state,
        handlingData: action.payload
      }
    default:
      return state;
  }
};

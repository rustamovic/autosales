import { BEGIN_ADD_CAR, SUCCESS_ADD_CAR, FAIL_ADD_CAR } from "./addCarActions";

const initialState = {
  beginAddCar: false,
  successAddCar: false,
  failAddCar: false,
  addCarResponse: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case BEGIN_ADD_CAR:
      return {
        ...state,
        beginAddCar: true,
      };
    case SUCCESS_ADD_CAR:
      return {
        ...state,
        beginAddCar: false,
        successAddCar: true,
        addCarResponse: action.payload,
      };
    case FAIL_ADD_CAR:
      return {
        ...state,
        beginAddCar: false,
        successAddCar: false,
        failAddCar: true,
      };
    default:
      return state;
  }
};

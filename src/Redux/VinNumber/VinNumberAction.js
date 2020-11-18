import axios from 'axios';

export const GET_VIN_NUMBER_BEGIN = "GET_VIN_NUMBER_BEGIN";
export const GET_VIN_NUMBER_SUCCESS = "GET_VIN_NUMBER_SUCCESS";
export const GET_VIN_NUMBER_FAIL = "GET_VIN_NUMBER_FAIL";

export const getVinNumber = (vinNumber, history) => async dispatch => {
    dispatch({type: GET_VIN_NUMBER_BEGIN});

    try {
        const token = localStorage.getItem("token")
        const response = await axios.get("https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/" + vinNumber + "?format=json");

        dispatch({type: GET_VIN_NUMBER_SUCCESS, payload: response.data.Results, myVin: vinNumber});

        if(token){
            history.push('/form')
        }else {
            history.push('/stepper')
        }
    } catch (error) {
        dispatch({type: GET_VIN_NUMBER_FAIL})
    }

}
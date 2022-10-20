import axios from "axios";
import { SET_DISTRICT, SET_PROVINCE } from "../types";

// export const setProvince = (payload) => {
//   return { type: SET_PROVINCE, payload };
// };
// export const setDistrict = (payload) => {
//   return { type: SET_DISTRICT, payload };
// };

export const demoHookAction = {
  setProvince: () => {
    return async (dispatch) => {
      const result = await axios.get(
        "https://6335707aea0de5318a137e3c.mockapi.io/provines"
      );
      dispatch({
        type: SET_PROVINCE,
        payload: result.data,
      });
    };
  },

  setDistrict: () => {
    return async (dispatch) => {
      const result = await axios.get(
        "https://6335707aea0de5318a137e3c.mockapi.io/districts"
      );
      dispatch({
        type: SET_DISTRICT,
        payload: result.data,
      });
    };
  },
};

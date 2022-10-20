import { SET_PROVINCE, SET_DISTRICT } from "../types";

const stateDefaults = {
  provincesList: [],
  districtList: [],
};

export const demoHookReducer = (state = stateDefaults, { type, payload }) => {
  switch (type) {
    case SET_PROVINCE: {
      let data = [...state.provincesList];
      data = payload;

      return { ...state, provincesList: data };
    }
    case SET_DISTRICT: {
      console.log(payload);
      let data = [...state.districtList];
      data = payload;

      return { ...state, districtList: data };
    }
    default: {
      return state;
    }
  }
};

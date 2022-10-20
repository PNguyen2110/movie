import React from "react";
import { GET_MOVIES_BYId, GET_MOVIES_LIST } from "../types";
const stateDefault = {
  movieList: [],
  filmById: {},
};

export const MovieReducer = (state = stateDefault, { payload, type }) => {
  switch (type) {
    case GET_MOVIES_LIST: {
      let data = [...state.movieList];
      data = payload;
      return { ...state, movieList: data };
    }
    case GET_MOVIES_BYId: {
      return { ...state, filmById: payload };
    }
    default: {
      return state;
    }
  }
};

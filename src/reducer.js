import { findAllByDisplayValue } from "@testing-library/react";

export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  token: 
  "BQDk1Xxm4vV8ae7fQ8JeO9cmi4Ws7n3JPmiITCwwgXYAmtM2UdPTxq_gyZhXmHZQuMM57D_4FYV6nWZA_US9FQ1otj1QycbiwQbK5fRXUvkq_Qk-vh0k3q3xCViGoHdwiSsdND-xzFx9wptXckHc1_3uJrjiiZOnhB7xPDwbNTcfRSwXOSpkx8Gpsm4q_7nk-iZV4k2zFM63znS2HRSHEA",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

      case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };


    default:
      return state;
      };
    }
export default reducer ;
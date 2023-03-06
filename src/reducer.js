
export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  //token: "BQAv3ZzG1Bq44NL1jZk_rAACY9X7khZAj_ZsHnewPbXU1eSzHHK5kkY0RFkJMtRChU0TFJIofSv50U_LROs7bAP7cyqjGwEZ8jmiDfJ_vpQ1MUGBEIgX4VDVNNWT7464mYW8P-poNOfR6xk7cO3V56fOgMDZEui5WDYTOTRcYFFBSSyVb5IJxh7yzGF1hICjWX7V6UtZrQCbUJDq_Hxpcg",
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

      case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };


    default:
      return state;
      } 
    }
export default reducer ;
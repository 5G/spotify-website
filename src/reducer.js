export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    "BQAX4MmzeRxWaInmRw8Uz6A9zhltHbAQ_WbbCEawyNrfjEwKjJOJcaBExfpBaeLKk4YtVmtuudCG1IDf1xtVJmVal213X-wk7DumcY-mqpvkTPV3zyTaLVohsKVn2H9DWhxTckkIbYv4Wn2op_SKERfoc9al",
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
  }
};

export default reducer;

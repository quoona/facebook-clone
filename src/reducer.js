//init state user
export const initialState = {
  user: null,
};
//action dispatch action into datalayer
export const actionType = {
  SET_USER: "SET_USER",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionType.SET_USER:
      return {
        //return whatever it currently look like
        //but change the user to whatever we pass in with the user payload
        ...state,
        user: action.user,
      };
    //default
    default:
      return state;
  }
};

export default reducer;

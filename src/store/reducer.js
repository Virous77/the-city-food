const reducer = (state, action) => {
  if (action.type === "SET-USER") {
    return {
      ...state,
      user: action.payload,
    };
  }

  if (action.type === "GET-FOOD") {
    return {
      ...state,
      foodItems: action.payload,
    };
  }
};

export default reducer;

const AddlistReducer = (state = [], action) => {
  switch (action.type) {
    case "ADDLIST":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default AddlistReducer;

const studentReducerState = {
  students: [],
};

const StudentReducer = (state = studentReducerState, action) => {
  console.log(action);
  switch (action.type) {
    case "ADDLIST":
      state.students.push(action.payload);
      return {
        ...state,
      };
    case "REMOVE":
      state.students.splice(action.payload, 1);
      return {
        ...state,
      };
    case "UPDATE":
      state.students.splice(action.payload.id, 1, action.payload.student);
      return { ...state };
    default:
      return {
        ...state,
      };
  }
};

export default StudentReducer;

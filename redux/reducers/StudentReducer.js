import * as constants from "../constants";

const student = {
  id: "fcc032b7-9ba4-45ff-8e37-da2c387213e1",
  name: "Nguyen Van A",
  birthday: "",
  gender: "M/F/Unknown",
};

const student2 = {
  id: "6f67d96a-f492-48fa-895c-772eccf947f9",
  name: "Nguyen Van B",
};

const studentReducerState = {
  students: [],
};

const StudentReducer = (state = studentReducerState, action) => {
  console.log(action);
  switch (action.type) {
    case constants.ADD_STUDENT:
      state.students.push(action.payload);
      return {
        ...state,
      };
    case constants.REMOVE_STUDENT:
      state.students.splice(action.payload, 1);
      return {
        ...state,
      };
    case constants.UPDATE_STUDENT:
      state.students.splice(action.payload.id, 1, action.payload.student);
      return { ...state };
    default:
      return {
        ...state,
      };
  }
};

export default StudentReducer;

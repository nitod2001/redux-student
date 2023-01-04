import * as constants from "../constants";

export const addlist = (student) => {
  return {
    type: constants.ADD_STUDENT,
    payload: student,
  };
};

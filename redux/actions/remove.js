import * as constants from "../constants";

export const remove = (index) => {
  return {
    type: constants.REMOVE_STUDENT,
    payload: index,
  };
};

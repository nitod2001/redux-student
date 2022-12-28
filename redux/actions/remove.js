import * as constants from "../constants";

export const remove = (position) => {
  return {
    type: constants.REMOVE_STUDENT,
    payload: position,
  };
};

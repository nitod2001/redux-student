import * as constants from "../constants";

export const update = ({ id, student }) => {
  return {
    type: constants.UPDATE_STUDENT,
    payload: { id, student },
  };
};

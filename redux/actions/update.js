export const update = ({ id, student }) => {
  return {
    type: "UPDATE",
    payload: { id, student },
  };
};

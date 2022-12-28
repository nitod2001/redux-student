export const remove = (position) => {
  return {
    type: "REMOVE",
    payload: position,
  };
};

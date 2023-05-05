export const increment = () => ({
  type: "INCREMENT",
});

export const decrement = () => ({
  type: "DECREMENT",
});

export const reset = () => ({
  type: "RESET",
});

export const set = (value) => ({
  type: "SET",
  payload: value,
});

// unlike redux-thunk, action creators for redux-saga return plain objects
export const incrementAsync = () => ({
  type: "INCREMENT_ASYNC",
});

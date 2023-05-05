const initialState = {
  posts: [],
  loading: false,
  hasErrors: false,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return { ...state, loading: true };
    case "FETCH_POSTS_SUCCESS":
      return { posts: action.payload, loading: false, hasErrors: false };
    case "FETCH_POSTS_FAILURE":
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
};

export default postReducer;

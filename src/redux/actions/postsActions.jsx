export const fetchPosts = () => ({
  type: "FETCH_POSTS",
});

export const addPosts = (post) => ({
  type: "ADD_POSTS",
  payload: post,
});

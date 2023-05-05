import { connect } from "react-redux";
import {
  getPosts,
  getIsPostsError,
  getIsPostsLoading,
} from "../redux/selectors/postsSelectors";
import { fetchPosts, addPosts } from "../redux/actions/postsActions";
import { useEffect, useRef } from "react";

const Posts = ({ posts, loading, hasErrors, fetchPosts, addPosts }) => {
  useEffect(() => {
    fetchPosts();
  }, []);

  const inputRef = useRef(null);

  const handleAdd = () => {
    const title = inputRef.current.value;
    const body = inputRef.current.value;

    const post = {
      title,
      body,
      userId: 2,
      id: posts.length + 1,
    };

    addPosts(post);

    inputRef.current.value = "";
  };

  if (loading) return <p>Loading posts...</p>;
  if (hasErrors) return <p>Unable to display posts.</p>;
  return (
    <div>
      <h1>Posts</h1>

      <div>
        <input type="text" ref={inputRef} />
        <button onClick={handleAdd}>{loading ? "Loading..." : "Add"}</button>
      </div>
      <div>
        {[...posts].reverse().map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: getPosts(state),
  loading: getIsPostsLoading(state),
  hasErrors: getIsPostsError(state),
});

export default connect(mapStateToProps, { fetchPosts, addPosts })(Posts);

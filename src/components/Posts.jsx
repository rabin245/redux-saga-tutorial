import { connect } from "react-redux";
import {
  getPosts,
  getIsPostsError,
  getIsPostsLoading,
} from "../redux/selectors/postsSelectors";
import { fetchPosts } from "../redux/actions/postsActions";
import { useEffect } from "react";

const Posts = ({ posts, loading, hasErrors, fetchPosts }) => {
  console.log(posts);

  useEffect(() => {
    console.log("runnin useEffect");
    fetchPosts();
  }, []);

  if (loading) return <p>Loading posts...</p>;
  if (hasErrors) return <p>Unable to display posts.</p>;

  return (
    <div>
      <h1>Posts</h1>

      <div>
        {posts.map((post) => (
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

export default connect(mapStateToProps, { fetchPosts })(Posts);

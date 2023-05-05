import { all, put, call, takeEvery, takeLatest } from "redux-saga/effects";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export function* incrementAsync() {
  yield delay(1000);
  yield put({ type: "INCREMENT" });
}

export function* watchIncrmentAsync() {
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}

const getPosts = async () => {
  const response = await fetch("http://localhost:3000/posts");
  const data = await response.json();
  return data;
};

export function* fetchPosts() {
  try {
    const data = yield call(getPosts);
    yield put({ type: "FETCH_POSTS_SUCCESS", payload: data });
  } catch (error) {
    yield put({ type: "FETCH_POSTS_FAILURE" });
  }
}

export function* watchFetchPosts() {
  yield takeLatest("FETCH_POSTS", fetchPosts);
}

const createPost = async (post) => {
  const response = await fetch("http://localhost:3000/posts", {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const data = await response.json();
  return data;
};

export function* addPosts(action) {
  try {
    const data = yield call(createPost, action.payload);
    console.log(data);
    yield put({ type: "ADD_POSTS_SUCCESS", payload: data });
  } catch (error) {
    yield put({ type: "ADD_POSTS_FAILURE" });
  }
}

export function* watchAddPosts() {
  yield takeLatest("ADD_POSTS", addPosts);
}

export default function* rootSaga() {
  yield all([watchIncrmentAsync(), watchFetchPosts(), watchAddPosts()]);
}

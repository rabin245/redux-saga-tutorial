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

export default function* rootSaga() {
  yield all([watchIncrmentAsync(), watchFetchPosts()]);
}

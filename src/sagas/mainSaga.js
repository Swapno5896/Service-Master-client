import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { watchLoadproduct, watchLoadPortfolio, watchLoadBlog } from './watcher'



export default function* rootSaga() {
  yield all([watchLoadproduct(), watchLoadPortfolio(), watchLoadBlog()]);
}

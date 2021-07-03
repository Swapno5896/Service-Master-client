import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { getProduct, getPortfolio, getBlog } from "./apiCall";
import * as typeS from "../redux/actionType/actionType";
function* loadProduct() {
  const pd = yield call(getProduct);
  yield put({ type: "LOAD_PRODUCT", payload: pd });
  yield put({ type: "ISLOADING", payload: false });
}

function* loadPortfolio() {
  const pd = yield call(getPortfolio);
  yield put({ type: typeS.LOAD_PORTFOLIO, payload: pd });
  yield put({ type: "ISLOADING", payload: false });
}
function* loadBlog() {
  const blog = yield call(getBlog);
  yield put({ type: typeS.LOAD_Blog, payload: blog });
  yield put({ type: "ISLOADING", payload: false });
}

// watch functions
function* watchLoadproduct() {
  yield takeLatest("LOAD_PRODUCT_ASYNC", loadProduct);
}
function* watchLoadPortfolio() {
  yield takeLatest("LOAD_PORTFOLIO_ASYNC", loadPortfolio);
}
function* watchLoadBlog() {
  yield takeLatest("LOAD_BLOG_ASYNC", loadBlog);
}

export default function* rootSaga() {
  yield all([watchLoadproduct(), watchLoadPortfolio(), watchLoadBlog()]);
}

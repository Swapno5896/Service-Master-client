import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { getProduct, getPortfolio, getBlog } from "./apiCall";

function* loadProduct() {
  const pd = yield call(getProduct);
  yield put({ type: "LOAD_PRODUCT", payload: pd });
  yield put({ type: "ISLOADING", payload: false });
}

function* watchLoadproduct() {
  yield takeLatest("LOAD_PRODUCT_ASYNC", loadProduct);
}
function* watchLoadPortfolio() {
  yield takeLatest("LOAD_PORTFOLIO_ASYNC", getPortfolio);
}
function* watchLoadBlog() {
  yield takeLatest("LOAD_BLOG_ASYNC", getBlog);
}

export default function* rootSaga() {
  yield all([watchLoadproduct(), watchLoadPortfolio(), watchLoadBlog()]);
}

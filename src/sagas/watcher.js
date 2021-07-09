import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";

import { loadProduct, loadPortfolio, loadBlog } from './loader'

// watch functions
export function* watchLoadproduct() {
 yield takeLatest("LOAD_PRODUCT_ASYNC", loadProduct);
}
export function* watchLoadPortfolio() {
 yield takeLatest("LOAD_PORTFOLIO_ASYNC", loadPortfolio);
}
export function* watchLoadBlog() {
 yield takeLatest("LOAD_BLOG_ASYNC", loadBlog);
}
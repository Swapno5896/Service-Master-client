import * as typeS from "../redux/actionType/actionType";
import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { getProduct, getPortfolio, getBlog } from "./apiCall";


export function* loadProduct() {
 const pd = yield call(getProduct);
 yield put({ type: "LOAD_PRODUCT", payload: pd });
 yield put({ type: "ISLOADING", payload: false });
}

export function* loadPortfolio() {
 const pd = yield call(getPortfolio);
 yield put({ type: typeS.LOAD_PORTFOLIO, payload: pd });
 yield put({ type: "ISLOADING", payload: false });
}
export function* loadBlog() {
 const blog = yield call(getBlog);
 yield put({ type: typeS.LOAD_Blog, payload: blog });
 yield put({ type: "ISLOADING", payload: false });
}
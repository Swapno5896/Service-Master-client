import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";

function getProduct() {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .catch((err) => {
      throw err;
    });
}

function* loadProduct() {
  //   yield put({ type: "ISLOADING", payload: true });
  const pd = yield call(getProduct);
  yield put({ type: "LOAD_PRODUCT", payload: pd });

  //   yield put({ type: "ISLOADING", payload: false });
}

function* watchLoadproduct() {
  yield takeLatest("LOAD_PRODUCT_ASYNC", loadProduct);
}

export default function* rootSaga() {
  yield all([watchLoadproduct()]);
}

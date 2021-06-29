import { applyMiddleware, createStore } from "redux";
import Reducers from "../reducer/reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../../sagas/saga";
import logger from "redux-logger";
import { ProductReducer } from "../reducer/reducer";
const sagaMiddleWare = createSagaMiddleware();

const myStore = createStore(Reducers, applyMiddleware(sagaMiddleWare, logger));
sagaMiddleWare.run(rootSaga);
export default myStore;

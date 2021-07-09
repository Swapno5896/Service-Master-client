import { applyMiddleware, createStore } from "redux";
import Reducers from "../reducer/reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../../sagas/mainSaga";
import logger from "redux-logger";
const sagaMiddleWare = createSagaMiddleware();

const myStore = createStore(Reducers, applyMiddleware(sagaMiddleWare, logger));
sagaMiddleWare.run(rootSaga);
export default myStore;

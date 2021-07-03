import { combineReducers } from "redux";
import * as type from "../actionType/actionType";
const initState = {
  blog: [],
  portfoilo: [],
  product: [],
  cart: [],
  isLoading: true,
};

const ProductReducer = (state = initState.product, action) => {
  switch (action.type) {
    case type.LOAD_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };
    case type.ADD_TO_CART:
      return state;
    case type.REMOVE_FROM_CART:
      return state;
    default:
      return state;
  }
};

const BlogReducer = (state = initState.blog, action) => {
  switch (action.type) {
    case type.LOAD_Blog:
      return {
        ...state,
        blog: action.payload,
      };
    default:
      return state;
  }
};

const PortfolioReducer = (state = initState.portfoilo, action) => {
  switch (action.type) {
    case type.LOAD_PORTFOLIO:
      return {
        ...state,
        portfoilo: action.payload,
      };
    default:
      return state;
  }
};

const loadingReducer = (state = initState.isLoading, action) => {
  switch (action.type) {
    case type.ISLOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};
const Reducers = combineReducers({
  blog: BlogReducer,
  portfoilo: PortfolioReducer,
  product: ProductReducer,
  isLoading: loadingReducer,
});
export default Reducers;

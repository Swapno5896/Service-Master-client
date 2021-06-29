import * as type from "../actionType/actionType";

export const loadProductAsync = (products) => {
  return {
    type: "LOAD_PRODUCT_ASYNC",
    payload: products,
  };
};
export const loadProduct = (products) => {
  return {
    type: type.LOAD_PRODUCT,
    payload: products,
  };
};

export const loadBlog = (Blogs) => {
  return {
    type: type.LOAD_Blog,
    payload: Blogs,
  };
};

export const loadPortfolio = (portfolio) => {
  return {
    type: type.LOAD_PORTFOLIO,
    payload: portfolio,
  };
};

export const addToCart = (id) => {
  return {
    type: type.ADD_TO_CART,
    payload: id,
  };
};

export const removeFromCart = (id) => {
  return {
    type: type.REMOVE_FROM_CART,
    payload: id,
  };
};

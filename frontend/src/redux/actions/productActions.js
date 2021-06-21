import * as actionTypes from "../constants/productConstants";
import axios from "axios";

export const addProduct = (newItem) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.ADD_PRODUCT_REQUEST });

    const { data } = await axios.post("/api/products/add",{...newItem});

    dispatch({
      type: actionTypes.ADD_PRODUCT_SUCCESS,
      payload: data,
    });
    dispatch(getProducts())
  } catch (error) {
    dispatch({
      type: actionTypes.ADD_PRODUCT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST });

    const { data } = await axios.get("/api/products");

    dispatch({
      type: actionTypes.GET_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const filterProducts = (sortType) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST });

    const { data } = await axios.get(`/api/products/sort/${sortType}`);

    dispatch({
      type: actionTypes.GET_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const removeFromCatalog = (id) => async (dispatch) => {
  try {
    const {data} = await axios.post(`/api/products/remove/${id}`);
    dispatch({ type: actionTypes.REMOVE_PRODUCT_REQUEST, payload: data });
  } catch (error) {
    console.log(error)
  }
};

export const removeProductDetails = () => (dispatch) => {
  dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_RESET });
};

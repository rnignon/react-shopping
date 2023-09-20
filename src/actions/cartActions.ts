import { Dispatch } from "redux";
import {
  ADD_CART_ITEM,
  DELETE_CART_ITEM,
  INCREMENT_CART_ITEM,
  DECREMENT_CART_ITEM,
} from "./ActionTypes";
import { ProductItem } from "../type";

export const addCartItem: any = (item: ProductItem) => (dispatch: Dispatch) => {
  dispatch({ type: ADD_CART_ITEM, payload: item });
};

export const deleteCartItem: any =
  (productId: number) => (dispatch: Dispatch) => {
    dispatch({ type: DELETE_CART_ITEM, payload: productId });
  };

export const incrementCartItem: any =
  (productId: number) => (dispatch: Dispatch) => {
    dispatch({ type: INCREMENT_CART_ITEM, payload: productId });
  };

export const decrementCartItem: any =
  (productId: number) => (dispatch: Dispatch) => {
    dispatch({ type: DECREMENT_CART_ITEM, payload: productId });
  };

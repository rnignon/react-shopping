import axios from "../api/axios";
import { FETCH_SELECTED_ITEM } from "./ActionTypes";
import { Dispatch } from "redux";
import requests from "../api/requests";

export const fetchSelectedItem =
  (productId: number): any =>
  async (dispatch: Dispatch) => {
    const response = await axios.get(`${requests.fetchProducts}/${productId}`);
    dispatch({ type: FETCH_SELECTED_ITEM, payload: response.data });
  };

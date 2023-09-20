import {
  ADD_CART_ITEM,
  DELETE_CART_ITEM,
  INCREMENT_CART_ITEM,
  DECREMENT_CART_ITEM,
} from "../actions/ActionTypes";
import { ProductCartItem } from "../type";

const initialState: ProductCartItem[] = [];

const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_CART_ITEM:
      if (state.find((item) => item.id === action.payload.id) === undefined) {
        return [...state, { ...action.payload, quantity: 1 }];
      } else {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
    case DELETE_CART_ITEM:
      return state.filter((item) => item.id !== action.payload);
    case INCREMENT_CART_ITEM:
      return state.map((item) =>
        item.id === action.payload && item.quantity < 1000
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    case DECREMENT_CART_ITEM:
      return state.map((item) =>
        item.id === action.payload && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    default:
      return state;
  }
};

export default cartReducer;

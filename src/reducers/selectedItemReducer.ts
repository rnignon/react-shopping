import { FETCH_SELECTED_ITEM } from "../actions/ActionTypes";
import { ProductItem } from "../type";

const initialState: ProductItem = {
  id: 0,
  title: "",
  price: 0,
  description: "",
  category: "",
  image: "",
  rating: {
    rate: 0,
    count: 0,
  },
};

const selectedItemReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_SELECTED_ITEM:
      return action.payload;
    default:
      return state;
  }
};

export default selectedItemReducer;

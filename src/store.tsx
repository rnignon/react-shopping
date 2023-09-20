import { applyMiddleware, combineReducers, createStore } from "redux";
import selectedItemReducer from "./reducers/selectedItemReducer.ts";
import memberReducer from "./reducers/memberReducer.ts";
import thunk from "redux-thunk";
import cartReducer from "./reducers/cartReducer.ts";

// reducer
export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  selectedItem: selectedItemReducer,
  member: memberReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

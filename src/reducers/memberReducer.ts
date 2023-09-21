import { SET_MEMBER_LOGIN, SET_MEMBER_LOGOUT } from "../actions/ActionTypes.ts";

const initialState: string | null = null;

const selectedItemReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_MEMBER_LOGIN:
      return action.payload;
    case SET_MEMBER_LOGOUT:
      return action.payload;
    default:
      return state;
  }
};

export default selectedItemReducer;

import { Dispatch } from "redux";
import { SET_MEMBER_LOGIN, SET_MEMBER_LOGOUT } from "./ActionTypes.ts";

export const setMemberLogin: any = (id: string) => (dispatch: Dispatch) => {
  dispatch({ type: SET_MEMBER_LOGIN, payload: id });
};

export const setMemberLogout: any = () => (dispatch: Dispatch) => {
  dispatch({ type: SET_MEMBER_LOGOUT, payload: null });
};

import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoPersonCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./Nav.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setMemberLogout } from "../actions/memberActions";

export default function Nav() {
  const loggedin = useSelector((state: RootState) => state.member);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setMemberLogout());
  };

  return (
    <div className="nav">
      <Link to="/" className="nav__logo">
        SHOP
      </Link>
      <div className="nav__shortcut">
        <Link className="nav__cart" to="cart">
          <AiOutlineShoppingCart className="icon"></AiOutlineShoppingCart>
        </Link>
        <Link className="nav__mypage" to="mypage">
          <IoPersonCircleOutline className="icon"></IoPersonCircleOutline>
        </Link>
        {loggedin === null ? (
          <Link className="nav__login" to="login">
            LOGIN
          </Link>
        ) : (
          <button onClick={handleLogout} className="nav__logout">
            LOGOUT
          </button>
        )}
      </div>
    </div>
  );
}

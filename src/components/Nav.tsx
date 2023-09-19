import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoPersonCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  // 리덕스 : 샵 누르면 '모두'로 가도록
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
        <Link className="nav__login" to="login">
          LOGIN
        </Link>
        <button className="nav__logout">LOGOUT</button>
      </div>
    </div>
  );
}

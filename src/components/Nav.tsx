import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoPersonCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./Nav.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store.tsx";
import { setMemberLogout } from "../actions/memberActions.ts";
import ModalItem from "./ModalItem.tsx";

export default function Nav() {
  const loggedin = useSelector((state: RootState) => state.member);
  const cartItems = useSelector((state: RootState) => state.cart);

  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);

  const handleLogout = () => {
    dispatch(setMemberLogout());
  };

  const cartModal = (bool: boolean) => {
    setModal(bool);
  };

  return (
    <div className="nav">
      <Link to="/" className="nav__logo">
        SHOP
      </Link>
      <div className="nav__shortcut">
        <div
          className="nav__cart"
          onMouseOver={() => cartModal(true)}
          onMouseLeave={() => cartModal(false)}
        >
          <Link className="nav__cart__link" to="cart">
            <AiOutlineShoppingCart className="icon"></AiOutlineShoppingCart>
          </Link>
          <div className="nav__cart__info">
            {cartItems.length !== 0 && (
              <div className="nav__cart__alert">{cartItems.length}</div>
            )}
            {modal && (
              <div className="nav__cart__modal">
                {cartItems.map((item) => (
                  <ModalItem key={item.id} item={item}></ModalItem>
                ))}
                <Link className="nav__cart__tocart" to="/cart">
                  장바구니로 이동
                </Link>
              </div>
            )}
          </div>
        </div>
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

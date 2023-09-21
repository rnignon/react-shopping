import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store.tsx";
import CartItem from "../../components/CartItem.tsx";
import "./CartPage.css";
import { ProductCartItem } from "../../type.ts";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";

export default function CartPage() {
  const cartItems: ProductCartItem[] = useSelector(
    (state: RootState) => state.cart
  );

  return (
    <>
      {cartItems.length === 0 ? (
        <div className="cart__empty">
          <TiShoppingCart className="icon" />
          <h2>장바구니가 비었습니다.</h2>
          <p>장바구니에 상품을 넣어주세요.</p>
          <Link className="link" to="/">
            계속 쇼핑하기
          </Link>
        </div>
      ) : (
        <div className="cart__container">
          <h2>장바구니</h2>
          <div className="cart__items">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item}></CartItem>
            ))}
          </div>
          <div className="cart__button__container">
            <div className="cart__total">
              합계 : $
              {cartItems
                .reduce((sum, data) => {
                  return sum + data.price * data.quantity;
                }, 0)
                .toFixed(2)}
            </div>
            <button className="cart__pay">계산하기</button>
          </div>
        </div>
      )}
    </>
  );
}

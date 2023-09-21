import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store.tsx";
import "./Item.css";
import { ProductItem } from "../type.ts";
import { addCartItem } from "../actions/cartActions.ts";
import { useNavigate } from "react-router-dom";

export default function Item() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedItem = useSelector((state: RootState) => state.selectedItem);

  useEffect(() => {}, [selectedItem]);

  const addToCart = (item: ProductItem) => {
    dispatch(addCartItem(item));
  };

  const { title, price, description, category, image } = selectedItem;

  return (
    <div className="detail__item">
      <img className="item-image" src={image} alt={title}></img>
      <div className="item-info-container">
        <div className="item-info">
          <p className="item-category">{category}</p>
          <p className="item-title">{title}</p>
          <p className="item-price">$ {price}</p>
          <p className="item-desc">{description}</p>
        </div>
        <div className="item-buttons">
          <button
            className="item-button-cart"
            onClick={() => addToCart(selectedItem)}
          >
            장바구니에 담기
          </button>
          <button
            className="item-button-tocart"
            onClick={() => navigate("/cart")}
          >
            장바구니로 이동
          </button>
        </div>
      </div>
    </div>
  );
}

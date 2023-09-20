import React from "react";
import { ProductCartItem } from "../type";
import { BsFillTrashFill } from "react-icons/bs";
import "./CartItem.css";
import { useDispatch } from "react-redux";
import {
  decrementCartItem,
  deleteCartItem,
  incrementCartItem,
} from "../actions/cartActions";
import { Link } from "react-router-dom";

interface Props {
  item: ProductCartItem;
}

export default function CartItem({ item }: Props) {
  const { id, image, category, title, price, quantity } = item;
  const dispatch = useDispatch();

  const incrementQuantity = (id: number) => {
    dispatch(incrementCartItem(id));
  };

  const decrementQuantity = (id: number) => {
    dispatch(decrementCartItem(id));
  };

  const deleteItem = (id: number) => {
    dispatch(deleteCartItem(id));
  };

  return (
    <div className="cart__item">
      <img className="cart__item__image" src={image} alt={title} />
      <div className="cart__item__info__container">
        <div className="cart__item__info">
          <p className="cart__item__category">{category}</p>
          <Link className="cart__item__title" to={`/detail/${id}`}>
            {title}
          </Link>
          <p className="cart__item__cost">
            {price} X {quantity} = $ {(price * quantity).toFixed(2)}
          </p>
        </div>

        <div className="cart__item__quantity__container">
          <button
            className="cart__button__decrement"
            onClick={() => decrementQuantity(id)}
          >
            -
          </button>
          <p className="cart__item__quantity">{quantity}</p>
          <button
            className="cart__button__increment"
            onClick={() => incrementQuantity(id)}
          >
            +
          </button>
        </div>
      </div>
      <button className="cart__item__delete" onClick={() => deleteItem(id)}>
        <BsFillTrashFill />
      </button>
    </div>
  );
}

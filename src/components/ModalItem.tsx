import React from "react";
import { ProductCartItem } from "../type";
import { BsFillTrashFill } from "react-icons/bs";
import "./ModalItem.css";
import { useDispatch } from "react-redux";
import { deleteCartItem } from "../actions/cartActions";
import { Link } from "react-router-dom";

interface Props {
  item: ProductCartItem;
}

export default function ModalItem({ item }: Props) {
  const { id, image, category, title, price, quantity } = item;
  const dispatch = useDispatch();

  const deleteItem = (id: number) => {
    dispatch(deleteCartItem(id));
  };

  return (
    <div className="modal__item">
      <img className="modal__item__image" src={image} alt={title} />
      <div className="modal__item__info__container">
        <div className="modal__item__info">
          <p className="modal__item__category">{category}</p>
          <Link className="modal__item__title" to={`/detail/${id}`}>
            {title}
          </Link>
          <p className="modal__item__cost">
            {price} X {quantity} = $ {(price * quantity).toFixed(2)}
          </p>
        </div>
      </div>
      <button className="modal__item__delete" onClick={() => deleteItem(id)}>
        <BsFillTrashFill />
      </button>
    </div>
  );
}

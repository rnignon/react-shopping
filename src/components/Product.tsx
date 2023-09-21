import React, { useEffect, useState } from "react";
import axios from "../api/axios.tsx";
import "./Product.css";
import "./Spinner.tsx";
import Spinner from "./Spinner.tsx";
import { ProductItem } from "../type.ts";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCartItem } from "../actions/cartActions.ts";

interface Props {
  fetchUrl: string;
}

export default function Product({ fetchUrl }: Props) {
  const dispatch = useDispatch();
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        setLoading(true);
        const request = await axios.get(fetchUrl);
        setProducts(request.data);
      } catch (error) {
        console.error("상품 데이터를 불러오는 데 실패하였습니다. : ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [fetchUrl]);

  const addToCart = (item: ProductItem) => {
    dispatch(addCartItem(item));
  };

  return (
    <div className="products">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <p className="products__total">Showing : {products.length} items</p>
          <div className="product-container">
            {products.map((product: ProductItem) => {
              return (
                <div key={product.id} className="product">
                  <Link
                    className="product__info__primary"
                    to={`detail/${product.id}`}
                  >
                    {""}
                    <img
                      className="product__img"
                      src={product.image}
                      alt={`${product.title}`}
                    />
                    <p className="product__title">{product.title}</p>
                  </Link>

                  <div className="product__info__secondary">
                    <button
                      onClick={() => addToCart(product)}
                      className="product__cart"
                    >
                      장바구니에 담기
                    </button>
                    <p className="product__price">{product.price}$</p>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

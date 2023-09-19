import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import "./Product.css";
import "./Spinner.tsx";
import Spinner from "./Spinner.tsx";
import { Item } from "../type.ts";
import { Link } from "react-router-dom";

interface Props {
  fetchUrl: string;
}

export default function Product({ fetchUrl }: Props) {
  const [products, setProducts] = useState<Item[]>([]);
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

  return (
    <div className="products">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <p className="products__total">Showing : {products.length} items</p>
          <div className="product-container">
            {products.map((product: Item) => {
              return (
                <Link
                  key={product.id}
                  className="product"
                  to={`detail/${product.id}`}
                >
                  <img
                    className="product__img"
                    src={product.image}
                    alt={`${product.title}`}
                  />
                  <p className="product__title">{product.title}</p>
                  <div className="product__info">
                    <button className="product__cart">장바구니에 담기</button>
                    <p className="product__price">{product.price}$</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

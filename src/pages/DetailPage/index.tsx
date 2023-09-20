import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./DetailPage.css";
import Item from "../../components/Item.tsx";
import Spinner from "../../components/Spinner.tsx";
import { useDispatch } from "react-redux";
import { fetchSelectedItem } from "../../actions/selectedItemActions.ts";

export default function DetailPage() {
  const { productId } = useParams();

  // dispatch
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        setLoading(true);
        await dispatch(fetchSelectedItem(Number(productId)));
      } catch (error) {
        console.error("상품 데이터를 불러오는 데 실패하였습니다. : ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [productId, dispatch]);

  return (
    <div className={`detail detail__${productId}}`}>
      {loading ? <Spinner></Spinner> : <Item></Item>}
    </div>
  );
}

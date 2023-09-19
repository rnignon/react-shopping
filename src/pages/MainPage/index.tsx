import React, { useEffect, useState } from "react";
import Product from "../../components/Product";
import Category from "../../components/Category";
import requests from "../../api/requests";
import "./MainPage.css";

export default function MainPage() {
  const categories = [
    "all",
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];
  const [category, setCategory] = useState("all");
  const [categoryURL, setCategoryURL] = useState(`${requests.fetchProducts}`);

  useEffect(() => {}, [category]);

  // 카테고리 조작
  const handleCategory = (value: string) => {
    setCategory(category);
    if (value === "all") setCategoryURL(requests.fetchProducts);
    else setCategoryURL(`${requests.fetchProductsByCategory}/${value}`);
  };

  return (
    <div className="main">
      <div className="category">
        {categories.map((value) => (
          <Category
            key={value}
            name={value}
            onClick={() => handleCategory(value)}
          ></Category>
        ))}
      </div>

      <Product fetchUrl={categoryURL} />
    </div>
  );
}

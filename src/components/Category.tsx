import React from "react";
import "./Category.css";

interface Props {
  name: string;
  onClick: () => void;
}

interface CategoryName {
  [key: string]: string;
}

export default function Category({ name, onClick }: Props) {
  let categoryPerName: CategoryName = {
    all: "모두",
    electronics: "전자기기",
    jewelery: "쥬얼리",
    "men's clothing": "남성의류",
    "women's clothing": "여성의류",
  };

  return (
    <button className={`category__button category__${name}`} onClick={onClick}>
      {categoryPerName[name]}
    </button>
  );
}

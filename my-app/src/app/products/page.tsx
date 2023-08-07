import React from "react";
import Link from "next/link";
import { getProducts } from "@/service/products";

// const products = ["shirt", "pants", "skirt", "shoes"];
// const products = getProducts();

// 서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서, 화면에 나타낼 것
export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <>
      <h1>제품 소개페이지</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

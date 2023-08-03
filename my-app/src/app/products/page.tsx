import React from "react";
import Link from "next/link";

const products = ["shirt", "pants", "skirt", "shoes"];

export default function ProductPage() {
  return (
    <>
      <h1>제품 소개페이지</h1>
      <ul>
        {products.map((products, index) => (
          <li key={index}>
            <Link href={`products/${products}`}>{products}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

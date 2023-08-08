import React from "react";
import Link from "next/link";
import { getProducts } from "@/service/products";
import MeowArticle from "@/components/MeowArticle";
import clothesImage from "../../../public/images/profileImage.jpeg";
import Image from "next/image";

// export const revalidate = 3;

// 서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서, 화면에 나타낼 것
export default async function ProductsPage() {
  // throw new Error();
  const products = await getProducts();

  return (
    <>
      <h1>제품 소개페이지</h1>
      <Image src={clothesImage} alt="profile" />
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
      <MeowArticle />
    </>
  );
}

import React from "react";
import { getProduct, getProducts } from "@/service/products";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};
export default async function ProductPage({ params: { slug } }: Props) {
  const product = await getProduct(slug);
  
  if (!product) {
    notFound();
  }
  // 서버 파일에 있는 데이터 중 해당 제품의 정보를 찾아서 나타냄.
  return <h1>{product.name} 제품 설명 페이지</h1>;
}

// build 시 아래 명시해둔 pants 와 skirt의 HTML틀을 정적으로 만들어 놓는다.
// generateStaticParams 을 통해 명시적으로 만들어 놓지 않은 경우, SSR로 서버에서 만들어진 HTML에 Prop을 통해 전달된 데이터로 동적으로 만들어 지는 것.

export async function generateStaticParams() {
  // 모든 제품의 페이지들을 미리 만들어 둘 수 있게 할 것. (SSG)
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.id,
  }));
}

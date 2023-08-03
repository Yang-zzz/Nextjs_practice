import React from "react";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};
export default function PantsPage({ params }: Props) {
  if (params.slug === "nothing") {
    notFound();
  }
  return <h1>{params.slug} 제품 설명 페이지</h1>;
}

// build 시 아래 명시해둔 pants 와 skirt의 HTML틀을 정적으로 만들어 놓는다.
// generateStaticParams 을 통해 명시적으로 만들어 놓지 않은 경우, SSR로 서버에서 만들어진 HTML에 Prop을 통해 전달된 데이터로 동적으로 만들어 지는 것 
export function generateStaticParams() {
  const products = ["pants", "skirt"];
  return products.map((product) => ({
    slug: product,
  }));
}

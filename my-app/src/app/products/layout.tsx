import React from "react";
import style from "./layout.module.css";
import Link from "next/link";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className={style.nav}>
        <Link href="products/women">여성옷</Link>
        <Link href="products/man">남성옷</Link>
      </nav>
      <section className={style.product}>{children}</section>
    </>
  );
}

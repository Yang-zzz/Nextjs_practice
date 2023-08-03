import React from "react";
import style from "./layout.module.css";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className={style.nav}>
        <a href="">여성옷</a>
        <a href="">남성옷</a>
      </nav>
      <section className={style.product}>{children}</section>
    </>
  );
}

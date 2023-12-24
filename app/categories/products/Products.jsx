"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "../../../components/ProductCard/ProductCard";
import { useAPIStore } from "@/store/ApiData";
import { universalGet } from "@/app/api/Universal";
import Link from "next/link";
function Products() {
  const [content, setContent] = useState(null);
  const [rows, setRows] = useState(0);
  const { categoriesDisplayed } = useAPIStore();

  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    setContent(categoriesDisplayed);
    set_Rows(categoriesDisplayed);
  }, [categoriesDisplayed]);

  const getProducts = async () => {
    let comeBack = await universalGet("products");
    setContent(comeBack);
    set_Rows(comeBack);
  };
  const set_Rows = (verdict) => {
    // Calculate the number of rows
    const numRows = Math.min(Math.ceil(verdict?.length / 4), 3);
    setRows(numRows);
  };
  return (
    <div
      className={`p-4 grid grid-cols-4 grid-rows-${rows} gap-2 place-items-center`}
    >
      {content &&
        content?.map((el, index) => {
          return (
            <div className="my-4" key={index}>
              <Link
                href={{ pathname: "/product", query: el }}
                // target="_blank"
              >
                <ProductCard {...el} />
              </Link>
            </div>
          );
        })}
    </div>
  );
}

export default Products;

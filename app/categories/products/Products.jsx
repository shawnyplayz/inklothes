"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "../../../components/ProductCard/ProductCard";
import { useAPIStore } from "@/store/ApiData";
import { universalGet } from "@/app/api/Universal";
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
    // let API = process.env.NEXT_PUBLIC_UAT_URL;
    // try {
    //   await fetch(`${API}/products`)
    //     .then(function (response) {
    //       // The response is a Response instance.
    //       // You parse the data into a useable format using `.json()`
    //       return response.json();
    //     })
    //     .then(function (data) {
    //       // `data` is the parsed version of the JSON returned from the above endpoint.
    //
    //       setContent(data);
    //       // Calculate the number of rows
    //       const numRows = Math.min(Math.ceil(data?.length / 4), 3);
    //       setRows(numRows);
    //       return data;
    //     });
    // } catch (error) {
    //   console.log("error", error);
    // }
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
        content?.map((el) => (
          <div className="my-4">
            <ProductCard {...el} />
          </div>
        ))}
    </div>
  );
}

export default Products;

"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../navbar/page";
import Footer from "../footer/page";
import Image from "next/image";
import MidRiff from "./midRiff/MidRiff";
import Products from "./products/Products";
import Sorting from "./sorting/Sorting";
function Categories() {
  const [content, setContent] = useState(null);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    let API = process.env.NEXT_PUBLIC_UAT_URL;
    try {
      await fetch(`${API}/categoriesImg`)
        .then(function (response) {
          // The response is a Response instance.
          // You parse the data into a useable format using `.json()`
          return response.json();
        })
        .then(function (data) {
          // `data` is the parsed version of the JSON returned from the above endpoint.
          setContent(data?.message && data.message[0]);
          return data;
        });
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="w-full h-1/2 flex">
        <Image
          src={content?.secure_url}
          alt="categories"
          priority
          loading="eager"
          style={{
            maxWidth: "100%",
            height: "30rem",
            width: "100%",
          }}
          width={1920}
          height={1080}
          className="rounded Portfolio_images"
          blurDataURL={content?.secure_url}
        />
      </div>
      <div className="flex justify-center">
        <MidRiff />
      </div>

      <div class="grid grid-cols-6 gap-4">
        <div class="bg-gray-200 p-4 col-span-1">
          <Sorting />
        </div>

        <div class="bg-gray-300 p-4 col-span-5">
          <Products />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Categories;

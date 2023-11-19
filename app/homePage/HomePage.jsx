"use client";
import React, { useEffect, useState } from "react";
import Benefits from "../benefits/Benefits";
import FeaturedProducts from "../featuredProducts/FeaturedProducts";
import Categories from "../categories/Categories";
import HomeCarousel from "../homecarousel/HomeCarousel";
import Pros from "../pros/Pros";
import BestSellers from "../bestSellers/BestSellers";

function HomePage() {
  const [content, setContent] = useState(null);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    let API = process.env.NEXT_PUBLIC_UAT_URL;
    let dupliContent = [];
    try {
      await fetch(`${API}/cms`)
        .then(function (response) {
          // The response is a Response instance.
          // You parse the data into a useable format using `.json()`
          return response.json();
        })
        .then(function (data) {
          // `data` is the parsed version of the JSON returned from the above endpoint.

          setContent(data);
          return data;
        });
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div>
      <HomeCarousel content={content} />
      <Benefits />
      <FeaturedProducts content={content} />
      <Categories content={content} />
      <Pros content={content} />
      <BestSellers content={content} />
    </div>
  );
}

export default HomePage;

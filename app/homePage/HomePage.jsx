"use client";
import React, { useEffect, useState } from "react";
import Benefits from "../benefits/Benefits";
import FeaturedProducts from "../../components/featuredProducts/FeaturedProducts";
import Categories from "../../components/categories/Categories";
import HomeCarousel from "../homecarousel/HomeCarousel";
import Pros from "../pros/Pros";
import BestSellers from "../../components/bestSellers/BestSellers";

function HomePage(props) {
  // const [content, setContent] = useState(null);
  // useEffect(() => {
  //   getData();
  // }, []);
  // const getData = async () => {
  //   let API = process.env.NEXT_PUBLIC_UAT_URL;
  //   let dupliContent = [];
  //   try {
  //     await fetch(`${API}/cms`)
  //       .then(function (response) {
  //         // The response is a Response instance.
  //         // You parse the data into a useable format using `.json()`
  //         return response.json();
  //       })
  //       .then(function (data) {
  //         // `data` is the parsed version of the JSON returned from the above endpoint.

  //         setContent(data);
  //         return data;
  //       });
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };
  return (
    <div>
      <HomeCarousel content={props?.content} />
      <Benefits />
      <FeaturedProducts content={props?.content} />
      <Categories content={props?.content} />
      <Pros content={props?.content} />
      <BestSellers content={props?.content} />
    </div>
  );
}

export default HomePage;

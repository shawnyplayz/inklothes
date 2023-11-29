"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../navbar/page";
import HomeCarousel from "../homecarousel/HomeCarousel";
import FeaturedProducts from "../../components/featuredProducts/FeaturedProducts";
import Benefits from "../benefits/Benefits";
import Categories from "../../components/categories/Categories";
import HomePage from "../homePage/HomePage";
import Footer from "../footer/page";
import { useAPIStore } from "../../store/ApiData";
function Main() {
  const [content, setContent] = useState(null);
  const { categoriesNav, addCategoriesNav } = useAPIStore();
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    let API = process.env.NEXT_PUBLIC_UAT_URL;
    try {
      await fetch(`${API}/cms`)
        .then(function (response) {
          // The response is a Response instance.
          // You parse the data into a useable format using `.json()`
          return response.json();
        })
        .then(function (data) {
          // `data` is the parsed version of the JSON returned from the above endpoint.

          addCategoriesNav(data?.navbarCategories);
          setContent(data);
          return data;
        });
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div className="">
      <Navbar content={content} />
      <HomePage content={content} />
      <Footer />
    </div>
  );
}

export default Main;

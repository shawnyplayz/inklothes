import React from "react";
import Navbar from "../navbar/page";
import HomeCarousel from "../homecarousel/HomeCarousel";
import FeaturedProducts from "../featuredProducts/FeaturedProducts";
import Benefits from "../benefits/Benefits";
import Categories from "../categories/Categories";
import HomePage from "../homePage/HomePage";

function Main() {
  return (
    <div className="">
      <Navbar />
      <HomePage />
    </div>
  );
}

export default Main;

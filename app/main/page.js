import React from "react";
import Navbar from "../navbar/page";
import HomeCarousel from "../homecarousel/HomeCarousel";
import FeaturedProducts from "../featuredProducts/FeaturedProducts";
import Benefits from "../benefits/Benefits";
import Categories from "../categories/Categories";
import HomePage from "../homePage/HomePage";
import Footer from "../footer/page";

function Main() {
  return (
    <div className="">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default Main;

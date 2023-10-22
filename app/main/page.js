import React from "react";
import Navbar from "../navbar/page";
import HomeCarousel from "../homecarousel/HomeCarousel";
import FeaturedProducts from "../featuredProducts/FeaturedProducts";
import Benefits from "../benefits/Benefits";

function Main() {
  return (
    <div className="">
      <Navbar />
      <HomeCarousel />
      <Benefits />
      <FeaturedProducts />
    </div>
  );
}

export default Main;

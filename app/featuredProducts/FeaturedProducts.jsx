"use client";
import React, { useEffect, useState } from "react";
import Slider from "../homecarousel/Sliders";
import axios from "axios";
import Carousel from "react-multi-carousel";
import Image from "next/image";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
function FeaturedProducts() {
  const [content, setContent] = useState([]);
  useEffect(() => {
    let API = process.env.NEXT_PUBLIC_UAT_URL;
    let dupliContent = [];
    axios
      .get(`${API}/cms`)
      .then((response) => {
        const setData = response?.data?.carousel;
        setData.map((el) => {
          dupliContent.push(el);
        });
        setContent([...dupliContent]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="flex justify-center items-center flex-col gap-4 my-8">
      <div className="font-extrabold text-2xl">Featured Products</div>
      {/* <Carousel responsive={responsive}>
        {content?.map((el) => {
          debugger;
          return (
            <div className="h-96 w-full">
              <Image src={el} alt="trade" layout="fill" />
            </div>
          );
        })}
      </Carousel> */}
    </div>
  );
}

export default FeaturedProducts;

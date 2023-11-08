"use client";
import "react-multi-carousel/lib/styles.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import Image from "next/image";
import "./featuredProducts.css";
import Card from "@/components/Card/Card";
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
        const setData = response?.data?.featuredProducts;
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
    <>
      {content.length != 0 ? (
        <div className="flex justify-center items-center flex-col gap-4 my-8">
          <div className="font-extrabold text-2xl">Featured Products</div>
          <Carousel
            responsive={responsive}
            autoPlay={false}
            swipeable={true}
            draggable={true}
            infinite={true}
            partialVisible={false}
            ssr
            containerClass="carousel-container"
            itemClass="carousel-item"
            centerMode={true}
          >
            {content?.map((el, index) => {
              return (
                <div className="slider">
                  <Card {...el} />
                </div>
              );
            })}
          </Carousel>
        </div>
      ) : (
        <div />
      )}
    </>
  );
}

export default FeaturedProducts;

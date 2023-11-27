"use client";
import "react-multi-carousel/lib/styles.css";
import Card from "@/components/Card/Card";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "../../components/featuredProducts/featuredProducts.css";
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
function BestSellers(props) {
  const [content, setContent] = useState(props?.content);
  useEffect(() => {
    setContent(props.content);
  }, [props?.content]);
  return (
    <>
      {content?.bestSellers?.length != 0 ? (
        <div className="flex justify-center items-center flex-col gap-4 my-8">
          <div className="font-bold text-3xl">Best Sellers</div>
          <div className="flex w-full">
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
              {content?.bestSellers ? (
                content.bestSellers.map((el, index) => {
                  return (
                    <div className="slider">
                      <Card {...el} />
                    </div>
                  );
                })
              ) : (
                <></>
              )}
            </Carousel>
          </div>
        </div>
      ) : (
        <div />
      )}
    </>
  );
}

export default BestSellers;

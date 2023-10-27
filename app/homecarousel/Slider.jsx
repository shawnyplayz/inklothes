"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
function Slider(props) {
  const [content, setContent] = useState([]);
  useEffect(() => {
    if (props.content.length != 0) {
      debugger;
      let asd = [...props?.content];
      setContent(asd);
    }
  }, [props.content]);

  return (
    <Carousel responsive={responsive}>
      {content?.map((el) => {
        return (
          <div className="h-96 w-full">
            <Image src={el} alt="trade" layout="fill" />
          </div>
        );
      })}
    </Carousel>
  );
  {
    /* <Carousel
        infiniteLoop
        autoPlay
        showArrows={false}
        showThumbs={false}
        swipeable={false}
        transitionTime={500}
        interval={3000}
        className="tat_slider"
      >
        {content?.map((el, index) => {
          debugger;
          return (
            <div className="w-full carousel_height" key={index}>
              <Image
                src={el}
                alt="tats"
                className="rounded-sm"
                loading="eager"
                priority={true}
                layout="fill"
                objectFit="fill"
              />
            </div>
          );
        })}
      </Carousel> */
  }
}
export default Slider;

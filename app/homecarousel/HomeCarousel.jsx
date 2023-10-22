"use client";
import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import CarouselButtons from "./CarouselButtons";
import "./carousel.css";
import Image from "next/image";

class HomeCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [
        {
          img: "/carousel_1.jpg",
          // title: "Shaping a Future Powered by Innovation",
          // desc: "A dynamic hub of innovation, fusing cutting-edge technology and creative prowess to craft solutions that redefine industries and elevate user experiences",
        },
        {
          img: "/carousel_1.jpg",
          // title: "Where Creativity Meets Code",
          // desc: "We blend creativity with cutting-edge code to craft software, games, and experiences that captivate users and transform industries",
        },
        {
          img: "/carousel_1.jpg",
          // title: " Elevate Your Software Experience",
          // desc: "Our commitment to user-centered design and robust development ensures that your software not only works flawlessly but also delights users every step of the way",
        },
      ],
    };
  }
  render() {
    return (
      <>
        {/* <img
          src="url('../../public/carousel_1.jpg')"
          alt="tats"
          width={100}
          height={100}
        /> */}

        <Carousel
          autoPlay
          infiniteLoop
          showArrows={false}
          showThumbs={false}
          swipeable={false}
          transitionTime={500}
          interval={5000}
          className="tat_slider"
        >
          {this.state.content?.map((el, index) => {
            return (
              <div key={index} className="w-full carousel_height">
                {/* <img src={el.img} alt="tats" width={100} height={100} /> */}
                <Image
                  src={el.img}
                  alt="tats"
                  className="rounded-sm"
                  loading="eager"
                  priority={true}
                  layout="fill"
                  // objectFit="fill"
                  // width={50}
                  // height={50}
                />
                {/* <div className="bg-services-gradient w-full text-white flex z-10">
                <div className="content w-full flex flex-col mt-0 md:mt-40">
                  <h1
                    className="font-semibold text-6xl font-sans my-4 md:my-16"
                    data-aos="fade-up-right"
                  >
                    {el.title}
                  </h1>
                  <div className="flex w-full justify-center">
                    <div className="flex justify-center w-full md:w-1/2 flex-row items-center">
                      <h5
                        className="text-3xl font-normal font-sans my-4 leading-relaxed overflow-hidden"
                        data-aos="fade-left"
                      >
                        <p>{el.desc}</p>
                      </h5>
                    </div>
                  </div>
                  <CarouselButtons />
                </div>
              </div> */}
              </div>
            );
          })}
        </Carousel>
      </>
    );
  }
}

export default HomeCarousel;

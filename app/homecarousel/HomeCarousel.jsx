"use client";
import React, { Component } from "react";
import "./carousel.css";
import Image from "next/image";
import axios from "axios";
import Slider from "./Sliders";
import Sliders from "./Sliders";

class HomeCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [
        // {
        //   img: "/carousel_1.jpg",
        //   // title: "Shaping a Future Powered by Innovation",
        //   // desc: "A dynamic hub of innovation, fusing cutting-edge technology and creative prowess to craft solutions that redefine industries and elevate user experiences",
        // },
        // {
        //   img: "/carousel_1.jpg",
        //   // title: "Where Creativity Meets Code",
        //   // desc: "We blend creativity with cutting-edge code to craft software, games, and experiences that captivate users and transform industries",
        // },
        // {
        //   img: "/carousel_1.jpg",
        //   // title: " Elevate Your Software Experience",
        //   // desc: "Our commitment to user-centered design and robust development ensures that your software not only works flawlessly but also delights users every step of the way",
        // },
      ],
    };
  }
  componentDidMount = () => {
    let API = process.env.NEXT_PUBLIC_UAT_URL;
    let dupliContent = [];
    axios
      .get(`${API}/cms`)
      .then((response) => {
        const setData = response?.data?.carousel;
        setData.map((el) => {
          dupliContent.push(el);
        });
        this.setState({
          content: [...dupliContent],
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  render() {
    return (
      <>
        {/* <img
          src="url('../../public/carousel_1.jpg')"
          alt="tats"
          width={100}
          height={100}
        /> */}

        {/* <Carousel
          infiniteLoop
          autoPlay
          showArrows={false}
          showThumbs={false}
          swipeable={false}
          transitionTime={500}
          interval={3000}
          className="tat_slider"
        >
          {this.state.content?.map((el, index) => {
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
        </Carousel> */}
        <Sliders content={this.state.content} />
      </>
    );
  }
}

export default HomeCarousel;

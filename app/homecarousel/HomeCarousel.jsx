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
      content: [],
    };
  }
  componentDidUpdate = (prevProps, prevState) => {
    if (this.props != prevProps) {
      console.log("this.props.content", this.props.content);
    }
    // let API = process.env.NEXT_PUBLIC_UAT_URL;
    // let dupliContent = [];
    // axios
    //   .get(`${API}/cms`)
    //   .then((response) => {
    //     const setData = response?.data?.carousel;
    //     setData.map((el) => {
    //       dupliContent.push(el);
    //     });
    //     this.setState({
    //       content: [...dupliContent],
    //     });
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching data:", error);
    //   });
  };
  render() {
    return (
      <>
        <Sliders content={this.props?.content?.carousel} />
      </>
    );
  }
}

export default HomeCarousel;

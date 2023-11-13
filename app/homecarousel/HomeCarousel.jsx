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

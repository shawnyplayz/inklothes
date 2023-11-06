"use client";
import Image from "next/image";
// import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./carousel.css";

class Sliders extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: [],
    };
  }
  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps != this.props) {
      let asd = [];
      this.props.content?.map((el) => {
        asd.push({
          original: el?.url,
          thumbnail: el?.url,
        });
      });
      this.setState({
        content: [...asd],
      });
    }
  };
  render() {
    return (
      <div className="flex">
        {this.state.content.length != 0 ? (
          <ImageGallery
            items={this.state.content}
            autoPlay
            showFullscreenButton={false}
            showPlayButton={false}
            showThumbnails={false}
            showBullets={true}
            showNav={false}
            additionalClass="image"
          />
        ) : (
          <></>
        )}
      </div>
     
    );
  }
}
export default Sliders;


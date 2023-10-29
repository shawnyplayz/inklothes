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
          original: el,
          thumbnail: el,
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
      // <Carousel
      //   infiniteLoop
      //   autoPlay
      //   showArrows={false}
      //   showThumbs={false}
      //   swipeable={false}
      //   transitionTime={500}
      //   interval={3000}
      //   className="tat_slider"
      // >
      //   {this.props.content?.map((el, index) => {
      //     debugger;
      //     return (
      //       <div className="flex h-45rem">
      //         <Image
      //           src={el}
      //           alt="tats"
      //           className="rounded-sm"
      //           loading="eager"
      //           priority={true}
      //           // height={100}
      //           // width={100}
      //           layout="fill"
      //         />
      //       </div>
      //     );
      //   })}
      // </Carousel>
    );
  }
}
export default Sliders;
// function Sliders(props) {
//   const [content, setContent] = ([]);

//   useEffect(() => {
//     if (props.content.length != 0) {
//       debugger;
//       let asd = [...props?.content];
//       setContent(asd);
//     }
//   }, [props.content]);

//   return (
//     <div className="flex">
//       <Carousel
//         infiniteLoop
//         autoPlay
//         showArrows={false}
//         showThumbs={false}
//         swipeable={false}
//         transitionTime={500}
//         interval={3000}
//         className="tat_slider"
//       >
//         <div className="flex w-full h-45rem">
//           {content?.map((el, index) => {
//             debugger;
//             return (
//               <Image
//                 src={el}
//                 alt="tats"
//                 className="rounded-sm"
//                 loading="eager"
//                 priority={true}
//                 // height={100}
//                 // width={100}
//                 layout="fill"
//                 objectFit="cover"
//               />
//             );
//           })}
//         </div>
//       </Carousel>
//     </div>
//   );
// }
// export default Sliders;

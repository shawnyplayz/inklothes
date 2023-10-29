"use client";
import Image from "next/image";
// import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React, { Component } from "react";
import ReactDOM from "react-dom";

class Sliders extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Carousel
        infiniteLoop
        autoPlay
        showArrows={false}
        showThumbs={false}
        swipeable={false}
        transitionTime={500}
        interval={3000}
        className="tat_slider"
      >
        {this.props.content?.map((el, index) => {
          debugger;
          return (
            <div className="flex h-45rem">
              <Image
                src={el}
                alt="tats"
                className="rounded-sm"
                loading="eager"
                priority={true}
                // height={100}
                // width={100}
                layout="fill"
              />
            </div>
          );
        })}
      </Carousel>
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

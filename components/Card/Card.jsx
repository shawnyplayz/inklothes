import Image from "next/image";
import React from "react";
import "./Card.css";
function Card(props) {
  return (
    <div className="flex flex-col rounded shadow-lg max-w-xs h-full ">
      {/* <img className="w-full" src={props.img} alt="Sunset in the mountains"/> */}
      <div className="p-4 flex justify-center h-3/5">
        <Image
          src={props?.productImages[0]?.secure_url}
          alt="featured Tattoo Sleeves"
          width={100}
          height={100}
          // fill
          className="innerCards relative h-48 w-96 "
        />
      </div>

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props?.title}</div>
        <p className="text-gray-700 text-base">{props?.description}</p>
      </div>
    </div>
  );
}

export default Card;

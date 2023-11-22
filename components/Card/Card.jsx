import Image from "next/image";
import React from "react";
import "./Card.css";
function Card(props) {
  console.log("props", props);
  return (
    <div className="flex flex-col rounded shadow-lg max-w-xs h-full ">
      <div className="flex justify-center h-72">
        <Image
          src={props?.productImages[0]?.secure_url}
          alt="featured Tattoo Sleeves"
          width={100}
          height={100}
          className="innerCards relative h-auto w-full object-contain"
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

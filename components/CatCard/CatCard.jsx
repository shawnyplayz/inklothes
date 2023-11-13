import Image from "next/image";
import React from "react";

function CatCard(props) {
  return (
    <div className="flex flex-col  max-w-xs h-full ">
      {/* <div className="p-4 flex justify-center h-3/5"> */}
      <Image
        src={props?.categories?.url}
        alt="Categoried Tattoo Sleeves"
        width={100}
        height={200}
        objectFit="contain"
        className="innerCards relative h-96 w-96 rounded"
      />
      {/* </div> */}
      <div className="px-6 py-4 flex justify-center">
        <div className="font-bold text-xl mb-2">
          {props?.categories?.clothingType}
        </div>
      </div>
    </div>
  );
}

export default CatCard;

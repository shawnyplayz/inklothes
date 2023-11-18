import CatCard from "@/components/CatCard/CatCard";
import ProsCard from "@/components/ProsCard/ProsCard";
import React from "react";

function Pros(props) {
  return (
    <div className="flex justify-center items-center flex-col gap-4 my-8">
      <div className="font-bold text-3xl">Pros of the Product</div>
      <p className="font-medium my-2 text-2xl">A Few Pros of the product</p>
      <div className="flex px-48 w-full justify-center gap-12">
        <ProsCard {...props} />
        {/* {props.content?.prosPics?.map((el) => (
          <ProsCard {...el} />
        ))} */}
      </div>
    </div>
  );
}

export default Pros;

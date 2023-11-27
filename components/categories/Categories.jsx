import CatCard from "@/components/CatCard/CatCard";
import React from "react";

function Categories(props) {
  return (
    <div className="flex justify-center items-center flex-col gap-4 my-8">
      <div className="font-bold text-3xl">Categories</div>
      <p className="font-medium my-2 text-2xl">
        Select from a range of body parts adorned with tattoos.{" "}
      </p>
      <div className="flex px-48 w-full justify-center gap-12">
        {props.content?.categories?.map((el) => (
          <CatCard {...el} />
        ))}
      </div>
    </div>
  );
}

export default Categories;

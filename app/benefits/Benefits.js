import React from "react";
import colorPalette from "../../icons/Colour_Palette.svg";
import skinFriendly from "../../icons/Skin_friendly.svg";
import materials from "../../icons/High_qual.svg";
import fadeResistance from "../../icons/Fade_resist.svg";
import Image from "next/image";
function Benefits() {
  const benfitsArray = [
    {
      icon: colorPalette,
      text: "Skin Colour",
    },
    {
      icon: skinFriendly,
      text: "Eco/Skin friendly",
    },
    {
      icon: materials,
      text: "Polyester Blend Material",
    },
    {
      icon: fadeResistance,
      text: "Long Lasting Tattoo",
    },
  ];
  return (
    <div className="flex flex-row justify-evenly w-full">
      {benfitsArray?.map((el) => {
        
        return (
          <div className="flex flex-row my-8 items-center gap-5">
            <Image src={el.icon} />
            <div className="text">{el.text}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Benefits;

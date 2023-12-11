import { getUnisex, universalGet } from "@/app/api/Universal";
import { useAPIStore } from "@/store/ApiData";
import Search from "antd/es/input/Search";
import Link from "next/link";
import React, { useState } from "react";

function MidRiff() {
  const { setCategories } = useAPIStore();
  const [highlighter, setHighlighter] = useState("All");
  const callGender = async (gender) => {
    let getResult;
    if (gender) {
      getResult = await getUnisex(gender);
    } else {
      getResult = await universalGet("products");
    }

    setCategories(getResult);
  };
  return (
    <div>
      <div
        id="midriff"
        className="flex flex-row justify-between w-full pl-80 pr-40"
      >
        <div className="flex flex-row justify-evenly gap-11">
          <Link
            href="#midriff"
            className={
              highlighter === "All"
                ? "hover:cursor-pointer hover:text-black focus:text-black text-2xl font-bold"
                : "hover:cursor-pointer hover:text-black focus:text-black text-2xl font-normal"
            }
            onClick={() => {
              setHighlighter("All");
              callGender();
            }}
          >
            All
          </Link>
          <Link
            href="#midriff"
            className={
              highlighter === "Unisex"
                ? "hover:cursor-pointer hover:text-black focus:text-black text-2xl font-bold"
                : "hover:cursor-pointer hover:text-black focus:text-black text-2xl font-normal"
            }
            onClick={() => {
              setHighlighter("Unisex");
              callGender("Unisex");
            }}
          >
            Unisex
          </Link>
          <Link
            href="#midriff"
            className={
              highlighter === "Women"
                ? "hover:cursor-pointer hover:text-black focus:text-black text-2xl font-bold"
                : "hover:cursor-pointer hover:text-black focus:text-black text-2xl font-normal"
            }
            onClick={() => {
              setHighlighter("Women");
              callGender("Women");
            }}
          >
            Women
          </Link>
        </div>

        <Search
          placeholder="Search your favourite Tattoo"
          // onSearch={onSearch}
          style={{
            width: 300,
          }}
        />
      </div>
    </div>
  );
}

export default MidRiff;

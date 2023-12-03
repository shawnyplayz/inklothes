import Search from "antd/es/input/Search";
import React from "react";

function MidRiff() {
  return (
    <div>
      <div className="flex flex-row justify-between w-full pl-80 pr-40">
        <div className="flex flex-row justify-evenly gap-11">
          <p className="hover:cursor-pointer hover:text-black focus:text-black text-2xl font-bold">
            All
          </p>
          <p className="hover:cursor-pointer hover:text-black focus:text-black text-2xl font-normal">
            Unisex
          </p>
          <p className="hover:cursor-pointer hover:text-black focus:text-black text-2xl font-normal">
            Women
          </p>
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

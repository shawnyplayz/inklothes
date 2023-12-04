import React, { useState } from "react";
import { Checkbox, Divider, Select } from "antd";
import { Slider, Switch } from "antd";

const CheckboxGroup = Checkbox.Group;

function Sorting() {
  const [checkedList, setCheckedList] = useState(null);
  const plainOptions = [
    "Relevance",
    "Most Bought",
    "Low to high",
    "High to Low",
  ];
  const onChange = (list) => {
    setCheckedList(list);
  };
  return (
    <div className="rounded-sm bg-white">
      <div className="p-8">
        <div className="sorting">
          <h2 className="text-black font-bold text-2xl my-2">Sort By</h2>
          <div className="checkboxes flex flex-col">
            <CheckboxGroup
              options={plainOptions}
              value={checkedList}
              onChange={onChange}
              style={{ flexDirection: "column" }}
              className="!text-2xl"
            />
          </div>
        </div>
        <div className="Price">
          <h2 className="text-black font-bold text-2xl mt-2">Price</h2>
          <Divider className="my-2" />
          <Slider defaultValue={30} range={true} disabled={false} />
        </div>
        <div className="Theme">
          <h2 className="text-black font-bold text-2xl mt-2">Theme</h2>
          <Divider className="my-2" />
          <Select size="large" style={{ width: "100%" }} />
          <CheckboxGroup
            options={plainOptions}
            value={checkedList}
            onChange={onChange}
            style={{ flexDirection: "column" }}
          />
        </div>
        <div className="Size">
          <h2 className="text-black font-bold text-2xl mt-2">Size</h2>
          <Divider className="my-2" />
          <div className="flex flex-row gap-3">
            <button className="sizeButton">S</button>
            <button className="sizeButton">M</button>
            <button className="sizeButton">L</button>
            <button className="sizeButton">XL</button>
          </div>
        </div>
        <div className="Products">
          <h2 className="text-black font-bold text-2xl mt-2">Products</h2>
          <Divider className="my-2" />
          <CheckboxGroup
            options={plainOptions}
            value={checkedList}
            onChange={onChange}
            style={{ flexDirection: "column" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Sorting;

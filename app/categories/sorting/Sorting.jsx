import React, { useState } from "react";
import { Checkbox, Divider } from "antd";
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
      <div className="p-4">
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
      </div>
    </div>
  );
}

export default Sorting;

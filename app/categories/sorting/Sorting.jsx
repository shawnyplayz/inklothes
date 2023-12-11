import React, { useEffect, useState } from "react";
import { Checkbox, Col, Divider, InputNumber, Row, Select } from "antd";
import { Slider, Switch } from "antd";
import "./Sorting.css";
const CheckboxGroup = Checkbox.Group;

function Sorting() {
  const [checkedList, setCheckedList] = useState(null);
  const [isFixed, setIsFixed] = useState(false);
  const [content, setContent] = useState(null);
  const [sortOptions, setSortOptions] = useState(null);
  const [theme, setTheme] = useState([]);
  const [size, setSize] = useState([]);
  const [clothingType, setClothingType] = useState([]);
  const [price, setPrice] = useState(0);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    let API = process.env.NEXT_PUBLIC_UAT_URL;
    try {
      await fetch(`${API}/catalogue`)
        .then(function (response) {
          // The response is a Response instance.
          // You parse the data into a useable format using `.json()`
          return response.json();
        })
        .then(function (data) {
          // `data` is the parsed version of the JSON returned from the above endpoint.

          setContent(data);
          return data;
        });
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    let products = [];
    let theme = [];
    content?.clothingType?.map((el) => {
      products.push(el?.clothingType);
    });
    content?.genre?.map((el) => {
      theme.push(el?.genre);
    });
    setClothingType([...products]);
    setTheme([...theme]);
  }, [content]);

  const plainOptions = [
    "Relevance",
    "Most Bought",
    "Low to high (Price)",
    "High to Low (Price)",
  ];
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Adjust the value below based on when you want the switch to occur
      const triggerScroll = 700;

      if (scrollY > triggerScroll && !isFixed) {
        setIsFixed(true);
      } else if (scrollY <= triggerScroll && isFixed) {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Cleanup the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isFixed]);

  const onChange = (list) => {
    setCheckedList(list);
  };
  return (
    <div
      // className={`rounded-sm bg-white  your-component ${
      //   isFixed ? "fixedSS" : ""
      // }`}
      className="rounded-sm bg-white"
    >
      <div className={`p-8`}>
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
          <Slider
            min={0}
            max={2000}
            dots
            step={500}
            onChange={(e) => setPrice(e)}
            value={typeof price === "number" ? price : 0}
            tooltip
          />
          {/* <Row>
            <Col span={12}>
              <Slider
                min={0}
                max={2000}
                dots
                step={500}
                onChange={(e) => setPrice(e)}
                value={typeof price === "number" ? price : 0}
              />
            </Col>
            <Col span={4}>
              <InputNumber
                min={1}
                max={2000}
                style={{
                  margin: "0 16px",
                }}
                value={price}
                onChange={(e) => setPrice(e)}
              />
            </Col>
          </Row> */}
        </div>
        <div className="Products">
          <h2 className="text-black font-bold text-2xl mt-2">Products</h2>
          <Divider className="my-2" />
          <CheckboxGroup
            options={clothingType}
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
        <div className="Theme">
          <h2 className="text-black font-bold text-2xl mt-2">Theme</h2>
          <Divider className="my-2" />
          <Select size="large" style={{ width: "100%" }} />
          <CheckboxGroup
            options={theme}
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

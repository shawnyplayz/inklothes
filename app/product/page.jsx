"use client";
import React, { useEffect } from "react";

function Products(props) {
  useEffect(() => {
    console.log("props", props);
  }, []);

  return <div>This is the product page</div>;
}

export default Products;

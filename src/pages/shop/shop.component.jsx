import React, { useState } from "react";
import SHOP_DATA from "./shop.data";

const ShopPage = () => {
  const [collection, setCollection] = useState(SHOP_DATA);
  return <div>shop page</div>;
};

export default ShopPage;

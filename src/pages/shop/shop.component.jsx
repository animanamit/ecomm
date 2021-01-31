import React, { useState } from "react";
import SHOP_DATA from "./shop.data";
import Collection from "../../components/collection/collection.component";

const ShopPage = () => {
  const [collection] = useState(SHOP_DATA);
  return (
    <div className="shop-page">
      {collection.map(({ id, ...otherCollectionProps }) => {
        return <Collection key={id} {...otherCollectionProps} />;
      })}
    </div>
  );
};

export default ShopPage;

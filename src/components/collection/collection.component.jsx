import React from "react";

const Collection = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="collection-title">{title}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(item => {
            return <div key={item.id}>{item.name}</div>;
          })}
      </div>
    </div>
  );
};

export default Collection;

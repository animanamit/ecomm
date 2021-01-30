import React, { useState } from "react";
import MenuItem from "../menu-item/menu-item.component";
const Directory = () => {
  const [sections, setSections] = useState([
    { title: "Hats", id: 1, linkUrl: "hats" },
    { title: "Jackets", id: 2, linkUrl: "jackets" },
    { title: "Mens", id: 3, linkUrl: "" },
    { title: "Womens", id: 4, linkUrl: "" }
  ]);
  return (
    <div className="directory-menu">
      {/* {sections.map(({ title, id, linkUrl }) => {
        return <MenuItem key={id} title={title} linkUrl={linkUrl} />;
      })} */}
      {sections.map(({ id, ...otherSectionProps }) => {
        return <MenuItem key={id} {...otherSectionProps} />;
      })}
    </div>
  );
};

export default Directory;

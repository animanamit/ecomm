import React from "react";
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, history, linkUrl, match }) => {
  return (
    <div
      className="menu-item"
      onClick={() => {
        history.push(`${match.url}${linkUrl}`);
      }}
    >
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">shop now</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);

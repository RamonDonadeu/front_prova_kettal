import React from "react";
import "./CochesList.css";

const CochesList = () => {
  return (
    <div className="cochesList">
      <div className="cochesList--container">
        <input className="searcher--input" type="text" placeholder="Find..." />
        <div className="cochesList--list"></div>
      </div>
    </div>
  );
};

export default CochesList;

import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Checkbox.css";

const Checkbox = (props) => {
  const [checked, setChecked] = useState(props.default);

  return (
    <div
      className="checkbox"
      onClick={() => {
        props.coche.disponible = !props.coche.disponible;
        axios.put("/api/coches/" + props.coche.id, props.coche);
        setChecked(props.coche.disponible);
      }}
    >
      {checked ? (
        <div className="selected">
          <img
            src={require("../../assets/svg/check_selected.svg").default}
            alt=""
          />
        </div>
      ) : (
        <div className="unselected">
          <img
            src={require("../../assets/svg/check_empty.svg").default}
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export default Checkbox;

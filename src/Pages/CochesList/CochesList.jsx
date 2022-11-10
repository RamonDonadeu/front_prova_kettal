import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Checkbox from "../../Components/Checkbox/Checkbox";
import EditCoche from "../EditCoche/EditCoche";
import "./CochesList.css";

const CochesList = () => {
  const [cochesList, setCochesList] = useState([]);
  const [find, setFind] = useState("");
  const [filter, setFilter] = useState("");

  function containsFind(coche) {
    const marca = coche.marca.toLowerCase();
    const modelo = coche.modelo.toLowerCase();
    if (marca.includes(find) || modelo.includes(find) || find === "") {
      return coche;
    }
  }

  function getCoches() {
    axios.get("api/coches").then((res) => {
      let coches = res.data.data;
      let list = [];
      coches = coches.filter(containsFind);
      coches.forEach((coche) => {
        const disponible = coche.disponible;
        list.push(
          <tr className="cochesList__item" key={coche.id}>
            <td>
              {coche.marca} {coche.modelo}
            </td>
            <td>{coche.cantidad}</td>
            <td>{coche.precio} €</td>
            <td className="checkbox__td">
              <Checkbox default={disponible} coche={coche}></Checkbox>
            </td>
            <td className="item__edit">
              <Link to={"/edit/" + coche.id}>
                {" "}
                <img
                  src={require("../../assets/svg/edit.svg").default}
                  alt=""
                />
              </Link>
            </td>
          </tr>
        );
      });
      setCochesList(list);
    });
  }

  useEffect(() => {
    getCoches();
  }, [find]);

  return (
    <div className="cochesList">
      <div className="cochesList__container">
        <input
          className="searcher__input"
          type="text"
          placeholder="Find..."
          onChange={(e) => {
            setFind(e.target.value.toLowerCase());
          }}
        />
        <div className="cochesList__list">
          <table>
            <thead>
              <tr>
                <th className="cochesList__header">Marca</th>
                <th className="cochesList__header">Cantidad</th>
                <th className="cochesList__header">Precio</th>
                <th
                  className="cochesList__header"
                  style={{ textAlign: "center", paddingLeft: 0 }}
                >
                  Disponible
                </th>
                <th
                  className="cochesList__header"
                  style={{ textAlign: "center", paddingLeft: 0 }}
                >
                  Acción
                </th>
              </tr>
            </thead>
            <tbody>{cochesList}</tbody>
          </table>
        </div>
        <Link to={"/create"} className="cochesList__create">
          <div className="create__text">Crear nuevo coche</div>
          <img
            className="create__icon"
            src={require("../../assets/svg/create.svg").default}
          ></img>
        </Link>
      </div>
    </div>
  );
};

export default CochesList;

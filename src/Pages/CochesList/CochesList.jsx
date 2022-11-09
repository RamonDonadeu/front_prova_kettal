import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EditCoche from "../EditCoche/EditCoche";
import "./CochesList.css";

const CochesList = () => {
  const [cochesList, setCochesList] = useState([]);
  const [find, setFind] = useState("");

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
        list.push(
          <tr className="cochesList--item" key={coche.id}>
            <td>
              {coche.marca} {coche.modelo}
            </td>
            <td>{coche.cantidad}</td>
            <td>{coche.precio} €</td>
            <td>{coche.disponible === true ? "Si" : "No"}</td>
            <td className="item--edit">
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
      <div className="cochesList--container">
        <input
          className="searcher--input"
          type="text"
          placeholder="Find..."
          onChange={(e) => {
            setFind(e.target.value.toLowerCase());
          }}
        />
        <div className="cochesList--list">
          <table>
            <thead>
              <tr>
                <th className="cochesList--header">Marca</th>
                <th className="cochesList--header">Cantidad</th>
                <th className="cochesList--header">Precio</th>
                <th className="cochesList--header">Disponible</th>
                <th
                  className="cochesList--header"
                  style={{ textAlign: "center", paddingLeft: 0 }}
                >
                  Acción
                </th>
              </tr>
            </thead>
            <tbody>{cochesList}</tbody>
          </table>
        </div>
        <div className="cochesList--create">Crear nuevo coche</div>
      </div>
    </div>
  );
};

export default CochesList;

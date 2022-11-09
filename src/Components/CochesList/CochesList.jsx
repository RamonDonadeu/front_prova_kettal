import axios from "axios";
import React, { useEffect, useState } from "react";
import "./CochesList.css";

const CochesList = () => {
  const [cochesList, setCochesList] = useState([]);
  const [find, setFind] = useState("");

  function containsFind(coche) {
    console.log(coche, find);
    if (
      coche.marca.includes(find) ||
      coche.modelo.includes(find) ||
      find === ""
    ) {
      return coche;
    }
  }

  useEffect(() => {
    axios.get("api/coches").then((res) => {
      let coches = res.data.data;
      let list = [];
      coches = coches.filter(containsFind);
      console.log(coches);
      coches.forEach((coche) => {
        list.push(
          <tr className="cochesList--item" key={coche.id}>
            <td>
              {coche.marca} {coche.modelo}
            </td>
            <td>{coche.cantidad}</td>
            <td>{coche.precio} €</td>
            <td>{coche.disponible === true ? "Si" : "No"}</td>
            <td>Accion</td>
          </tr>
        );
      });
      setCochesList(list);
    });
  }, [find]);

  return (
    <div className="cochesList">
      <div className="cochesList--container">
        <input
          className="searcher--input"
          type="text"
          placeholder="Find..."
          onChange={(e) => {
            setFind(e.target.value);
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
                <th className="cochesList--header">Accion</th>
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

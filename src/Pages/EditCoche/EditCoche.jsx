import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EditCoche = (props) => {
  const [coche, setCoche] = useState({});
  const params = useParams();
  useEffect(() => {
    axios.get("/api/coches/" + params.id).then((res) => {
      setCoche(res.data.data[0]);
    });
  }, []);
  return (
    <div className="editCoche">
      <div className="editCoche--header">
        <Link className="editCoche--back" to="/">
          Back
        </Link>
        <div className="editCoche--title">
          Editando {coche.marca} {coche.modelo}
        </div>
      </div>
      <form action="">
        <div className="formItem">
          <label>Marca:</label>
          <input
            value={coche.marca}
            onChange={(e) => {
              coche.marca = e.target.value;
              setCoche(coche);
              console.log(coche);
            }}
          ></input>
        </div>{" "}
        <div className="formItem">
          <label>Modelo:</label>
          <input
            value={coche.modelo}
            onChange={(e) => {
              coche.marca = e.target.value;
              setCoche(coche);
            }}
          ></input>
        </div>{" "}
        <div className="formItem">
          <label>Color:</label>
          <input
            onChange={(e) => {
              coche.marca = e.target.value;
              setCoche(coche);
            }}
          ></input>
        </div>{" "}
        <div className="formItem">
          <label>Disponible:</label>
          <input
            type="Checkbox"
            value={coche.disponible}
            onChange={(e) => {
              coche.marca = e.target.value;
              setCoche(coche);
            }}
          ></input>
        </div>{" "}
        <div className="formItem">
          <label>Cantidad:</label>
          <input
            value={coche.cantidad}
            type="number"
            max="10000"
            min="0"
            onChange={(e) => {
              coche.marca = e.target.value;
              setCoche(coche);
            }}
          ></input>
        </div>{" "}
        <div className="formItem">
          <label>Precio:</label>
          <input
            value={coche.precio}
            type="number"
            max="100000"
            min="0"
            onChange={(e) => {
              coche.marca = e.target.value;
              setCoche(coche);
            }}
          ></input>
        </div>{" "}
        <div className="formItem">
          <label>Fecha de creacion:</label>
          <input
            value={coche.fechacreacion.split("T")[0]}
            type="date"
            id="datemin"
            name="datemin"
            min="2000-01-01"
            onChange={(e) => {
              coche.marca = e.target.value;
              setCoche(coche);
            }}
          ></input>
        </div>
        <input type="submit" value={"Confirmar"} />
      </form>
    </div>
  );
};

export default EditCoche;

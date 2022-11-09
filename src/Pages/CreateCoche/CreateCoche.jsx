import React from "react";
import { Link } from "react-router-dom";
import "./CreateCoche.css";

const CreateCoche = () => {
  const coche = {};
  return (
    <div className="createCoche">
      <div className="createCoche--header">
        <Link className="createCoche--back" to="/">
          Atras
        </Link>
      </div>
      <form action="">
        <div className="createCoche--title">Crear coche</div>
        <div className="formItem">
          <label>Marca:</label>
          <input
            required={true}
            onChange={(e) => {
              coche.marca = e.target.value;
            }}
          ></input>
        </div>{" "}
        <div className="formItem">
          <label>Modelo:</label>
          <input
            required={true}
            onChange={(e) => {
              coche.modelo = e.target.value;
            }}
          ></input>
        </div>{" "}
        <div className="formItem">
          <label>Color:</label>
          <select
            onChange={(e) => {
              coche.color = e.target.value;
            }}
          >
            <option value="Rojo">Rojo</option>
            <option value="Negro">Negro</option>
            <option value="Blanco">Blanco</option>
            <option value="Azul">Azul</option>
          </select>
        </div>{" "}
        <div className="formItem formCheckbox">
          <label>Disponible:</label>
          <input
            required={true}
            type="Checkbox"
            onChange={(e) => {
              coche.disponible = e.target.value;
            }}
          ></input>
        </div>{" "}
        <div className="formItem">
          <label>Cantidad:</label>
          <input
            required={true}
            type="number"
            max="10000"
            min="0"
            onChange={(e) => {
              coche.cantidad = e.target.value;
            }}
          ></input>
        </div>{" "}
        <div className="formItem">
          <label>Precio:</label>
          <input
            required={true}
            type="number"
            max="100000"
            min="0"
            onChange={(e) => {
              coche.precio = e.target.value;
            }}
          ></input>
        </div>{" "}
        <div className="formItem">
          <label>Fecha de creacion:</label>
          <input
            required={true}
            type="date"
            id="datemin"
            name="datemin"
            min="2000-01-01"
            onChange={(e) => {
              coche.fechacreacion = e.target.value;
            }}
          ></input>
        </div>
        <input type="submit" value={"Crear"} />
      </form>
    </div>
  );
};

export default CreateCoche;

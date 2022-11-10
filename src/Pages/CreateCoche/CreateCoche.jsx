import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./CreateCoche.css";
import showMessage from "../../Helper/Message/showMessage";

const CreateCoche = () => {
  const coche = { disponible: false, color: "Rojo" };
  const navigate = useNavigate();

  const validateSubmit = async (event) => {
    event.preventDefault();
    try {
      axios
        .post("/api/coches", coche)
        .then((res) => {
          navigate("/");
          showMessage("Coche creado con exito");
        })
        .catch((error) => {
          console.log(error);
          showMessage(error.response.data.data.error);
        });
    } catch (error) {}
  };

  return (
    <div className="createCoche">
      <div className="createCoche__header">
        <Link className="createCoche__back" to="/">
          <img
            src={require("../../assets/svg/back.svg").default}
            alt=""
            className="back__icon"
          />
        </Link>
      </div>
      <form action="" onSubmit={validateSubmit}>
        <div className="createCoche__title">Crear coche</div>
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
            value="-1"
            onChange={(e) => {
              console.log("Ei");
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
            type="Checkbox"
            onChange={(e) => {
              coche.disponible = e.target.checked;
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
              coche.fechaCreacion = e.target.value + "T00:00.000Z";
              console.log(e.target.value);
            }}
          ></input>
        </div>
        <input type="submit" value={"Crear"} />
      </form>
    </div>
  );
};

export default CreateCoche;

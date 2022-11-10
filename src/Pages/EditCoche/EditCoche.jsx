import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./EditCoche.css";
import showMessage from "../../Helper/Message/showMessage";

const EditCoche = (props) => {
  const [coche, setCoche] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  const validateSubmit = async (event) => {
    event.preventDefault();
    try {
      axios
        .put("/api/coches/" + params.id, coche)
        .then((res) => {
          navigate("/");
          showMessage("Coche editado con exito");
        })
        .catch((error) => {
          showMessage(error.response.data.data.error);
        });
    } catch (error) {
      console.log("Ei");
    }
  };

  useEffect(() => {
    axios.get("/api/coches/" + params.id).then((res) => {
      setCoche(res.data.data[0]);
    });
  }, []);

  return (
    <div className="editCoche">
      <div className="editCoche__header">
        <Link className="editCoche__back" to="/">
          <img
            src={require("../../assets/svg/back.svg").default}
            alt=""
            className="back__icon"
          />
          <div className="back__text">Atras</div>
        </Link>
      </div>
      <form action="" onSubmit={validateSubmit}>
        <div className="editCoche__title">
          Editando {coche.marca} {coche.modelo}
        </div>
        <div className="formItem">
          <label>Marca:</label>
          <input
            required={true}
            defaultValue={coche.marca === undefined ? "" : coche.marca}
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
            required={true}
            defaultValue={coche.modelo === undefined ? "" : coche.modelo}
            onChange={(e) => {
              coche.modelo = e.target.value;
              setCoche(coche);
            }}
          ></input>
        </div>{" "}
        <div className="formItem">
          <label>Color:</label>
          <select
            onChange={(e) => {
              coche.color = e.target.value;
              setCoche(coche);
            }}
          >
            <option value="Rojo" selected={coche.color === "Rojo"}>
              Rojo
            </option>
            <option value="Negro" selected={coche.color === "Negro"}>
              Negro
            </option>
            <option value="Blanco" selected={coche.color === "Blanco"}>
              Blanco
            </option>
            <option value="Azul" selected={coche.color === "Azul"}>
              Azul
            </option>
          </select>
        </div>{" "}
        <div className="formItem formCheckbox">
          <label>Disponible:</label>
          <input
            required={true}
            type="Checkbox"
            checked={coche.disponible === true ? true : false}
            onChange={(e) => {
              coche.disponible = e.target.value;
              setCoche(coche);
            }}
          ></input>
        </div>{" "}
        <div className="formItem">
          <label>Cantidad:</label>
          <input
            required={true}
            defaultValue={coche.cantidad === undefined ? "" : coche.cantidad}
            type="number"
            max="10000"
            min="0"
            onChange={(e) => {
              coche.cantidad = e.target.value;
              setCoche(coche);
            }}
          ></input>
        </div>{" "}
        <div className="formItem">
          <label>Precio:</label>
          <input
            required={true}
            defaultValue={coche.precio === undefined ? "" : coche.precio}
            type="number"
            max="100000"
            min="0"
            onChange={(e) => {
              coche.precio = e.target.value;
              setCoche(coche);
            }}
          ></input>
        </div>{" "}
        <div className="formItem">
          <label>Fecha de creacion:</label>
          <input
            required={true}
            defaultValue={
              coche.fechacreacion ? coche.fechacreacion.split("T")[0] : ""
            }
            type="date"
            id="datemin"
            name="datemin"
            min="2000-01-01"
            onChange={(e) => {
              coche.fechacreacion = e.target.value;
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

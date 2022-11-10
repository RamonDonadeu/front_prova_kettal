import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./EditCoche.css";
import showMessage from "../../Helper/Message/showMessage";
import Checkbox from "../../Components/Checkbox/Checkbox";

const EditCoche = (props) => {
  const [coche, setCoche] = useState({});
  const [checked, setChecked] = useState();
  const [showModal, setShowModal] = useState(false);
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
    } catch (error) {}
  };

  useEffect(() => {
    axios.get("/api/coches/" + params.id).then((res) => {
      setCoche(res.data.data[0]);
      console.log(res.data.data[0].disponible);
      setChecked(res.data.data[0].disponible);
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
        </Link>
        <div className="editCoche__delete">
          <div
            className="delete__button"
            onClick={() => {
              setShowModal(true);
            }}
          >
            <img
              src={require("../../assets/svg/delete.svg").default}
              alt=""
              className="delete__icon"
            />
          </div>
          {showModal ? (
            <div className="delete__popup">
              <div className="disableBackground"></div>
              <div className="popup__content">
                <div className="popup__header">
                  <img
                    src={require("../../assets/svg/close.svg").default}
                    alt=""
                    className="delete__icon"
                    onClick={() => {
                      setShowModal(false);
                    }}
                  />
                </div>
                <div className="popup__text">
                  ¿Seguro que quieres elminar este coche?
                </div>
                <div className="popup__buttons">
                  <button
                    className="cancelar"
                    onClick={() => {
                      setShowModal(false);
                    }}
                  >
                    Cancelar
                  </button>
                  <button
                    className="confirmar"
                    onClick={() => {
                      axios
                        .delete("api/coches/" + params.id)
                        .then((res) => {
                          navigate("/");
                          showMessage("Coche eliminado con exito");
                        })
                        .catch((error) => {
                          showMessage(error.response.data.data.error);
                        });
                    }}
                  >
                    Confirmar
                  </button>
                </div>
              </div>
            </div>
          ) : null}
        </div>
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
          <div
            className="checkbox"
            onClick={() => {
              setChecked(!checked);
              coche.disponible = !checked;
              setCoche(coche);
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

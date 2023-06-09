import React from "react"
import "./carteles.css"
function Carteles(props) {
  return (
    <div className={`paneles`}>
      <div className="contenedor-imagen">
        <label htmlFor={`btn-modal-${props.numeroModal}`}>
          <img src={`./img/${props.imagen}.jpg`} alt="cantante" className="imagen-de-cantante" /></label>
      </div>
      <div><h2 className="h2">¿Quién es {props.cantante}?</h2></div>
      <div>
        <p className="p">{props.descripcion}</p>
      </div>
    </div>
  );
}

export default Carteles;
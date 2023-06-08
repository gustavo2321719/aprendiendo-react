import React from "react"
import "./carteles.css"
function Carteles(props) {
  return (
    <div className="paneles">
      <div className="contenedor-imagen">
        <img src={`./img/${props.imagen}.jpg`} alt="cantante" className="imagen-de-cantante" />
      </div>

      <div><h2>¿Quién es {props.cantante}?</h2></div>
      <div>
        <p>{props.descripcion}</p>
      </div>
    </div>
  );
}

export default Carteles;
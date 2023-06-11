import React from "react"
import "./header.css"
function Header() {

    const var1 = document.querySelector(".toggle_btn i");
    const var2 = document.querySelector(".dropdown_menu");
    function onClickBoton() {
        var2.classList.toggle("open");
        const isOpe = var2.classList.contains("open");

        var1.classList = isOpe
            ? "fa-solid fa-xmark"
            : "fa-solid fa-bars"
    };
    return (
        <header>
            <div className={"navbar"}>
                <div className={"logo"}><a href="#">titulo</a></div>
                <ul className={"link"}>
                    <li><a href="inicio">inicio</a></li>
                    <li><a href="redes sociales">redes sociales</a></li>
                    <li><a href="ayuda">ayuda</a></li>
                </ul>
                <a href="#" className={"action_btn"}>comprar</a>
                <div className={"toggle_btn"} onClick={onClickBoton}>
                    <i className={"fa-solid fa-bars"}></i>
                </div>
            </div>
            <div className={"dropdown_menu"}>
                <li><a href="inicio">inicio</a></li>
                <li><a href="redes sociales">redes sociales</a></li>
                <li><a href="ayuda">ayuda</a></li>
                <li><a href="#" className={"action_btn"}>comprar</a></li>
            </div>
        </header>

    );
}

export default Header;
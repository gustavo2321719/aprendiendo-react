import React from "react"
import "./header.css"
function Header() {

    const toggleBtn = document.querySelector(".toggle_btn");
    const toggleBtnIcon = document.querySelector(".toggle_btn i");
    const dropDownMenu = document.querySelector(".dropdown_menu");
    function onClickBoton() {
        dropDownMenu.classList.toggle("open");
        const isOpen = dropDownMenu.classList.contains("open");

        toggleBtnIcon.classList = isOpen
            ? "fa-solid fa-xmark"
            : "fa-solid fa-bars"
    }
    return (
        <header>
            <div className="navbar">
                <div className="logo"><a href="#">titulo</a></div>
                <ul className="link">
                    <li><a href="inicio">inicio</a></li>
                    <li><a href="redes sociales">redes sociales</a></li>
                    <li><a href="ayuda">ayuda</a></li>
                </ul>
                <a href="#" className="action_btn">comprar</a>
                <div className="toggle_btn" onClick={onClickBoton}>
                    <i className="fa-solid fa-bars"></i>
                </div>
            </div>
            <div className="dropdown_menu">
                <li><a href="inicio">inicio</a></li>
                <li><a href="redes sociales">redes sociales</a></li>
                <li><a href="ayuda">ayuda</a></li>
                <li><a href="#" className="action_btn">comprar</a></li>
            </div>
        </header>

    );
}

export default Header;
import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget'

function NavBar() {
    return (
        <nav class="navbar navbar-dark navbar-expand-lg">
            <div class="container-fluid">
                <a class="logo" href="index.html">
                    <h1>Code Solutions</h1>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-list">
                        <li>
                            <CartWidget />
                        </li>
                        <li>
                            <a href="./pages/service.html">Productos</a>
                        </li>
                        <li>
                            <a href="./pages/abouts-us.html">Sobre nosotros</a>
                        </li>
                        <li>
                            <a href="./#contacto">Contacto</a>
                        </li>
                        <li>
                            <a href="./pages/enter.html">Ingresar</a>
                        </li>
                    
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default NavBar
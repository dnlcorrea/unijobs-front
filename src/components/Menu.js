import React from 'react';
import './Menu.css'

function Menu() {
    return(
        <div className="Menu" >
            <ul >
                <li>Categorias</li>
                <li>Comece a vender</li>
            </ul>
            <button type="button" id="btn-menu">Faça login</button>
        </div>
    );
}

export default Menu;
import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import { Link } from "react-router-dom";

export default props =>
<aside className="grid-in-menu bg-[#9d9a9a] ">
    {/* Refatorar (criar um componente para os itens do menu) */}
    <nav className="flex justify-around items-start lg:flex-col">
        <MenuItem 
            href='/'
            icon='home'
            title='Inicio'
        />


        <MenuItem 
            href='/Users'
            icon='users'
            title='Usuários'
        />


    </nav>
</aside>
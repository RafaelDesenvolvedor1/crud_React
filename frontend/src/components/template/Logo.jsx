import React from "react";
import logo from '../../assets/img/logo.png'
import { Link } from "react-router-dom";


export default props=>
<aside className="grid-in-logo flex justify-center items-center bg-[#9d9a9a] border-b-2 border-gray-500">
    <Link to="/">
        <img src={logo} alt="logo" className="w-80 md:w-full px-4" />
    </Link>
    
</aside>
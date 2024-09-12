import React from "react";
import { Link } from "react-router-dom";


export default props=>{
    return(
        <Link to={props.href} className="inline mt-2 w-full text-center lg:text-start no-underline p-4  font-light hover:bg-gradient-to-r from-cyan-500 to-blue-500 ">
            <i className={`fa fa-${props.icon}`}></i> {props.title}
        </Link>
    )
}
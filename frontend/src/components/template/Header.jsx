import React from "react";

export default props=>
<header className="grid-in-header hidden  md:flex flex-col bg-white px-4 overflow-hidden whitespace-nowrap shadow-lg shadow-black-500/50">
    <h1 className="mt-3 text-3xl">
        <i className={`fa fa-${props.icon}`}></i> {props.title}
    </h1>
    <p className="text-xl font-light text-[#6c757d]">{props.subtitle}</p>
</header>
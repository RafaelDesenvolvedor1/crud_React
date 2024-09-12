import React from "react";

export default props=>{
    return(
        <div className="mb-3.5">
            <label>{props.label}</label>
            <input
            className="block w-full h-8 py-1 px-3 text-sm text-[#555] bg-[#fff] border-2  border-[#ccc] rounded"
                type="text"
                name={props.name}
                value={props.value}
                onChange={props.event}
                placeholder={props.placeholder}
            />
        </div>
    )
}
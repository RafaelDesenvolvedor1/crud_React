import React from "react";
import Header from "./Header";

export default props=>
<React.Fragment>
    <Header {...props}/>
    <main className="grid-in-content container px-4">
        <div className="p-3 mt-3 bg-white shadow-lg">
            {props.children}
        </div>
    </main>
</React.Fragment>
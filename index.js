// Hellow world in JS

// const heading = document.createElement("h1");
// const root = document.getElementById("root");
// heading.innerHTML = "Hello Duniya";
// root.appendChild(heading);


// That's how traditional react is written without using JSX

// const heading = React.createElement("h1", {}, "Hello React World");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


//one more complicated structure without JSX

{/* <div id="parent">
    <div id="child-1">
        <h1>Hello from child-1</h1>
    </div>
    <div id="child-2">
        <h1>Hello from child-2</h1>
    </div>
</div> */}

import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child-1", key: 'child-1' },
        React.createElement("h1", {}, "Hello from child-1")),
    React.createElement("div", { id: "child-2", key: 'child-2' },
        React.createElement("h1", {}, "Hello from child-2"))


])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
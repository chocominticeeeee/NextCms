// app/components/ServerComponent.js
import React from "react";
import Unti from "./Unti";

async function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ title: "fetched Title!", description: "fetched descriptiona" });
        }, 1500);
    });
}

async function ServerComponent() {
    const data = await fetchData();

    return (
        <div id="untiman">
            <h1>{data.title}</h1>
            <p>{data.description}aaa</p>
            <Unti></Unti>
        </div>
    );
}

export default ServerComponent;

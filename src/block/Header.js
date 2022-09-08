import React from "react";

export default function Header(props){
    return(
        <>
            <h1>Todo App</h1>
            <button onClick={() => props.setModalActive(true)}>+</button>
        </>
    )
}
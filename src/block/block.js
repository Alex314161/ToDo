import React from "react";
import styles from "./block.module.css"
import Taskitem from "./items/item";

function Block (props){
    let taskElement = props.item.map(elem => <Taskitem message={elem} arr={props.item} func={props.func}/>);

    return(
        <div className={styles.block}>
            <h2>{props.name}</h2>
            {taskElement}
        </div>
    )
}

export default Block;
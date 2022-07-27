import React from "react";
import styles from "./block.module.css"

function Block (props){
    return(
        <div className={styles.block}>
            <h2>{props.name}</h2>
            {props.task}
        </div>
    )
}

export default Block;
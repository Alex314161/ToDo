import React from "react";
import styles from "./block.module.css"

function Complete (props){
    return(
        <div className={styles.block}>
            <h2>{props.name}</h2>
            {props.completeElement}
        </div>
    )
}
export default Complete;
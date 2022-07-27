import React from "react";
import styles from "./item.module.css"

function Taskitem(props){
    return(
        <div className={styles.item}>
            <p>{props.message}</p>
        </div>
    )
}
export default Taskitem;
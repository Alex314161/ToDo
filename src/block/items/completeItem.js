import React from "react";
import styles from "./item.module.css"

function Taskitem(props){
    let completeElement = props.map(elem => <CompleteItem message={elem}/>);

    return(
        <div className={styles.item}>
            <p>{completeElement}</p>
        </div>
    )
}
export default Taskitem;
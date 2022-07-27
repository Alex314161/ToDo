import React from "react";
import styles from "./block.module.css"
import CompleteItem from "./items/completeItem";

function Complete (props){
    let completeElement = props.completeItem.map(elem => <CompleteItem message={elem}/>);

    return(
        <div className={styles.block}>
            <h2>{props.name}</h2>
            {completeElement}
        </div>
    )
}
export default Complete;
import React from "react";
import styles from "./item.module.css"

function Taskitem(props){
    let deleteTask = () => {
        props.func(props.item.filter(item => item != props.message));
    }

    let completeTask = () => {
        let index = props.item.indexOf(props.message)
        props.funcAdd([...props.completeItem, props.item[index]])
        deleteTask()
    }

    return(
        <div className={styles.item}>
            <p>{props.message}</p>
            <div className={styles.btn}>
                <button onClick={deleteTask}><img src="https://w7.pngwing.com/pngs/178/524/png-transparent-computer-icons-black-and-white-trash-icon-white-text-rectangle.png" alt="delete"/></button>
                <button onClick={completeTask}><img src="https://e7.pngegg.com/pngimages/261/559/png-clipart-checkbox-check-mark-computer-icons-others-angle-text.png" alt="complete"/></button>
            </div>
        </div>
    )
}
export default Taskitem;
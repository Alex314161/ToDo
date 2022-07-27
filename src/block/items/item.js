import React from "react";
import styles from "./item.module.css"

function Taskitem(props){
    let deleteTask = () => {
        let arr = Array.from(props.arr);
        let index = arr.indexOf(props.message);
        arr.splice(index,1)
        props.delete(arr);
    }

    let completeTask = () => {
        let arr = Array.from(props.arr);
        let index = arr.indexOf(props.message);
        let copyComplete = props.completeTask;
        copyComplete.push(arr[index]);
        arr.splice(index,1);
        props.delete(arr);
        props.complete(copyComplete)
    }

    return(
        <div className={styles.item}>
            <p>{props.message}</p>
            <div className={styles.btn}>
                <button onClick={deleteTask}><img src="https://w7.pngwing.com/pngs/178/524/png-transparent-computer-icons-black-and-white-trash-icon-white-text-rectangle.png"/></button>
                <button onClick={completeTask}><img src="https://e7.pngegg.com/pngimages/261/559/png-clipart-checkbox-check-mark-computer-icons-others-angle-text.png" /></button>
            </div>
        </div>
    )
}
export default Taskitem;
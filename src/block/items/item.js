import React from "react";
import styles from "./item.module.css"

function Taskitem(props){
    /*let deleteTask = () => {
        let index = props.arr.indexOf(props.message)
        props.func([...props.arr, props.arr[index]])
    }*/

    return(
        <div className={styles.item}>
            <p>{props.message}</p>
            <div className={styles.btn}>
                <button><img src="https://w7.pngwing.com/pngs/178/524/png-transparent-computer-icons-black-and-white-trash-icon-white-text-rectangle.png" alt="delete"/></button>
                <button><img src="https://e7.pngegg.com/pngimages/261/559/png-clipart-checkbox-check-mark-computer-icons-others-angle-text.png" alt="complete"/></button>
            </div>
        </div>
    )
}
export default Taskitem;
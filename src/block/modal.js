import React from "react";
import styles from './modal.module.css'

export default function Modal(props){
    return(
        <div className={props.active ? styles.active : styles.modal} onClick={() => props.setActive(false)}>
            <div className={styles.block} onClick={e => e.stopPropagation()}>
                <input type="text" placeholder="Введите новую задачу" onChange={e => {

                }}/>
            </div>
        </div>
    )
}
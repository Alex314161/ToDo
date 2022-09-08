import React from "react";
import styles from './modal.module.css'

export default function Modal(props){
    const onEnterPress = (e) => {
        if (e.key === 'Enter'){
            let copy = [...props.boards]
            copy[0].items.push({id: props.id, title: e.target.value});
            props.setBoards(e => {
                if (e.id === copy.id){
                    return copy
                }
                return e
            })
            props.setId(props.id + 1)
            e.target.value = null;
        }
    }

    return(
        <div className={props.active ? `${styles.modal} ${styles.active}` : styles.modal} onClick={() => props.setModalActive(false)}>
            <div className={styles.modal__content} onClick={event => event.stopPropagation()}>
                <textarea type="text" placeholder="Введите новую задачу" onKeyDown={onEnterPress}/>
            </div>
        </div>
    )
}
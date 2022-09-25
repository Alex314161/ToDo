import React from "react";
import styles from './modal.module.css'
import {useDispatch} from "react-redux";

export default function Modal(props){
    const dispatch = useDispatch()
    const addTask = (task) => {
        dispatch({type:'ADD_TASK', payload: `${task}`, id: `${props.currentBoard}`})
    }

    const onEnterPress = (e) => {
        if (e.key === 'Enter'){
            addTask(e.target.value)
            props.setModalActive(false)
            e.target.value = ''
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
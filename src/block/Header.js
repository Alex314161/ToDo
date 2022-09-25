import React from "react";
import {useDispatch} from "react-redux";

export default function Header(props){
    const dispatch = useDispatch()
    const addBoards = (board) => {
        if (board != null){
            dispatch({type:'ADD_BOARD', payload: {id: props.boardId, title:`${board}`, items:[]}})
            props.setBoardId(props.boardId + 1)
        }
    }

    return(
        <>
            <h1>Todo App</h1>
            <button onClick={() => addBoards(prompt("Введите название таблицы"))}>Добавить таблицу</button>
        </>
    )
}
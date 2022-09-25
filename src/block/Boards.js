import React from "react";
import {useSelector} from "react-redux";


export default function Boards(props){
    let boards = useSelector(state => state.boards)
    return(
        <>
            {boards.map(board =>
                <div className="board"
                     onDrop={(e)=> props.EmptyBoard(e, board)}
                     onDragOver={(e) => props.onDragOverHandler(e, board)}
                >
                    <div className="board__title">
                        {board.title}
                    </div>
                    {board.items.map(item =>
                        <div className="item"
                             onDragLeave={(e) => props.onDragleaveHandler(e)}
                             onDragStart={(e) => props.onDragStartHandler(e, board, item)}
                             onDragEnd={(e) => props.onDragEndHandler(e)}
                             onDragOver={(e) => props.onDragOverHandler(e)}
                             onDrop={(e)=> props.onDropHandler(e, board, item)}
                             draggable={true}
                        >{item}</div>
                    )}
                    <button onClick={() => {
                        props.setModalActive(true)
                        props.setCurrentBoard(board.id)
                    }}>Добавить задачу</button>
                </div>
            )}
        </>
    )
}
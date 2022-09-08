import React from "react";

export default function Boards(props){
    return(
        <>
            {props.boards.map(board =>
                <div className="board"
                     onDrop={(e)=> props.EmptyBoard(e, board)}
                     onDragOver={(e) => props.onDragOverHandler(e)}
                >
                    <div className="board__title">{board.title}</div>
                    {board.items.map(item =>
                        <div className="item"
                             onDragLeave={(e) => props.onDragleaveHandler(e)}
                             onDragStart={(e) => props.onDragStartHandler(e, board, item)}
                             onDragEnd={(e) => props.onDragEndHandler(e)}
                             onDragOver={(e) => props.onDragOverHandler(e)}
                             onDrop={(e)=> props.onDropHandler(e, board, item)}
                             draggable={true}
                        >{item.title}</div>
                    )}
                </div>
            )}
        </>
    )
}
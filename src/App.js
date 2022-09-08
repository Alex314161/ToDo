import './App.css';
import {useState} from "react";
import React from "react";
import Modal from "./block/modal";

function App() {
    const [modalActive, setModalActive] = useState(false);
    const [task, setTask] = useState('');
    const [boards, setBoards] = useState([
        {id: 1, title: "ToDo", items: [{id: 1, title: '1'}, {id: 2, title: '2'}]},
        {id: 2, title: "Research", items: [{id: 3, title: '3'}, {id: 4, title: '4'}]},
        {id: 3, title: "Testing", items: [{id: 5, title: '5'}, {id: 6, title: '6'}]},
        {id: 4, title: "Completed", items: [{id: 7, title: '7'}, {id: 8, title: '8'}]}
    ])

    const [currentBoard, setCurrentBoard] = useState(null);
    const [currentItem, setCurrentItem] = useState(null);

    const onDragOverHandler = (event) => {
        event.preventDefault();
        if (event.target.className === 'item') {
            event.target.style.boxShadow = '0 4px 3px gray'
        }
    }
    const onDragStartHandler = (event, board, item) => {
        setCurrentBoard(board);
        setCurrentItem(item);
    }

    const onDragleaveHandler = (event) => {
        event.target.style.boxShadow = 'none'
    }

    const onDragEndHandler = (event) => {
        event.target.style.boxShadow = 'none'
    }

    const onDropHandler = (event, board, item) => {
        const currentIndex = currentBoard.items.indexOf(currentItem);
        currentBoard.items.splice(currentIndex,1);
        const dropIndex = board.items.indexOf(item);
        board.items.splice(dropIndex + 1,0, currentItem);
        setBoards(boards.map(b => {
            if (b.id === board.id){
                return board
            }
            if (b.id === currentBoard.id){
                return currentBoard
            }
            return b
        }))
        event.target.style.boxShadow = 'none'
    }

    const EmptyBoard = (event, board) => {
        board.items.push(currentItem);
        const currentIndex = currentBoard.items.indexOf(currentItem);
        currentBoard.items.splice(currentIndex,1);
        setBoards(boards.map(b => {
            if (b.id === board.id){
                return board
            }
            if (b.id === currentBoard.id){
                return currentBoard
            }
            return b
        }))
        event.target.style.boxShadow = 'none'
    }

    return (
        <div className="App">
            <header className="taskArea">
                <h1>Todo App</h1>
                <button onClick={ () => setModalActive(true)}>+</button>
            </header>

            <main className="content">
                <Modal active={modalActive}/>
                {boards.map(board =>
                <div className="board"
                     onDrop={(e)=> EmptyBoard(e, board)}
                     onDragOver={(e) => onDragOverHandler(e)}
                >
                    <div className="board__title">{board.title}</div>
                    {board.items.map(item =>
                        <div
                            className="item"
                            onDragLeave={(e) => onDragleaveHandler(e)}
                            onDragStart={(e) => onDragStartHandler(e, board, item)}
                            onDragEnd={(e) => onDragEndHandler(e)}
                            onDragOver={(e) => onDragOverHandler(e)}
                            onDrop={(e)=> onDropHandler(e, board, item)}
                            draggable={true}
                        >{item.title}</div>
                    )}
                </div>
                )}
            </main>
        </div>
    );
}

export default App;

import './App.css';
import {useState} from "react";
import React from "react";
import Modal from "./block/modal";
import Boards from "./block/Boards";
import Header from "./block/Header";

function App() {
    const [modalActive, setModalActive] = useState(false);
    const [id, setId] = useState(0)
    const [currentBoard, setCurrentBoard] = useState(null);
    const [currentItem, setCurrentItem] = useState(null);
    const [boards, setBoards] = useState([
        {id: 1, title: "ToDo", items: []},
        {id: 2, title: "Research", items: []},
        {id: 3, title: "Testing", items: []},
        {id: 4, title: "Completed", items: []}
    ])


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
                <Header setModalActive={setModalActive}/>
            </header>

            <main className="content">
                <Modal active={modalActive}
                       setModalActive={setModalActive}
                       boards={boards}
                       setBoards={setBoards}
                       id={id}
                       setId={setId}
                />
                <Boards boards={boards}
                        EmptyBoard={EmptyBoard}
                        onDragOverHandler={onDragOverHandler}
                        onDragleaveHandler={onDragleaveHandler}
                        onDragStartHandler={onDragStartHandler}
                        onDragEndHandler={onDragEndHandler}
                        onDropHandler={onDropHandler}
                />
            </main>
        </div>
    );
}

export default App;

import './App.css';
import { useState} from "react";
import React from "react";
import Modal from "./block/modal";
import Boards from "./block/Boards";
import Header from "./block/Header";
import {useDispatch, useSelector} from "react-redux";


function App() {
    const [modalActive, setModalActive] = useState(false);
    const [currentBoard, setCurrentBoard] = useState(null);
    const [currentItem, setCurrentItem] = useState(null);
    const [boardId, setBoardId] = useState(5)

    const dispatch = useDispatch()
    let store = useSelector(state => state)

    const onDragOverHandler = (event, board) => {
        event.preventDefault();
        if (event.target.className === 'item') {
            event.target.style.boxShadow = '0 4px 3px gray'
        }
    }
    const onDragStartHandler = (event, board, item) => {
        setCurrentBoard(board.id - 1);
        setCurrentItem(item)
    }

    const onDragleaveHandler = (event) => {
        event.target.style.boxShadow = 'none'
    }

    const onDragEndHandler = (event) => {
        event.target.style.boxShadow = 'none'
    }

    const EmptyBoard = (event, board) => {
        const currentIndex = store.boards[currentBoard].items.indexOf(currentItem);
        const task = store.boards[currentBoard].items[currentIndex]
        dispatch({type:'ADD_TASK', id: `${board.id}`, payload: `${task}`})
        store.boards[currentBoard].items.splice(currentIndex,1);
        setCurrentBoard('')
        event.target.style.boxShadow = 'none'
    }

    return (
        <div className="App">
            <header className="taskArea">
                <Header setBoardId={setBoardId}
                        boardId={boardId}
                />
            </header>

            <main className="content">
                <Modal active={modalActive}
                       setModalActive={setModalActive}
                       currentBoard={currentBoard}
                />
                <Boards EmptyBoard={EmptyBoard}
                        onDragOverHandler={onDragOverHandler}
                        onDragleaveHandler={onDragleaveHandler}
                        onDragStartHandler={onDragStartHandler}
                        onDragEndHandler={onDragEndHandler}
                        setModalActive={setModalActive}
                        setCurrentBoard={setCurrentBoard}
                />
            </main>
        </div>
    );
}

export default App;

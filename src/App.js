import './App.css';
import Block from "./block/block";
import {useState} from "react";
import React from "react";
import Complete from "./block/complete";

function App() {
    const [item, setItem] = useState([]);
    const [completeItem, setCompleteItem] = useState([]);
    const [inputValue, setInputValue] = useState()

    let addTask = () => {
        let seq = inputValue;
        setItem([...item,seq]);
        setInputValue('');
    }

    return (
        <div className="container">
            <div className="App">
                <header className="taskarea">
                    <textarea placeholder="Введите новую задачу" onChange={e => setInputValue(e.target.value)}></textarea>
                    <button onClick={addTask}>+</button>
                </header>

                <main className="content">
                    <Block name="Active" item={item} func={setItem()}/>
                    <div className="line"/>
                    {/*<Complete name="Complete" completeItem={completeItem} func={setCompleteItem()}/>*/}
                </main>

            </div>
        </div>
    );
}

export default App;

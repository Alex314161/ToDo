import './App.css';
import Block from "./block/block";
import {useEffect, useState} from "react";
import Taskitem from "./block/items/item";
import CompleteItem from "./block/items/completeItem";
import React from "react";
import Complete from "./block/complete";

function App() {
    const [item,setItem]= useState([]);
    const [completeItem, setCompleteItem] = useState([]);

    let addTask = () => {
        let seq = document.getElementById("task").value;
        if (seq){
            let copyItem = Array.from(item);
            copyItem.push(seq);
            setItem(copyItem);
            document.getElementById("task").value='';
        }
    }

    let taskElement = item.map(elem => <Taskitem message={elem} arr={item} delete={setItem} completeTask={completeItem} complete={setCompleteItem}/>);
    let completeElement = completeItem.map(elem => <CompleteItem message={elem}/>);

  return (
      <div className="container">
          <div className="App">
              <header className="taskarea">
                  <textarea id="task" placeholder="Введите новую задачу"></textarea>
                  <button onClick={addTask}>+</button>
              </header>

              <main className="content">
                  <Block name="Active" task={taskElement} />
                  <div className="line"></div>
                  <Complete name="Complete" completeElement={completeElement}/>
              </main>

          </div>
      </div>
  );
}

export default App;

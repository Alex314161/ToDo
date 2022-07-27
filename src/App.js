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
        // Не использовать поиск по документу, использовать для value - hook useState 
        // (задавать значение value-inputValue, onChange=(e) => setInputValue(e.target.value))
        let seq = document.getElementById("task").value;
        
        if (seq){
            // лишнее действие
            let copyItem = Array.from(item);
            copyItem.push(seq);
            
            // setItem([...item, seq]) - spread - почитай
            setItem(copyItem);
            
            // тут setInputValue('')
            document.getElementById("task").value='';
        }
    }

    // элементы нужно выводить в самой компоненте, а компоненту BLock передавать массив item
    let taskElement = item.map(elem => <Taskitem message={elem} arr={item} delete={setItem} completeTask={completeItem} complete={setCompleteItem}/>);
    // аналогично    
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
                      
                  // нету детей, закрывай тег <div />
                  <div className="line"></div>
                  <Complete name="Complete" completeElement={completeElement}/>
              </main>

          </div>
      </div>
  );
}

export default App;

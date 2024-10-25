import "./App.css";
import Input from "./components/input/input";
import Button from "./components/button/button";
import { useState } from "react";
import { add } from "./functions/addToList/add";
import List from "./components/list/list";

function App() {
  const [toDoInput, setToDoInput] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const toDos = toDoList.map((item) => {
    if (item.isCompleted === false) return item.toDo;
  });
  const dones = toDoList.map((item) => {
    if (item.isCompleted === true) return item.toDo;
  });

  const handleAdd = () => {
    const newList = add(toDoInput, toDoList);
    setToDoList(newList);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">To Do - Done</h1>
      </header>
      <main>
        <div>
          <Input
            type="text"
            value={toDoInput}
            onChange={(e) => setToDoInput(e.target.value)}
          />
          <Button
            buttonText={"✔"}
            variant={"add-variant"}
            isDisabled={toDoInput.length === 0}
            onClick={handleAdd}
          />
        </div>
        <side>
          <h2>To Do</h2>
          <List listItems={toDos} />
        </side>
        <side>
          <h2>Done</h2>
          <List listItems={dones} />
        </side>
      </main>
    </div>
  );
}

export default App;

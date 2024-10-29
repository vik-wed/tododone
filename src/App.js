import "./App.css";
import Input from "./components/Input";
import Button from "./components/Button";
import { useState } from "react";
import { add } from "./functions/add";
import List from "./components/List";
import { remove } from "./functions/remove";
import { complete } from "./functions/complete";

function App() {
  const [toDoInput, setToDoInput] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const handleAdd = () => {
    const newList = add(toDoInput, toDoList);
    setToDoList(newList);
    setToDoInput("");
  };

  const handleRemove = (item) => {
    const newList = remove(item, toDoList);
    setToDoList(newList);
  };

  const handleComplete = (item) => {
    const newList = complete(item, toDoList);
    setToDoList(newList);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">To Do - Done</h1>
      </header>
      <main>
        <div className="add-section">
          <Input
            type="text"
            value={toDoInput}
            onChange={(e) => setToDoInput(e.target.value)}
          />
          <Button
            buttonText={"+"}
            variant={"add-variant"}
            isDisabled={toDoInput.length === 0}
            onClick={handleAdd}
          />
        </div>
        <div className="lists">
          <div className="list">
            <h2>To Do</h2>
            <List
              listItems={toDoList.filter((todo) => !todo.isCompleted)}
              handleRemove={handleRemove}
              handleComplete={handleComplete}
            />
          </div>
          <div className="list">
            <h2>Done</h2>
            <List
              listItems={toDoList.filter((todo) => todo.isCompleted)}
              handleRemove={handleRemove}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

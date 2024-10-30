import "./App.css";
import Input from "./components/Input";
import Button from "./components/Button";
import { useEffect, useState } from "react";
import { add } from "./functions/add";
import List from "./components/List";
import { remove } from "./functions/remove";
import { complete } from "./functions/complete";
import BreakTime from "./components/BreakTime";

function App() {
  const [isBreakTime, setIsBreakTime] = useState(false);
  const [toDoInput, setToDoInput] = useState("");
  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    const storedToDos = localStorage.getItem("TO_DO_LIST");

    if (storedToDos) {
      const list = JSON.parse(storedToDos);
      setToDoList(list);
    }
  }, []);

  useEffect(() => {
    const allCompleted = toDoList.filter((todo) => todo.isCompleted);
    if (toDoList.length > 0 && toDoList.length === allCompleted.length) {
      setIsBreakTime(true);
    }
  }, [toDoList]);

  const handleAdd = () => {
    const newList = add(toDoInput, toDoList);
    setToDoList(newList);
    localStorage.setItem("TO_DO_LIST", JSON.stringify(newList));
    setToDoInput("");
  };

  const handleRemove = (item) => {
    const newList = remove(item, toDoList);
    setToDoList(newList);
    localStorage.setItem("TO_DO_LIST", JSON.stringify(newList));
  };

  const handleComplete = (item) => {
    const newList = complete(item, toDoList);
    setToDoList(newList);
    localStorage.setItem("TO_DO_LIST", JSON.stringify(newList));
  };

  return (
    <div className="App">
      {isBreakTime ? (
        <BreakTime handleBreakOver={() => setIsBreakTime(false)} />
      ) : (
        <main>
          <header className="App-header">
            <h1 className="title">To Do - Done</h1>
          </header>
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
            <div data-testid="toDo" className="list">
              <h2>To Do</h2>
              <List
                listItems={toDoList.filter((todo) => !todo.isCompleted)}
                handleRemove={handleRemove}
                handleComplete={handleComplete}
              />
            </div>
            <div data-testid="done" className="list">
              <h2>Done</h2>
              <List
                listItems={toDoList.filter((todo) => todo.isCompleted)}
                handleRemove={handleRemove}
              />
            </div>
          </div>
        </main>
      )}
    </div>
  );
}

export default App;

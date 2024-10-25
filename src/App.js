import "./App.css";
import Input from "./components/input/input";
import Button from "./components/button/button";
import { useState } from "react";

function App() {
  const [toDoInput, setToDoInput] = useState("");
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
          />
        </div>
        <side>
          <h2>To Do</h2>
        </side>
        <side>
          <h2>Done</h2>
        </side>
      </main>
    </div>
  );
}

export default App;

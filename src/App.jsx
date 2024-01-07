import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import List from "./components/List";

function App() {
  const [taskName, setTaskName] = useState("");

  //Listado de tareas
  const [tasksList, setTaskList] = useState([]);

  const handleTaskNameChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleAddTask = () => {
    const task = {
      id: tasksList.length + 1,
      name: taskName,
    };

    const newTasksList = [...tasksList, task];

    setTaskList(newTasksList);
    setTaskName("");
  };

  const handleDeleteTask = (taskId) => {
    const newTasksList = tasksList.filter((task) => task.id !== taskId);
    setTaskList(newTasksList);
  };

  return (
    <main className="app">
      <Header title="Todo List" />
      <section>
        <div className="input-section">
          <input
            type="text"
            value={taskName}
            placeholder="Add a new task"
            onChange={handleTaskNameChange}
          />
          <button onClick={handleAddTask}>Add Task</button>
        </div>

        <div className="task-list">
          <List list={tasksList} onDelete={handleDeleteTask} />
        </div>
      </section>
    </main>
  );
}

export default App;

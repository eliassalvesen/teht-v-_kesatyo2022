import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";
import Button from "./components/Button";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Tehtävä A",
    },
    {
      id: 2,
      text: "Tehtävä C",
    },
    {
      id: 3,
      text: "Tehtävä B",
    },
    {
      id: 4,
      text: "Tehtävä D",
    },
  ]);

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  //DeleteAll Tasks
  const deleteAllTasks = () => {
    setTasks([]);
  };

  //Organize as done on doubbleclick
  const organize = () => {
    tasks.sort((a, b) => {
      if (a.text.toLocaleLowerCase() < b.text.toLocaleLowerCase()) {
        return -1;
      }
      if (a.text.toLocaleLowerCase() > b.text.toLocaleLowerCase()) {
        return 1;
      }
      return 0;
    });
    setTasks([...tasks]);
  };

  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <h1>Todo-Lista</h1>
      <AddTask onAdd={addTask} />
      {Tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks to show"
      )}
      <Button onClick={organize} text="Laajattele A-Ö" color="blue" />
      <Button onClick={deleteAllTasks} text="Poista kaikki" color="red" />
    </div>
  );
};
export default App;

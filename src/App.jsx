import { useState } from "react";
import Task from "./components/Task";
import "./App.scss";
import Footer from "./components/Footer";

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleAddTask() {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList([...todoList, task]);
  }

  function handleDeleteTask(id) {
    setTodoList(todoList.filter((task) => task.id !== id));
  }

  function handleCompleteTask(id) {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  }

  return (
    <div>
      <div className="todolist">
        <div className="title">
          <h1>To do List 📃</h1>
        </div>
        <div className="addTask">
          <input
            type="text"
            placeholder="Enter new task..."
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={handleAddTask} className="addtask-btn">
            Add Task
          </button>
        </div>
        <div className="lists">
          {todoList.map((task) => {
            return (
              <div>
                <Task
                  handleDeleteTask={handleDeleteTask}
                  handleCompleteTask={handleCompleteTask}
                  id={task.id}
                  taskName={task.taskName}
                  completed={task.completed}
                />
              </div>
            );
          })}
        </div>
        <Footer />
      </div>
    </div>
  );
}

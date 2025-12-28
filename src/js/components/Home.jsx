import React, { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = (e) => {
    if (e.key === "Enter" && task !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((item, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="container">
      <h1 className="text-center">Lista Tareas</h1>

      <input
        type="text"
        className="form-control"
        placeholder="Agregar tarea"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={addTask}
      />

      <ul className="list-group mt-3">
        {tasks.length === 0 ? (
          <li className="list-group-item text-muted">
            No hay tareas, añadir tareas
          </li>
        ) : (
          tasks.map((item, index) => (
            <li key={index} className="list-group-item task">
              {item}
              <span
                className="borrar"
                onClick={() => deleteTask(index)}
              >
                ❌
              </span>
            </li>
          ))
        )}
      </ul>

      <div className="pendientes">
        {tasks.length} tareas pendientes
      </div>
    </div>
  );
};

export default TodoList;

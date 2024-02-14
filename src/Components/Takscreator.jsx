import React from "react";
import { useState } from "react";
import style from "./TaskTable.module.css";

const Takscreator = ({ createNewTask }) => {
  const [newTaks, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(newTaks);

    setNewTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={style.form}
        type="text"
        placeholder="Ingrese Nueva tarea"
        onChange={(e) => setNewTask(e.target.value)}
        value={newTaks}
      />
      <button className={style.oauthButton}>Guardar Tarea</button>
    </form>
  );
};

export default Takscreator;

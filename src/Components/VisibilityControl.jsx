import React from "react";
import style from "./TaskTable.module.css";
function VisibilityControl({ setShowCompleted, cleanTask, isChecked }) {
  const handleDelete = () => {
    if (window.confirm("Quieres eliminar la tarea?")) {
      cleanTask();
    }
  };
  return (
    <div>
      <label className={style.switch}>
        <input
          className={style.toggle}
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setShowCompleted(e.target.checked)}
        ></input>
        <span className={style.slider}></span>
      </label>
      <label className={style.form}>Mostrar Tareas Completadas</label>
      <button className={style.oauthButton} onClick={handleDelete}>
        Limpiar
      </button>
    </div>
  );
}

export default VisibilityControl;

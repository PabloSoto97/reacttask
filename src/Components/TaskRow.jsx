import React from "react";
import style from "./TaskTable.module.css";

function TaskRow({ task, toggleTask }) {
  return (
    <tr className={style.checkboxWrapper}>
      <td className={style.formarea}>{task.name}</td>
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => toggleTask(task)}
      />
    </tr>
  );
}

export default TaskRow;

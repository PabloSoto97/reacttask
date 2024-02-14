import React from "react";
import TaskRow from "./TaskRow";
import style from "./TaskTable.module.css";
function TaskTable({ tasks, toggleTask, showCompleted = false }) {
  const taksTableRow = (doneValue) => {
    return tasks
      .filter((task) => task.done === doneValue)
      .map((task) => (
        <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
      ));
  };

  return (
    <div className={style.form}>
      <table>
        <thead>
          <tr>
            <th>Tareas</th>
          </tr>
        </thead>
        <tbody>{taksTableRow(showCompleted)}</tbody>
      </table>
    </div>
  );
}

export default TaskTable;

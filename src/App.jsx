// App.jsx
import { useState, useEffect } from "react";
import Takscreator from "./Components/Takscreator";
import TaskTable from "./Components/TaskTable";
import VisibilityControl from "./Components/VisibilityControl";
import style from "./App.module.css";

function App() {
  const [taskItems, setTaskItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function createNewTask(taskName) {
    if (!taskItems.find((task) => task.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }]);
    }
  }

  const toggleTask = (task) => {
    setTaskItems(
      taskItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );
  };

  const cleanTask = () => {
    setTaskItems(taskItems.filter((task) => !task.done));
    setShowCompleted(false);
  };

  useEffect(() => {
    let data = localStorage.getItem("task");
    if (data) {
      setTaskItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(taskItems));
  }, [taskItems]);

  // Función para alternar el modo oscuro
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={style.outerContainer}>
      {/* Contenedor para oscurecer toda la pantalla */}
      {isDarkMode && <div className={style.darkOverlay}></div>}

      <div className={`${style.wrapper} ${isDarkMode ? style.darkMode : ""}`}>
        <div className={style.toggleswitch}>
          <label className={style.switchlabel}>
            <input type="checkbox" className={style.checkbox}></input>
            <span className={style.slider} onClick={toggleDarkMode}></span>
          </label>
        </div>
        {/* Botón de cambio de modo */}

        <Takscreator createNewTask={createNewTask} />
        <TaskTable tasks={taskItems} toggleTask={toggleTask} />

        <VisibilityControl
          isChecked={showCompleted}
          setShowCompleted={(checked) => setShowCompleted(checked)}
          cleanTask={cleanTask}
        />
        {showCompleted === true && (
          <TaskTable
            tasks={taskItems}
            toggleTask={toggleTask}
            showCompleted={showCompleted}
          />
        )}
      </div>
    </div>
  );
}

export default App;

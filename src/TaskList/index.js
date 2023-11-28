import { useEffect, useState } from "react";
import './index.css'

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [line,setLine]=useState(false)

  useEffect(() => {
    const data = localStorage.getItem('tasks');
    if (data) {
      const parsedData = JSON.parse(data);
      setTasks(parsedData);
    }
  }, []);

  const deleteTask = (taskId) => {
    const updateTask = tasks.filter((task) => task.id !== taskId)
    setTasks(updateTask)
    localStorage.setItem('tasks', JSON.stringify(updateTask))
  }

  const toggleCompleted = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }


  return (
    <div className="mainList2">
      <div className="smallContainer">
        {tasks.length > 0 ? (
          <ul className="ul">
            {tasks.map((task) => (
              <li className="lis" key={task.id}>
                <div className="ad">
                <input
                className="box"
                  type="checkbox"
                  checked={task.completed}
                  onClick={()=>toggleCompleted(task.id)}
                />
                <div>
                <label className={task.completed ? "completed" : ""}>
                  <p className={task.completed? 'para':'para1'}>{task.text}</p>
                  <p className={task.completed?'para3':'para2'}>{task.description}</p>
                  <p className={task.completed? 'para':'para1'}>{task.p}</p>
                </label>
                <button type='button' className="button" onClick={() => deleteTask(task.id)}>Delete</button>
                <hr className="hr" />
                </div>
                </div>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

export default TaskList;

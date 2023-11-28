import { useState } from "react"
import {v4 as uuidv4} from 'uuid'
import './index.css'
function AddTask(){
    
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [priority, setPriority] = useState('low');
const [tasks,setTasks]=useState([])

const clickSubmit = (e) => {
    e.preventDefault();
    const newTask = { id: uuidv4(), text: taskName, description:taskDescription, p:priority ,completed:false };
    const existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const newTasks = [...existingTasks, newTask];
    setTasks(newTasks);

    localStorage.setItem('tasks', JSON.stringify(newTasks));
    setTaskDescription('');
    setPriority('low')
    setTaskName('')
  };




    return(
        <form onSubmit={clickSubmit} className="formDetails">
            <div className="one">
           <label className="labeldistance">
        Task name:
        <input className="o" type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
      </label>
            <label className="labeldistance">
        Task description:
        <textarea value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} />
      </label>
            <label className="labeldistance">
        Priority:
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>
            <button type="submit" className="button">Add</button>
            </div>
        </form>
    )
}

export default AddTask
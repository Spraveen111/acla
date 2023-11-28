import { useEffect,useState } from "react"

import './index.css'
function EditTask(){

    const [tasks,setTasks]=useState([])
    const [editingTaskId,setEditingTaskId]=useState(null)
    const [editDescription,setDescription]=useState('')
    const [editPriority,updatePriority]=useState('low')
    const [editText,setEditText]=useState('')

useEffect(()=>{
    const data=localStorage.getItem('tasks')
    if (data){
        const parsedData=JSON.parse(data)
        setTasks(parsedData)
    }
},[])
const editTask=(taskId)=>{
    setEditingTaskId(taskId)
    const findEditedData=tasks.find(each=>each.id===taskId);
    if (findEditedData){
        setEditText(findEditedData.text)
        setDescription(findEditedData.description)
        updatePriority(findEditedData.p)
        
    }
 }
const saveTask=()=>{
    const updatedTask=tasks.map((eachTask)=>
    eachTask.id===editingTaskId ?{...eachTask,text:editText,description:editDescription,p:editPriority}:eachTask
    )
    setTasks(updatedTask)
    localStorage.setItem('tasks',JSON.stringify(updatedTask))
    setEditingTaskId(null)
    setEditText('')
}
    return(
        <div className='mainEdit'>
            {tasks.length>0 ? (
                <ol  className="ol">
                    {tasks.map((eachTask)=>(
                        <li key={eachTask.id}>
                            {editingTaskId===eachTask.id ? (
                                <div className="editInput">
                                <input className="input1" type='text' value={editText} onChange={(e)=>setEditText(e.target.value)}/>
                                <textarea  className="input2" value={editDescription} onChange={(e)=>setDescription(e.target.value)}/>
                                <button type='button' className='button' onClick={saveTask}>Save</button>
                                <hr className="hr"/>
                                </div>
                            ) :(

                                <>
                                <p className="
                                para1"> {eachTask.text}</p>
               <p className="para2">{eachTask.description}</p>
               <p className="para1">   {eachTask.p}</p>
                                <button type='button' className="button" onClick={()=> editTask(eachTask.id)}>Edit</button>
                                <hr className="hr"/>
                                </>
                            )}
                        </li>
                    ))}
                </ol>
            ):null}
        </div>
    )
}

export default EditTask
import '../../App.css';
import {useState} from "react";
import Task from "./Task";

function Kanban2() {
    const statuses = ['todo ', ' progress ', ' review ', ' done ', ' bin']
    const initialState = [
        {id: Math.random(), task: 'Ukraine', done: true, status: statuses[0]},
        {id: Math.random(), task: 'England', done: true, status: statuses[1]},
        {id: Math.random(), task: 'Canada', done: true, status: statuses[2]},
        {id: Math.random(), task: 'USA', done: true, status: statuses[3]},
        {id: Math.random(), task: 'Ukraine', done: true, status: statuses[4]},
    ]
    const [tasks, setTasks] = useState(initialState)
    const [newTask, setNewTask] = useState('')
    const [updateTask, setUpdateTask] = useState([])


    const del = (id) => {
      const updateTask = tasks.filter(el => el.id !== id)
        setTasks(updateTask)
    }
    const moveTask = (index, value) => {
        const updateTask = [...tasks]
        const currentTask = updateTask[index]
        const previosTask = updateTask[index + value]
        updateTask[index] = previosTask
        updateTask[index + value] = currentTask
        setTasks(updateTask)
    }
const addNewTask = () => {
  const updateTask = [...tasks,  {id: Math.random(), task: newTask, done: true, status: statuses[0]}]
    setTasks(updateTask)
    setNewTask('')
}
const updateTasks = (id) => {
  const updateTask = tasks.map(el => el.id === id ? {...el, done: !el.done } : el)
    setTasks(updateTask)
    setUpdateTask([])
}

const saveUpdateTask = (id) => {
  const updateTasks = tasks.map(el => el.id === id ? {...el, task: updateTask, done: !el.done} : el)
    setTasks(updateTasks)
    setUpdateTask([])
}

    return (
        <div className="App">
            <h3>Kanban2</h3>
            <input placeholder='add new task' value={newTask} onChange={event => setNewTask(event.target.value)}/>
            <button onClick={addNewTask}>add new task</button>
            {statuses.map(status =>
                <h2 key={status}>
                    {status}
                    <Task tasks={tasks} status={status} del={del} moveTask={moveTask} updateTasks={updateTasks}
                          updateTask={updateTask} setUpdateTask={setUpdateTask} saveUpdateTask={saveUpdateTask}/>
                </h2>)}
        </div>
    );
}

export default Kanban2;

import '../../App.css';
import Panel from "./Panel";
import {useState} from "react";
import InputTasks from "./InputTasks";


const statuses = ['TODO', 'PROGRESS', 'REVIEW', 'DONE']
const initialState = [
    {id: Math.random(), name: 'Task1', status: statuses[0], priority: 2, doneDelete: true, doneUpdated: true, done: true},
    {id: Math.random(), name: 'Task2', status: statuses[1], priority: 2, doneDelete: true, doneUpdated: true, done: true},
    {id: Math.random(), name: 'Task3', status: statuses[2], priority: 2, doneDelete: true, doneUpdated: true, done: true},
    {id: Math.random(), name: 'Task4', status: statuses[3], priority: 2, doneDelete: true, doneUpdated: true, done: true},
]

function KanbanPASV() {
    const [tasks, setTasks] = useState(initialState)
    const [inputNewTask, setInputNewTask] = useState([])
    const [inputUpdateTask, setInputUpdateTask] = useState([])
    const addNewTask = () => {
      const newTask = [...tasks,  {id: Math.random(), name: inputNewTask, status: statuses[0], priority: 2, doneDelete: true, doneUpdated: true}]
        setTasks(newTask)
        setInputNewTask([])
    }
    const saveUpdateTask = (id) => {
      const newTask = tasks.map(el => el.id === id ? {...el, name: inputUpdateTask, doneUpdated: !el.doneUpdated} : el)
        setTasks(newTask)
        setInputUpdateTask([])
    }
    const leftAndRight = (id, value) => {
        const newTasks = tasks.map(el => el.id === id ? {
            ...el,
            status: statuses[statuses.indexOf(el.status) + value]
        } : el)
        setTasks(newTasks)
    }
    const cancelDelete = (id) => {
        const newTask = tasks.map(el => el.id === id ? {...el, doneDelete: !el.doneDelete} : el)
        setTasks(newTask)
    }
    const cancelUpdate = (id) => {
      const newTask = tasks.map(el => el.id === id ? {...el, doneUpdated: !el.doneUpdated} : el)
        setTasks(newTask)
        setInputUpdateTask([])
    }
    const del = (id) => {
        const newTask = tasks.filter(el => el.id !== id)
        setTasks(newTask)
    }
    const done = (id) => {
      const newTask = tasks.map(el => el.id === id ? {...el, done: !el.done} : el)
        setTasks(newTask)
    }


    return (
        <div className='container'>
            <h1>KanbanTable</h1>
            <InputTasks inputNewTask={inputNewTask} setInputNewTask={setInputNewTask} addNewTask={addNewTask}/>
            <div className="row align-items-start">
                {statuses.map(status =>
                    <div key={status} className="col">
                        <Panel status={status} tasks={tasks} leftAndRight={leftAndRight} cancelDelete={cancelDelete} del={del} done={done}
                               cancelUpdate={cancelUpdate} saveUpdateTask={saveUpdateTask} inputUpdateTask={inputUpdateTask} setInputUpdateTask={setInputUpdateTask}/>
                    </div>)}
            </div>
        </div>
    );
}

export default KanbanPASV;

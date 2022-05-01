import '../../App.css';
import {useState} from "react";
import Panel from "./Panel";
import InputNewTask from "./InputNewTask";

function Kanban1() {

    const statuses = ['todo', 'progress', 'done', 'review']
    const initialState = [
        {id: Math.random(), task: 'Liverpool', done: true, status: statuses[0]},
        {id: Math.random(), task: 'London', done: true, status: statuses[1]},
        {id: Math.random(), task: 'San Francisko', done: true, status: statuses[2]},
        {id: Math.random(), task: 'Cancun', done: true, status: statuses[3]},
    ]
    const [tasks, setTasks] = useState(initialState)
    const [newTasks, setNewTasks] = useState('')
    const [updateTasks, setUpdateTask] = useState('')
    const addTask = () => {
        const updateTask = [...tasks, {id: Math.random(), task: newTasks, done: true, status: statuses[0]}]
        setTasks(updateTask)
        setNewTasks('')
    }
    const del = (id) => {
        const updateTask = tasks.filter(el => el.id !== id)
        setTasks(updateTask)
    }
    const delTask = (id) => {
        const updateTask = tasks.map(el => el.id === id ? {...el, done: !el.done} : el)
        setTasks(updateTask)
    }
    const updateAddTask = (id) => {
        const updateTask = tasks.map(el => el.id === id ? {...el, task: updateTasks, done: !el.done} : el)
        setTasks(updateTask)
        setUpdateTask('')
    }
    const done = (id) => {
        const updateTask = tasks.map(el => el.id === id ? {...el, done: !el.done} : el)
        setTasks(updateTask)
    }


    return (
        <div className="App">
            <h3>Kanban1</h3>
            <InputNewTask newTasks={newTasks} setNewTasks={setNewTasks} addTask={addTask}/>
            <Panel tasks={tasks} statuses={statuses} del={del} delTask={delTask}
                   updateAddTask={updateAddTask} updateTasks={updateTasks} setUpdateTask={setUpdateTask} done={done}/>
        </div>
    );
}

export default Kanban1;

import '../App.css';
import Tasks from "./Tasks";
import {useState} from "react";
import InputTasks from "./InputTasks";


const statuses = ['todo', 'progress', 'review', 'done']

const initialState = [
    {id: Math.random(), name: 'Dnipro', done: true, status: statuses[0], count: 1.},
    {id: Math.random(), name: 'Warszawa', done: true, status: statuses[1], count: 2.},
    {id: Math.random(), name: 'Liverpool', done: true, status: statuses[2], count: 3.},
    {id: Math.random(), name: 'Vancover', done: true, status: statuses[3], count: 4.}
]


function KanbanBootstrap() {
    const [tasks, setTasks] = useState(initialState)
    const [newTasks, setNewTasks] = useState([])
    const [counter, setCounter] = useState(5.)
    const [updateTasks, setUpdateTasks] = useState()
    const addTasks = () => {
        const updateTasks = [...tasks, {id: Math.random(), name: newTasks, done: true, doneUpdate: true, status: statuses[0], count: counter}]
        setCounter(counter + 1)
        setTasks(updateTasks)
        setNewTasks([])
    }
    const del = (id) => {
        const updateTasks = tasks.filter(el => el.id !== id)
        setTasks(updateTasks)
    }
    const cancelDel = (id) => {
      const updateTasks = tasks.map(el => el.id === id ? {...el, done: !el.done} : el)
        setTasks(updateTasks)
    }
    const cancelUpdate = (id) => {
      const updateTasks = tasks.map(el => el.id === id ? {...el, done: !el.done} : el)
        setTasks(updateTasks)
    }
    const updateTask = (id) => {
      const newTask = tasks.map(el => el.id === id ? {...el, name: updateTasks, done: !el.done} : el)
        setTasks(newTask)
        setUpdateTasks('')
    }

    return (
        <div className="App">
            <InputTasks newTasks={newTasks} setNewTasks={setNewTasks} addTasks={addTasks}/>
            {statuses.map(status =>
                <div key={status}>
                    <h1>
                        {status}
                    </h1>
                    <Tasks status={status} tasks={tasks} del={del} cancelDel={cancelDel} updateTask={updateTask}
                           counter={counter} cancelUpdate={cancelUpdate} updateTasks={updateTasks} setUpdateTasks={setUpdateTasks}/>
                </div>
            )}
        </div>
    );
}

export default KanbanBootstrap;

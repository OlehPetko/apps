import '../../App.css';
import PanelList from "./PanelList";
import {useState} from "react";
import InputTasksList from "./InputTasksList";

function KanbanPASV() {

    const statuses = ['TODO', 'PROGRESS', 'REVIEW', 'DONE']

    let initialState;
    initialState = [
        {
            id: Math.random(),
            title: 'Dnipro',
            status: statuses[0],
            doneDelete: true,
            doneUpdate: true,
            doneTitle: true,
        },
        {
            id: Math.random(),
            title: 'Liverpool',
            status: statuses[2],
            doneDelete: true,
            doneUpdate: true,
            doneTitle: true
        },
        {
            id: Math.random(),
            title: 'Warszawa',
            status: statuses[1],
            doneDelete: true,
            doneUpdate: true,
            doneTitle: true
        },
        {
            id: Math.random(),
            title: 'Vancouver',
            status: statuses[3],
            doneDelete: true,
            doneUpdate: true,
            doneTitle: true
        },
    ];
    const [tasks, setTasks] = useState(initialState)
    const [newTask, setNewTask] = useState([])
    const [updateTasks, setUpdateTask] = useState([])

    const addTask = () => {
        const updateTask = [...tasks, {
            id: Math.random(),
            title: newTask,
            status: statuses[0],
            doneDelete: true,
            doneUpdate: true,
            doneTitle: true
        }]
        setTasks(updateTask)
        setNewTask([])
    }
    const cancelDelete = (id) => {
        const updateTask = tasks.map(el => el.id === id ? {...el, doneDelete: !el.doneDelete} : el)
        setTasks(updateTask)
    }
    const cancelUpdate = (id) => {
        const updateTask = tasks.map(el => el.id === id ? {...el, doneUpdate: !el.doneUpdate} : el)
        setTasks(updateTask)
        setUpdateTask([])
    }
    const del = (id) => {
        const updateTask = tasks.filter(el => el.id !== id)
        setTasks(updateTask)
    }
    const updateNewTask = (id) => {
        const updateTask = tasks.map(el => el.id === id ? {...el, title: updateTasks, doneUpdate: !el.doneUpdate} : el)
        setTasks(updateTask)
        setUpdateTask([])
    }
    const done = (id) => {
        const updateTask = tasks.map(el => el.id === id ? {...el, title: !el.title, doneTitle: !el.doneTitle} : el)
        setTasks(updateTask)
    }
    const moveRigntAndLeft = (id, value) => {
        const updateTask = tasks.map(el => el.id === id ? {
            ...el,
            status: statuses[statuses.indexOf(el.status) + value]
        } : el)
        setTasks(updateTask)
    }
    return (
        <div className='container'>
            <h1>KanbanList</h1>
            <InputTasksList newTask={newTask} setNewTask={setNewTask} addTask={addTask}/>
            {statuses.map(status =>
                <div key={status}>
                    <PanelList status={status} tasks={tasks} cancelDelete={cancelDelete} del={del}
                               cancelUpdate={cancelUpdate} updateTasks={updateTasks} moveRigntAndLeft={moveRigntAndLeft}
                               setUpdateTask={setUpdateTask} updateNewTask={updateNewTask} done={done}/>
                </div>)}
        </div>
    );
}

export default KanbanPASV;

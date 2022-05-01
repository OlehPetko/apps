import '../App.css';
import {useState} from "react";
import Kanban1 from "./Kanban1/Kanban1";
import Kanban2 from "./Kanban2/Kanban2";


function Kanban() {
    const statuses = ['todo', 'progress', 'review', 'done']
    const initialState = [
        {id: Math.random(), status: statuses[0], task: 'Liverpool'},
        {id: Math.random(), status: statuses[1], task: 'London'},
        {id: Math.random(), status: statuses[2], task: 'Los Angeles'},
        {id: Math.random(), status: statuses[3], task: 'Paris'},
    ]
    const [task, setTask] = useState(initialState)
    const [newTask, setNewTask] = useState('')
    const addTask = () => {
        const updateTask = [...task, {id: Math.random(), status: statuses[0], task: newTask}]
        setTask(updateTask)
        setNewTask('')
    }
    const del = (id) => {
        const updateTask = task.filter(el => el.id !== id)
        setTask(updateTask)
    }


    return (
        <div className="App">
            <h3>Kanban</h3>
            <input placeholder='add new task' value={newTask} onChange={event => setNewTask(event.target.value)}/>
            <button onClick={addTask}>add task</button>
            {statuses.map(status => <div key={status}>
                    <h4>
                        {status}
                    </h4>
                    {task.filter(el => status === el.status).map(el =>
                        <div key={el.id}>
                            {el.task}
                            <button onClick={() => del(el.id)}>delete</button>
                        </div>
                    )}
                </div>
            )}
            <hr/>
            <Kanban1/>
            <hr/>
            <Kanban2/>
        </div>
    );
}

export default Kanban;

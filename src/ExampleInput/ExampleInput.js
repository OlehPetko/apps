import '../App.css';
import {useState} from "react";
import ExampleInput1 from "./ExampleInput1";

function ExampleInput() {
    const initialState = [
        {id: Math.random(), numberTask: 1, task: 'Liverpool'},
        {id: Math.random(), numberTask: 2, task: 'Manchester city'}
    ]
    const [task, setTask] = useState(initialState)
    const [newTask, setNewTask] = useState('')
    const [newNumberTask, setNewNumberTask] = useState(3)

    const addTask = () => {
        const updateTask = [...task, {id: Math.random(), numberTask: newNumberTask, task: newTask}]
        setTask(updateTask)
        setNewNumberTask(newNumberTask + 1)
        setNewTask('')
    }

    return (
        <div className="App">
            <input value={newTask} onChange={event => setNewTask(event.target.value)}/>
            <button onClick={addTask}>add task</button>
            {task.map(el =>
                <div>
                    №{el.numberTask}.
                    {el.task}
                </div>)}
            <hr/>
            <ExampleInput1 />
        </div>
    );
}

export default ExampleInput;

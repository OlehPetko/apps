import '../App.css';
import {useState} from "react";

function ExampleInput1() {

    const initialState = [
        {id: Math.random(), task: 'Ukraine', done: false},
        {id: Math.random(), task: 'England', done: false},
        {id: Math.random(), task: 'USA', done: false}
    ]
    const [task, setTask] = useState(initialState)
    const [newTask, setNewTask] = useState('')
    const addTask = () => {
      const updateTask = [...task, {id: Math.random(), task: newTask}]
        setTask(updateTask)
        setNewTask('')
    }
    const delTask = (id) => {
      const updateTask = task.filter(el => el.id !== id)
        setTask(updateTask)
    }
    const doneTask = (id) => {
        const updateTask = task.map(el => el.id === id ? {...el, done: !el.done} : el )
        setTask(updateTask)
    }

    return (
        <div className="App">
            <input placeholder='add new task' value={newTask} onChange={event => setNewTask(event.target.value)}/>
            <button onClick={addTask}>add task</button>
            {task.filter(el => !el.done).map(el =>
            <div>
                {el.task} {el.done ? 'Completed' : 'Uncompleted'}
                <button onClick={() => delTask(el.id)}>delete task</button>
                <button onClick={() => doneTask(el.id)}>{el.done ? 'Done' : 'Undone'}</button>
            </div>
            )}
            <hr/>
            <h3>Ready task</h3>
            {task.filter(el => el.done).map(el =>
                <div>
                    {el.task} {el.done ? 'Completed' : 'Uncompleted'}
                    <button onClick={() => delTask(el.id)}>delete task</button>
                    <button onClick={() => doneTask(el.id)}>{el.done ? 'Done' : 'Undone'}</button>
                </div>
            )}

        </div>
    );
}

export default ExampleInput1;

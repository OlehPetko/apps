import '../App.css';
import {useState} from "react";


function TodoList() {

    const initialState = [
        {id: Math.random(), task: 'LA', done: false, update: true},
        {id: Math.random(), task: 'London', done: false, update: true},
    ]
    const [task, setTask] = useState(initialState)
    const [inputTask, setInputTask] = useState('')
    const [updateInputTask, setUpdateInputTask] = useState('')

    const addTask = () => {
        const updateTask = [...task, {id: Math.random(), task: inputTask, done: false, update: true}]
        setTask(updateTask)
        setInputTask('')
    }
    const del = (id) => {
        const updateTask = task.filter(el => el.id !== id)
        setTask(updateTask)
    }
    const done = (id) => {
        const updateTask = task.map(el => el.id === id ? {...el, done: !el.done} : el)
        setTask(updateTask)
    }
    const updateTask = (id) => {
        const updateTask = task.map(el => el.id === id ? {...el, task: updateInputTask, update: !el.update} : el)
        setTask(updateTask)
        setUpdateInputTask('')

    }
    const openUpdateTask = (id) => {
        const updateTask = task.map(el => el.id === id ? {...el, update: !el.update} : el)
        setTask(updateTask)
        setUpdateInputTask('')
    }
    const move = (index, nextIndex) => {
        const updateTask = [...task]
        const currentIndex = updateTask[index]
        const previosTask = updateTask[index + nextIndex]
        updateTask[index + nextIndex] = currentIndex
        updateTask[index] = previosTask
        setTask(updateTask)
    }
    const fetch = () => {
        fetch()
    }

    function myFn(a, b) {
        let c
        a = a + 1
        c = a + b
        return c
    }
    return (
        <div className="App">
            <h3>TodoList</h3>
            <input type="text" placeholder='add new task' value={inputTask}
                   onChange={event => setInputTask(event.target.value)}/>
            <button onClick={addTask}>add new task</button>
            {task.map((el, index) =>
                <div key={el.id}>
                    {el.task}
                    {el.done ? '  -DONE' : ''}
                    <button disabled={index === 0} onClick={() => move(index, -1)}>up</button>
                    <button disabled={index === task.length - 1} onClick={() => move(index, 1)}>down</button>
                    <button onClick={() => del(el.id)}>delete</button>
                    <button onClick={() => done(el.id)}>{el.done ? 'BACK' : 'DONE'}</button>
                    {el.update ? (
                        <button onClick={() => openUpdateTask(el.id)}>update task</button>
                    ) : (
                        <div>
                            <input type="text" placeholder='update task' value={updateInputTask}
                                   onChange={event => setUpdateInputTask(event.target.value)}/>
                            <button onClick={() => openUpdateTask(el.id)}>cancel</button>
                            <button onClick={() => updateTask(el.id)}>save</button>
                        </div>
                    )}
                </div>)}
            <hr/>
            <button onClick={fetch}>fetch</button>
            <hr/>
            <button onClick={myFn}>myFn</button>

        </div>
    );
}

export default TodoList;

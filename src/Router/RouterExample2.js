import '../App.css';
import {useState} from "react";


function RouterExample2() {

    const initialState = [
        {id: Math.random(), task: 'Stop War'},
        {id: Math.random(), task: 'Fuck you Putin'},
    ]
    const [task, setTask] = useState(initialState)
    const [inputTask, setInputTask] = useState('')
    const addTask = () => {
        const updateTask = [...task, {id: Math.random(), task: inputTask}]
        setTask(updateTask)
        setInputTask('')
    }
    return (
        <div className="App">
            <h3>RouterExample2</h3>
            <input type="text" placeholder='add new task' value={inputTask}
                   onChange={event => setInputTask(event.target.value)}/>
            <button onClick={addTask}>add task</button>
            {task.map(el =>
                <div key={el.id}>
                    {el.task}
                </div>
            )}

        </div>
    );
}

export default RouterExample2;

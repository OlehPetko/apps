import '../App.css';
import {useState} from "react";
import DifficulCounter1 from "./DifficulCounter1";
import DifficulCounter2 from "./DifficulCounter2";

function DifficulCounter() {

    const initialState = [
        {id: Math.random(), task: 1, done: false, buttons: [1]},
        {id: Math.random(), task: 2, done: false, buttons: [1, 2]},
        {id: Math.random(), task: 3, done: false, buttons: [1, 2, 3]},
        {id: Math.random(), task: 4, done: false, buttons: [1, 2, 3, 4]},
        {id: Math.random(), task: 5, done: false, buttons: [1, 2, 3, 4, 5]},
    ]
    const [count, setCount] = useState(initialState)
    const [newCount, setNewCount] = useState(6)
    const [newButtons, setNewButtons] = useState([1, 2, 3, 4, 5, 6])
    const plusAndMinus = (id, value) => {
        const updateTask = count.map(el => el.id === id ? {...el, task: el.task + value} : el)
        setCount(updateTask)
    }
    const addCounter = () => {
        const updateTask = [...count, {id: Math.random(), task: newCount, done: false, buttons: newButtons}]
        const updateButton = []
        for (let i = 1; i <= newButtons.length + 1; i++) {
            updateButton.push(i)
        }
        setNewCount(newCount + 1)
        setNewButtons(updateButton)
        setCount(updateTask)
    }
    const del = (id) => {
        const updateTask = count.filter(el => el.id !== id)
        setCount(updateTask)
    }
    const move = (index, value) => {
        const updateTask = [...count]
        const сurrentTask = updateTask[index]
        const previosTask = updateTask[index + value]
        updateTask[index] = previosTask
        updateTask[index + value] = сurrentTask
        setCount(updateTask)
    }

    return (
        <div className="App">
            <h3>Difficul Count</h3>
            <button onClick={addCounter}>add new counter</button>
            {count.map((el, index) =>
                <div>
                    <button disabled={index === count.length - 1} onClick={() => move(index, 1)}>down</button>
                    {el.buttons.map(valueButton => <button
                        onClick={() => plusAndMinus(el.id, -valueButton)}>-{valueButton}</button>)}
                    {el.task}
                    {el.buttons.map(valueButton => <button
                        onClick={() => plusAndMinus(el.id, valueButton)}>{valueButton}</button>)}
                    <button disabled={index === 0} onClick={() => move(index, -1)}>up</button>
                    <button onClick={() => del(el.id)}>delete</button>
                </div>
            )}
            <hr/>
            <DifficulCounter1 />
            <hr/>
            <DifficulCounter2 />


        </div>
    );
}

export default DifficulCounter;

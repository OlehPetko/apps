import '../App.css';
import {useState} from "react";


function DifficulCounter1() {
    const initialState = [
        {id: Math.random(), counters: 1, done: false, buttons: [1]},
        {id: Math.random(), counters: 2, done: false, buttons: [1, 2]},
        {id: Math.random(), counters: 3, done: false, buttons: [1, 2, 3]},
    ]
    const [count, setCount] = useState(initialState)
    const [newCount, setNewCount] = useState([])


    const addNewCount = () => {
        const newButtons = []
        const updateCount = [...count, {id: Math.random(), counters: newCount, done: false, buttons: [1, 2, 3]}]
        for (let i = 1; i <= newCount.length + 1; i++) {
            newButtons.push(i)
        }
        setCount(updateCount)
        setNewCount([])
    }
    const plusAndMinus = (id, valueButton) => {
        const updateCount = count.map(el => el.id === id ? {...el, counters: Number(el.counters) + valueButton} : el)
        setCount(updateCount)
    }

    const moveCount = (index, value) => {
        const updateCount = [...count]
        const currentCount = updateCount[index]
        const previosCount = updateCount[index + value]
        updateCount[index] = previosCount
        updateCount[index + value] = currentCount
        setCount(updateCount)
    }
    const del = (id) => {
        const updateCount = count.filter(el => el.id !== id)
        setCount(updateCount)
    }

    return (
        <div className="App">
            <h3>Difficul Count1</h3>
            <input type="Number" value={newCount} onChange={event => setNewCount(event.target.value)}/>
            <button onClick={addNewCount}>add counter</button>
            {count.map((el, index) =>
                <div>
                    <button disabled={index === 0} onClick={() => moveCount(index, -1)}>UP</button>
                    {el.buttons.map(valueButton => <button
                        onClick={() => plusAndMinus(el.id, -valueButton)}>{-valueButton}</button>)}
                    {el.counters}
                    {el.buttons.map(valueButton => <button
                        onClick={() => plusAndMinus(el.id, valueButton)}>{valueButton}</button>)}
                    <button disabled={index === count.length - 1} onClick={() => moveCount(index, 1)}>DOWN</button>
                    <button onClick={() => del(el.id)}>delete</button>
                </div>
            )}
        </div>
    );
}

export default DifficulCounter1;

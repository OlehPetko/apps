import '../App.css';
import {useState} from "react";

function Counter4() {

    const initialState = [
        {id: Math.random(), counter: 1, done: false, button: [1]},
        {id: Math.random(), counter: 2, done: false, button: [1, 2]},
        {id: Math.random(), counter: 3, done: false, button: [1, 2, 3]},
    ]
    const [count, setCount] = useState(initialState)
    const [newCount, setNewCount] = useState([])
    const addNewCount = () => {
        const updateCount = [...count, {id: Math.random(), counter: newCount, done: false, button: [1, 2, 3]}]
        setCount(updateCount)
        setNewCount([])
    }
const plusAndMinus = (id, value) => {
  const updateCount = count.map(el => el.id === id ? {...el, counter: Number(el.counter) + value} : el)
    setCount(updateCount)
}

    return (
        <div className="App">
            <h3>Counter4</h3>
            <input type="Number" value={newCount} onChange={event => setNewCount(event.target.value)}/>
            <button placeholder='new count' onClick={addNewCount}>add new count</button>
            {count.map(el =>
            <div>
                {el.button.map(valueButton => <button onClick={() => plusAndMinus(el.id, valueButton)}>{valueButton}</button>)}
                {el.counter}
                {el.button.map(valueButton => <button onClick={() => plusAndMinus(el.id, -valueButton)}>{-valueButton}</button>)}
            </div>
            )}


        </div>
    );
}

export default Counter4;

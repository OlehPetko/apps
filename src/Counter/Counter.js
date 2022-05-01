import '../App.css';
import {useState} from "react";
import Counter2 from "./Counter2";
import Counter3 from "./Counter3";
import Counter4 from "./Counter4";


function Counter() {
    const initialState = [
        {id: Math.random(), value: 0},
        {id: Math.random(), value: 0},
        {id: Math.random(), value: 0},
    ]
    const [count, setCount] = useState(initialState)
    const plusAndMinus = (id, value) => {
        const updateCount = count.map(el => el.id === id ? {...el, value: el.value + value} : el)
        setCount(updateCount)
    }
    const del = (id) => {
        const updateCount = count.filter(el => el.id !== id)
        setCount(updateCount)
    }
    const addCounter = () => {
        const updateCount = [...count, {id: Math.random(), value: 0}]
        setCount(updateCount)
    }

    return (
        <div className="App">
            <h3>Counter</h3>
            <button onClick={addCounter}>add counter</button>
            {count.map(el =>
                <div key={el.id}>
                    <button onClick={() => plusAndMinus(el.id, -1)}>-</button>
                    {el.value}
                    <button onClick={() => plusAndMinus(el.id, 1)}>+</button>
                    <button onClick={() => del(el.id)}>delete</button>
                </div>
            )}
            <hr/>
            <Counter2 />
            <hr/>
            <Counter3 />
            <hr/>
            <Counter4 />
        </div>
    );
}

export default Counter;

import '../App.css';
import {useState} from "react";


function SimpleCounter3() {
    const initialState = [
        {id: Math.random(), value: 1, numberCount: 1},
        {id: Math.random(), value: 2, numberCount: 2},
        {id: Math.random(), value: 3, numberCount: 3},
        {id: Math.random(), value: 4, numberCount: 4},
        {id: Math.random(), value: 5, numberCount: 5},
        {id: Math.random(), value: 6, numberCount: 6},
    ]
    const [count, setCount] = useState(initialState)
    const [newCount, setNewCount] = useState(7)

    const plusAndMinus = (id, value) => {
        const newCount = count.map(el => el.id === id ? {...el, value: el.value + 1} : el)
        setCount(newCount)
    }
    const addCounter = () => {
      const updateCount = [...count, {id: Math.random(), value: newCount, numberCount: newCount} ]
        setNewCount(newCount + 1)
        setCount(updateCount)
    }
    return (
        <div className="App">
            <h3>SimpleCounter3</h3>
            <button onClick={addCounter}>add counter</button>
            {count.map(el =>
                <div key={el.id}>
                    №{el.numberCount}.
                    <button onClick={() => plusAndMinus(el.id, -1)}>-</button>
                    {el.value}
                    <button onClick={() => plusAndMinus(el.id, 1)}>+</button>
                </div>
            )}
        </div>
    );
}

export default SimpleCounter3;

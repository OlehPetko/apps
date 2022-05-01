import '../App.css';
import {useState} from "react";


function SimpleCounter2() {
    const initialState = [
        {id: Math.random(), value: 1},
        {id: Math.random(), value: 2},
        {id: Math.random(), value: 3},
    ]
    const [count, setCount] = useState(initialState)

    const plusAndMinus = (id, value) => {
        const newCount = count.map(el => el.id === id ? {...el, value: el.value + value  } : el)
        setCount(newCount)
    }

    return (
        <div className="App">
            <h3>SimpleCounter2</h3>
            {count.map(el =>
                <div key={el.id}>
                    <button onClick={() => plusAndMinus(el.id, -1)}>-</button>
                    {el.value}
                    <button onClick={() => plusAndMinus(el.id, 1)}>+</button>
                </div>
            )}

        </div>
    );
}

export default SimpleCounter2;

import '../App.css';
import {useState} from "react";

function Counter() {

    const initialState = [
        {id: Math.random(), value: 1, buttons: [1]},
        {id: Math.random(), value: 2, buttons: [1, 2]},
        {id: Math.random(), value: 3, buttons: [1, 2, 3]},
        {id: Math.random(), value: 4, buttons: [1, 2, 3, 4]},
        {id: Math.random(), value: 5, buttons: [1, 2, 3, 4, 5]},
    ]
    const [count, setCount] = useState(initialState)
    const [addCount, setAddCount] = useState(6)
    const [addButtonValue, setAddButtonValue] = useState([1, 2, 3, 4, 5, 6])

    const plusAndMinus = (id, value) => {
        const updateCount = count.map(el => el.id === id ? {...el, value: el.value - value} : el)
        setCount(updateCount)
    }
    const addCounter = () => {
        const updateCounter = [...count, {id: Math.random(), value: addCount, buttons: addButtonValue}]
        setAddCount(addCount + 1)
        const newButtons = []
        for (let i = 1; i <= addButtonValue.length + 1; i++) {
            newButtons.push(i)
        }
        setAddButtonValue(newButtons)
        setCount(updateCounter)
    }
    const delCounter = (id) => {
      const updateCount = count.filter(el => el.id !== id)
        setCount(updateCount)
    }

    return (
        <div className="App">
            <h3>Counter2</h3>
            <button onClick={addCounter}>add counter</button>
            {count.map(el =>
                <div key={el.id}>
                    {el.buttons.map(valueButton => <button key={valueButton}
                        onClick={() => plusAndMinus(el.id, valueButton)}>{-valueButton}</button>)}
                    {el.value}
                    {el.buttons.map(valueButton => <button key={valueButton}
                        onClick={() => plusAndMinus(el.id, valueButton)}>{valueButton}</button>)}
                    <button onClick={() => delCounter(el.id)}>delete counter</button>
                </div>
            )}
        </div>
    );
}

export default Counter;

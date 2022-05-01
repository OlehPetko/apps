import '../App.css';
import {useState} from "react";


function Counter() {
    const initialState = [
        {id: Math.random(), value: 1, buttons: [1]},
        {id: Math.random(), value: 2, buttons: [1, 2]},
        {id: Math.random(), value: 3, buttons: [1, 2, 3]},
    ]
    const [count, setCount] = useState(initialState)
    const [newValueCount, setNewValueCount] = useState(4)
    const [newValueButtons, setNewValueButtons] = useState([1, 2, 3, 4])


    const addCounter = () => {
      const updateCounter = [...count, {id: Math.random(), value: newValueCount, buttons: newValueButtons}]
        const updateValueButtons = []
        for (let i = 1; i <= newValueButtons.length + 1; i++){
            updateValueButtons.push(i)
        }
        setNewValueCount(newValueCount + 1)
        setNewValueButtons(updateValueButtons)
        setCount(updateCounter)
    }

    const plusAndMinus = (id, value) => {
      const updateCount = count.map(el => el.id === id ? {...el, value: el.value + value} : el)
        setCount(updateCount)
    }



    return (
        <div className="App">
            <h3>Counter3</h3>
            <button onClick={addCounter}>add counter</button>
            {count.map(el =>
                <div>
                    {el.buttons.map(valueButton => <button onClick={() => plusAndMinus(el.id, -valueButton)}>{-valueButton}</button>)}
                    {el.value}
                    {el.buttons.map(valueButton => <button onClick={() => plusAndMinus(el.id, valueButton)}>{valueButton}</button>)}
                </div>)}
        </div>
    );
}

export default Counter;

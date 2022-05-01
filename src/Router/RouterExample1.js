import '../App.css';
import {useState} from "react";


function RouterExample1() {

    const initialState = [
        {id: Math.random(), value: 1, buttons: [1]},
        {id: Math.random(), value: 2, buttons: [1, 2]},
    ]
    const [count, setCount] = useState(initialState)
    const [inputValue, setInputValue] = useState([])

    const plusAndMinus = (id, value) => {
        const updateCount = count.map(el => el.id === id ? {...el, value: el.value + value} : el)
        setCount(updateCount)
    }
    const addCounter = () => {
      const updateCount = [...count, {id: Math.random(), value: inputValue, buttons: [1, 2]}]
        setCount(updateCount)
        setInputValue([])
    }

    return (
        <div className="App">
            <h3>RouterExample1</h3>
            <h2>Counter</h2>
            <input placeholder='add new counter and new value' value={inputValue} onChange={event => setInputValue(Number(event.target.value))}/>
            <button onClick={addCounter}>add counter</button>
            {count.map(el =>
                <div key={el.id}>
                    {el.buttons.map(valueButton => <button onClick={() => plusAndMinus(el.id, -valueButton)} key={valueButton}>{-valueButton}</button>)}
                    {el.value}
                    {el.buttons.map(valueButton => <button onClick={() => plusAndMinus(el.id, valueButton)} key={valueButton}>{valueButton}</button>)}
                </div>
            )}
        </div>
    );
}

export default RouterExample1;

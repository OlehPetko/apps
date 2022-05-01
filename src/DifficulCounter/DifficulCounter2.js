import '../App.css';
import {useState} from "react";


function DifficulCounter2() {


    const initialState = [
        {id: Math.random(), count: 1, buttons: [1]},
        {id: Math.random(), count: 2, buttons: [1, 2]},
        {id: Math.random(), count: 3, buttons: [1, 2, 3]},
    ]
    const [counter, setCounter] = useState(initialState)
    const [newCounter, setNewCounter] = useState([])

    const addCounter = () => {
      const updateCounter = [...counter, {id: Math.random(), count: newCounter, buttons: [1, 2, 3]}]
        setCounter(updateCounter)
    }
    return (
        <div className="App">
            <h3>Difficul Count2</h3>
            <input type='Number' value={newCounter} onChange={event => setNewCounter(event.target.value)}/>
            <button onClick={addCounter}>add counter</button>
            {counter.map(el =>
                <div key={el.id}>
                    {el.buttons.map(buttonValue => <button>{buttonValue}</button>)}
                    {el.count}
                    {el.buttons.map(buttonValue => <button>-{buttonValue}</button>)}
                </div>)}

        </div>
    );
}

export default DifficulCounter2;

import '../App.css';
import {useState} from "react";
import SimpleCounter2 from "./SimpleCounter2";
import SimpleCounter3 from "./SimpleCounter3";

function SimpleCounter() {
    const [count, setCount] = useState(0)

    const minusAndPlus = (value) => {
        const newCount = count + value
        setCount(newCount)
    }
    return (
        <div className="App">
            <h3>SimpleCounter</h3>
            <button onClick={() => minusAndPlus(-1)}>minus</button>
            {count}
            <button onClick={() => minusAndPlus(1)}>plus</button>
            <hr/>
            <SimpleCounter2/>
            <hr/>
            <SimpleCounter3 />

        </div>
    );
}

export default SimpleCounter;

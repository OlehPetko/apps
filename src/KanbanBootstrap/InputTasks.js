import '../App.css';

function InputTasks(props) {
    const {newTasks, setNewTasks, addTasks} = props

    return (
        <div className="App">
            <input type="text" placeholder='add new tasks' value={newTasks} onChange={event => setNewTasks(event.target.value)}/>
            <button onClick={addTasks}>add new task</button>
        </div>
    );
}

export default InputTasks;

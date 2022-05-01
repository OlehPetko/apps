import '../../App.css';

function InputNewTask(props) {

    const {newTasks, setNewTasks, addTask} = props

    return (
        <div className="App">
            <input value={newTasks} onChange={event => setNewTasks(event.target.value)}/>
            <button onClick={addTask}>add new task</button>

        </div>
    );
}

export default InputNewTask;

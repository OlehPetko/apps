import '../../App.css';


function InputTasksList(props) {
    const {newTask, setNewTask, addTask} = props

    return (
    <div>
        <input placeholder='add new task' value={newTask} onChange={event => setNewTask(event.target.value)}/>
        <button onClick={addTask}>add task</button>
    </div>



)
}

export default InputTasksList;

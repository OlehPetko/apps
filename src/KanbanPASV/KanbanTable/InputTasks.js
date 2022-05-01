import '../../App.css';


function InputTasks(props) {
    const{inputNewTask, setInputNewTask, addNewTask} = props

    return (
    <div>
        <input placeholder='add new task' value={inputNewTask} onChange={event =>  setInputNewTask(event.target.value)}/>
        <button className="btn btn-outline-success" type="submit" onClick={addNewTask}>ADD NEW TASK</button>

    </div>



)
}

export default InputTasks;

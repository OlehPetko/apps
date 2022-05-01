import '../../App.css';


function InputUpdateTasks(props) {
    const {task, cancelUpdate, updateTasks, setUpdateTask, updateNewTask} = props
    return (
        <div>
            {task.doneUpdate ?
                <button onClick={() => cancelUpdate(task.id)}>update task</button>
                :
                <div>
                    <input placeholder='update task please' value={updateTasks} onChange={event => setUpdateTask(event.target.value)}/>
                    <button onClick={() => updateNewTask(task.id)}>save</button>
                    <button onClick={() => cancelUpdate(task.id)}>cancel</button>
                </div>

            }

        </div>


    )
}

export default InputUpdateTasks;

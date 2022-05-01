import '../../App.css';


function Task(props) {

    const {tasks, status, del, moveTask, updateTasks, updateTask, setUpdateTask, saveUpdateTask} = props

    return (
        <div className="App">
            {tasks.filter(el => status === el.status)
                .map((el, index) =>
                    <h5>
                        <button onClick={() => moveTask(index, -1)}>UP</button>
                        {el.task}
                        <button onClick={() => moveTask(index, 1)}>DOWN</button>
                        <button onClick={() => del(el.id)}>DELETE</button>
                        {el.done ?
                            <button onClick={() => updateTasks(el.id)}>UPDATE</button>
                            :
                            <div>
                                <input placeholder='update task' value={updateTask}
                                       onChange={event => setUpdateTask(event.target.value)}/>
                                <button onClick={() => updateTasks(el.id)}>CANCEL</button>
                                <button onClick={() => saveUpdateTask(el.id)}>SAVE</button>
                            </div>
                        }
                    </h5>
                )}
        </div>
    );
}

export default Task;

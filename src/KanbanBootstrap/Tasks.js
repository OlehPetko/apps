import '../App.css';

function Tasks(props) {
    const {status, tasks, del, cancelDel, cancelUpdate, updateTasks, setUpdateTasks, updateTask} = props

    return (
        <div className="App">
            {tasks.filter(el => status === el.status).map((task, index) =>
            <div key={task.id}>
                {task.count}.
                {task.name}
                {task.done ?
                    <button onClick={() => cancelDel(task.id)}>delete</button>
                    :
                    <div>
                        <label> WHAT DO YOU WANT?</label>
                        <button onClick={() => del(task.id)}>yes delete?</button>
                        <label>OR</label>
                        <button onClick={() => cancelDel(task.id)}>no</button>
                    </div>
                }
                {task.done ?
                    <button onClick={() => cancelUpdate(task.id)}>update task</button>
                :
                <div>
                    <input type="text" placeholder='update task' value={updateTasks} onChange={event => setUpdateTasks(event.target.value)}/>
                    <button onClick={() => updateTask(task.id)}>yes update</button>
                    <button onClick={() => cancelUpdate(task.id)}>cancel</button>
                </div>
                }
            </div>
            )}

        </div>
    );
}

export default Tasks;

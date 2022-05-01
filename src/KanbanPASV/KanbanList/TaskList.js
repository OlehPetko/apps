import '../../App.css';
import InputUpdateTasks from "./InputUpdateTasks";

function TaskList(props) {

const {task, cancelDelete, del, cancelUpdate, updateTasks, setUpdateTask, updateNewTask, done, moveRigntAndLeft} = props

    return (<div className="card">
            <div className="card-body">
                <h5 className="card-title">{task.title}</h5>se
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button disabled={task.status === 'TODO'} onClick={() => moveRigntAndLeft(task.id, - 1)}>up</button>
                {task.doneDelete ?
                <button onClick={() => cancelDelete(task.id)}>delete</button>
                    :
                    <div>
                        <label>Do you want delete?</label>
                        <button onClick={() => del(task.id)}>yes delete</button>
                        <button onClick={() => cancelDelete(task.id)}>cancel</button>
                    </div>
                }
                <InputUpdateTasks task={task} cancelUpdate={cancelUpdate} updateTasks={updateTasks} setUpdateTask={setUpdateTask} updateNewTask={updateNewTask}/>
                <button disabled={task.status === 'DONE'} onClick={() => moveRigntAndLeft(task.id, 1)}>down</button>
                <button onClick={() => done(task.id)}>{task.doneTitle ? 'done' : 'ready'}</button>
            </div>
        </div>

    );
}

export default TaskList;

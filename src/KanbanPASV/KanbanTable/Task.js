import '../../App.css';

function Task(props) {

    const {task,  leftAndRight, cancelDelete, del, cancelUpdate, saveUpdateTask, inputUpdateTask, setInputUpdateTask, done} = props


    return (<div className="card">
            <div className="card-body">
                <h5 className="card-title">{task.name}</h5>se
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                    the card's content.</p>
                <button disabled={task.status === 'TODO'} type="button" className="btn btn-primary"
                        onClick={() => leftAndRight(task.id, -1)}>Left
                </button>
                <button disabled={task.status === 'DONE'} type="button" className="btn btn-secondary"
                        onClick={() => leftAndRight(task.id, 1)}>Right
                </button>
                {task.doneDelete ?
                    <button type="button" className="btn btn-danger"
                            onClick={() => cancelDelete(task.id)}>Delete</button>
                    :
                    <div>
                        <label htmlFor="floatingTextarea">Do you want to delete?</label>
                        <button type="button" className="btn btn-danger" onClick={() => del(task.id)}>YES Delete
                        </button>
                        <button type="button" className="btn btn-success" onClick={() => cancelDelete(task.id)}>Cancel
                        </button>
                    </div>
                }
                {task.doneUpdated ?
                    <button type="button" className="btn btn-warning" onClick={() => cancelUpdate(task.id)}>Update?</button>
                    :
                    <div>
                        <label htmlFor="floatingTextarea">Do you want to update task?</label>
                        <input type="text" placeholder='update task' value={inputUpdateTask} onChange={event => setInputUpdateTask(event.target.value)}/>
                        <button type="button" className="btn btn-warning" onClick={() => saveUpdateTask(task.id)}>Yes Update</button>
                        <button type="button" className="btn btn-success" onClick={() => cancelUpdate(task.id)}>Cancel</button>
                    </div>
                }
                <button type="button" className="btn btn-success" onClick={() => done(task.id)}>{task.done? 'Done' : 'Ready' }</button>
            </div>
        </div>

    );
}

export default Task;

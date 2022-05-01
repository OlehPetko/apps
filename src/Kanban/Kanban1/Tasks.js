import '../../App.css';

function Tasks(props) {

    const {tasks, status, del, delTask, updateAddTask, updateTasks, setUpdateTask, done} = props

    return (
        <div className="App">
            {tasks.filter(el => el.status === status).map((el, index) =>
                <div key={el.id}>
                    {el.task}
                    {el.done ? '----PROGRESS' : '----DONE'}
                    {el.done ?
                        <button onClick={() => delTask(el.id)}>delete</button>
                        :
                        <div>
                            <button onClick={() => del(el.id)}>yes</button>
                            <button onClick={() => delTask(el.id)}>no</button>
                            <h5>Do you want delete?</h5>
                        </div>
                    }
                    <button disabled={status === 'todo'}>up</button>
                    <button disabled={status === 'review'}>down</button>
                    <button onClick={() => done(el.id)}>{el.done ? 'done' : 'again progress?'}</button>
                    {el.done ? <button onClick={() => delTask(el.id)}>update</button>
                    :
                        <div>
                            <input placeholder='add new task' value={updateTasks} onChange={event => setUpdateTask(event.target.value) }/>
                            <button onClick={() => updateAddTask(el.id)}>save</button>
                            <button onClick={() => delTask(el.id)}>cancel</button>
                        </div>
                    }
                </div>
            )}
        </div>
    );
}

export default Tasks;

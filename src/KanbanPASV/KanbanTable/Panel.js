import '../../App.css';
import Task from "./Task";

function Panel(props) {
    const colorMap = {
        TODO: 'border-secondary',
        PROGRESS: 'border-primary',
        REVIEW: 'border-warning',
        DONE: 'border-success'
    }

const {status, tasks, leftAndRight, cancelDelete, del, cancelUpdate,
    saveUpdateTask, inputUpdateTask,
    setInputUpdateTask, done} = props

    return (
        <div className>
            <h2 className={`border-bottom border-4 ${colorMap[status]} pb-2`}>{status}</h2>
            {tasks.filter(task => status === task.status).map(task =>
            <div key={task.id}>
                <Task task={task} leftAndRight={leftAndRight} cancelDelete={cancelDelete} del={del} done={done}
                      cancelUpdate={cancelUpdate} saveUpdateTask={saveUpdateTask} inputUpdateTask={inputUpdateTask}
                      setInputUpdateTask={setInputUpdateTask}/>
            </div>
            )}



        </div>
    );
}


export default Panel;

import '../../App.css';
import TaskList from "./TaskList";


function PanelList(props) {
    const colorMap = {
        TODO: 'border-secondary',
        PROGRESS: 'border-primary',
        REVIEW: 'border-warning',
        DONE: 'border-success'
    }
    const {status, tasks, cancelDelete, del, cancelUpdate, updateTasks, setUpdateTask, updateNewTask, done, moveRigntAndLeft} = props
    return (
        <div className>
            <h2 className={`border-bottom border-4 ${colorMap[status]} pb-2`}>{status}</h2>
            {tasks.filter(el => status === el.status).map(task =>
            <div key={task.id}>
                <TaskList task={task} cancelDelete={cancelDelete} del={del} cancelUpdate={cancelUpdate} done={done}
                          updateTasks={updateTasks} setUpdateTask={setUpdateTask} updateNewTask={updateNewTask} moveRigntAndLeft={moveRigntAndLeft}/>
            </div>
            )}
        </div>
    );
}

export default PanelList;

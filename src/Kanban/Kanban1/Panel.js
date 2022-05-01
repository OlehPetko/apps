import '../../App.css';
import Tasks from "./Tasks";

function Panel(props) {


    const {tasks, statuses, del, delTask, updateAddTask, updateTasks, setUpdateTask, done} = props
    return (
        <div className="App">
            {statuses.map(status =>
                <div key={status}>
                    <h6>{status}</h6>
                  <Tasks tasks={tasks} status={status} del={del} delTask={delTask}
                         updateAddTask={updateAddTask} updateTasks={updateTasks} setUpdateTask={setUpdateTask} done={done}/>
                </div>
            )}
        </div>
    );
}

export default Panel;

import './App.css';
import {useState} from "react";
import SimpleCounter from "./SimpleCounter/SimpleCounter";
import Counter from "./Counter/Counter";
import DifficulCounter from "./DifficulCounter/DifficulCounter";
import ExampleInput from "./ExampleInput/ExampleInput";
import PremierLigaEngland from "./PremierLigaEngland/PremierLigaEngland";
import RouterExample from "./Router/RouterExample";
import TodoList from "./TodoList/Todolist";
import {Link, Routes, Route} from "react-router-dom";
import Kanban from "./Kanban/Kanban";
import Likes from "./Likes/Likes";
import KanbanBootstrap from "./KanbanBootstrap/KanbanBootstrap";
import KanbanPASV from "./KanbanPASV/KanbanTable/KanbanPASV";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import KanbanList from "./KanbanPASV/KanbanList/KanbanList";

function App() {
    const [counters, setCounters] = useState('')
    return (
        <div className="App">
            <button onClick={() => setCounters('RouterExample')}>RouterExample</button>
            <nav>
                <Link to='/routerexample'>RouterExample</Link>
            </nav>
            <button onClick={() => setCounters('SimpleCounter')}>SimpleCounter</button>
            <button onClick={() => setCounters('Counter')}>Counter</button>
            <button onClick={() => setCounters('DifficulCounter')}>DifficulCounter</button>
            <button onClick={() => setCounters('ExampleInput')}>ExampleInput</button>
            <button onClick={() => setCounters('PremierLigaEngland')}>PremierLigaEngland</button>
            <button onClick={() => setCounters('TodoList')}>TodoList</button>
            <button onClick={() => setCounters('Kanban')}>Kanban</button>
            <button onClick={() => setCounters('Likes')}>Likkes</button>
            <button onClick={() => setCounters('KanbanBootstrap')}>KanbanBootstrap</button>
            <button  onClick={() => setCounters('KanbanTable')}>KanbanTable</button>
            <button onClick={() => setCounters('KanbanList')}>KanbanList</button>
            <hr/>
            {counters === 'SimpleCounter' && <SimpleCounter/>}
            {counters === 'Counter' && <Counter/>}
            {counters === 'DifficulCounter' && <DifficulCounter/>}
            {counters === 'ExampleInput' && <ExampleInput/>}
            {counters === 'PremierLigaEngland' && <PremierLigaEngland/>}
            {counters === 'RouterExample' && <RouterExample/>}
            {counters === 'Kanban' && <Kanban />}
            {counters === 'Likes' && < Likes />}
            {counters ==='KanbanBootstrap' && <KanbanBootstrap />}
            {counters === 'KanbanList' && <KanbanList />}
            {counters === 'KanbanTable' && <KanbanPASV />}
            <Routes>
                <Route path='/routerexample' element={<RouterExample/>}/>
            </Routes>
            {counters === 'TodoList' && <TodoList/>}



        </div>
    );
}

export default App;

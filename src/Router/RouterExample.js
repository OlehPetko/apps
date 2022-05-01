import '../App.css';
import RouterExample1 from "./RouterExample1";
import RouterExample2 from "./RouterExample2";
import {Link, Routes, Route} from "react-router-dom";
import RouterExample3 from "./RouterExample3";


function RouterExample() {


    return (
        <div className="App">
            <h3>RouterExample</h3>
            <nav>
                <Link to='/routerexample1'>RouterExample1</Link>
            </nav>
            <nav>
                <Link to='/routerexample2'>RouterExample2</Link>
            </nav>
            <nav>
                <Link to='/routerexample3'>RouterExample3</Link>
            </nav>

            <Routes>
                <Route path='/routerexample1' element={<RouterExample1/>}/>
                <Route path='/routerexample3' element={<RouterExample3/>}/>
                <Route path='/routerexample2' element={<RouterExample2/>}/>
            </Routes>


        </div>
    );
}

export default RouterExample;

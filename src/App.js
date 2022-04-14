import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter,
    Switch,
    Route,
    Routes,
    Link,
} from 'react-router-dom';
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";
import TTable from "./Components/MainFraim/Table/Table";
import {AppDragDropDemo} from "./Components/MainFraim/Table/Drop";
import DataWindow from "./Components/MainFraim/Table/DataWindow";

function App() {

  return (
    <div className="App">
        <DndProvider backend={HTML5Backend}>
            <BrowserRouter>
                <div className="Main_Fraim">
                    <Menu/>
                    <div>
                        <Routes>
                            <Route path="/" exact element={<div>Rec</div>} />
                            <Route path="/tes" exact element={<div><TTable/></div>} />
                            <Route path="/teees" exact element={<div><DataWindow/></div>}/>
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </DndProvider>
    </div>
  );
}

function Menu(){
    return (
        <div className="Menu_bar">
            <MenuButton url="/tes" name="Lol"/>
            <MenuButton url="/teees" name="Kek"/>
        </div>
    );
}

function MenuButton(props){
    return(
    <div className="Menu_block">
        <Link to={props.url}>{props.name}</Link>
    </div>
    );
}

export default App;

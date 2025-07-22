import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Pomodoro from "./pages/Pomodoro";
import Sidebar from "./components/Sidebar";
import Cronometer from "./pages/Cronometer";

export default function App() {
    return (
        <div className="app">
            <Sidebar></Sidebar>
            <div>
                <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/pomodoro" element={<Pomodoro/>} />
                <Route path="/cronometro" element={<Cronometer/>} />
                <Route path="*" element={<h1>Not Found</h1>}/>
            </Routes> 
            </div>
        </div>
    )
}
import './App.css';
import './Styles.css'
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";

function App() {



    return (
        <>
            <NavBar/>
            <div className="container fade-in-text">
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/about" element={<About/>} />

                </Routes>
            </div>

        </>
  );
}

export default App;

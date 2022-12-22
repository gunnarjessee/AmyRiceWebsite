import './App.css';
import './Styles.css'
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import GetAQuote from "./pages/GetAQuote";

function App() {



    return (
        <>
            <NavBar/>
            <div className="container fade-in-text">
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/getaquote" element={<GetAQuote/>} />
                </Routes>
            </div>

        </>
  );
}

export default App;

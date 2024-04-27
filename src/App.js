import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import About from "./components/About";
import Socials from "./components/Socials";
import "./App.css"

function App() {
    return (
        <div className="App bg-dark" data-bs-theme="dark">
            <NavBar/>
            <Home/>
            <Skills/>
            <About/>
            <Socials/>
            <div className="text-white d-flex justify-content-center align-items-center pb-2">
                <p>Viktor Hertfelder 2023</p>
            </div>
        </div>
    );
}

export default App;

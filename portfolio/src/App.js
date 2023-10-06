import  './App.css'
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
        <Header/>
        <main className="main">
            <Home/>
            <About/>
            <Skills/>
            <ToastContainer/>
            <Contact/>
        </main>
    </>
  );
}

export default App;

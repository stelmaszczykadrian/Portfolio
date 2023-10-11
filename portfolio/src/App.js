import  './App.css'
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import Work from "./components/Work/Work";
import Services from "./components/services/Services";

function App() {
  return (
    <>
        <Header/>
        <main className="main">
            <Home/>
            <About/>
            <Services/>
            <Skills/>
            <Work/>
            <ToastContainer/>
            <Contact/>
            <Footer/>
            <ScrollUp/>
        </main>
    </>
  );
}

export default App;

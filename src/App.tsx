import "./styles/App.css";
import Introduction from "./components/Introduction";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Connect from "./components/Connect";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Introduction />
      <Skills />
      <Projects />
      <Connect />
      <Footer />
    </>
  );
}

export default App;

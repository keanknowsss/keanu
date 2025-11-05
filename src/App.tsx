import "./styles/App.css";
import Introduction from "./components/Introduction";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Connect from "./components/Connect";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Introduction />
      <Skills />
      <Projects />
      <Connect />
      <Footer />

      <Toaster
        position="top-right"
        containerStyle={{
          zIndex: 99999, // Higher than modal's z-50
        }}
        toastOptions={{
          duration: 4000,
          style: {
            zIndex: 99999,
          },
        }}
      />
    </>
  );
}

export default App;

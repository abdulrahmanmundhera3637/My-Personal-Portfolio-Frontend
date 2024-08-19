import React from "react";
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/Techstack/Techstack";
import WorkExp from "./pages/WorkExp/WorkExp";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import Tada from "react-reveal/Tada";
import MobileNav from "./components/MobileNav/MobileNav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  const [theme] = useTheme();

  return (
    <>
      <div id={theme}>
        <ToastContainer />
        <MobileNav />
        <Layout />
        <div className="container">
          <About />
          <Education />
          <Techstack />
          <Projects />
          <WorkExp />
          <Contact />
        </div>
        <div
  className="footer pb-3 ms-3"
  style={{
    backgroundColor: '#1e1e2c', 
    color: '#ffffff',         
    padding: '1rem',            
    borderRadius: '8px',       
    textAlign: 'center'        
  }}
>
  <Tada>
    <h4 style={{ marginLeft: "0px" }}>
      Hafiz 😍 Abdul Rahman &copy; 2024
    </h4>
  </Tada>
</div>

      </div>
      <ScrollToTop
  smooth
  color="#ff0016" 
  style={{
    backgroundColor: "#b6c3d7", 
    borderRadius: "50%", 
    width: "40px", 
    height: "40px", 
    right: "16px", 
    bottom: "90px", 
    display: "flex", 
    alignItems: "center",
    justifyContent: "center", 
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", 
    transition: "background-color 0.3s ease, transform 0.3s ease", 
  }}
  className="scroll-to-top"
/>

<style jsx>{`
  .scroll-to-top svg {
    width: 24px; 
    height: 24px; 
    color: #f29f67; 
  }

  .scroll-to-top:hover {
    background-color: #333; 
    transform: scale(1.1); 
  }

  @media (max-width: 768px) {
    .scroll-to-top {
      right: 5px; 
      bottom: 10px; 
      width: 40px;
      height: 40px; 
    }

    .scroll-to-top svg {
      width: 20px;
      height: 20px; 
    }
  }
`}</style>

    </>
  );
}

export default App;

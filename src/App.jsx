import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import './App.css'
import Companies from "./components/Companies/Companies";
import YoutubeVideos from "./components/YoutubeVideos/YoutubeVideos";
import Mission from "./components/Mission/Mission";
import Contact from "./components/Contact/Contact";
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";
import Vision from "./components/Vision/Vision";
import Courses from "./components/Courses/Courses";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
      <Header/>
      <Hero/>
      </div>
      {/* <Companies/> */}
      <Courses/>
      <YoutubeVideos/>
      <About/>
      <Mission/>
      <Vision/>
      {/* <Contact/> */}
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;

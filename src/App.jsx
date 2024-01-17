import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import './App.css'
import Companies from "./components/Companies/Companies";
import YoutubeVideos from "./components/YoutubeVideos/YoutubeVideos";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
      <Header/>
      <Hero/>
      </div>
      <Companies/>
      <YoutubeVideos/>
      <Value/>
      <Contact/>
    </div>
  );
}

export default App;

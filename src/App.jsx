import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import './App.css'
import Companies from "./components/Companies/Companies";
import YoutubeVideos from "./components/YoutubeVideos/YoutubeVideos";
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
    </div>
  );
}

export default App;

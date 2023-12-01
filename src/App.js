import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import TopAlbums from "./components/TopAlbums/TopAlbums";
import NewAlbums from "./components/NewAlbums/NewAlbums";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <TopAlbums />
      <NewAlbums />
    </div>
  );
}

export default App;

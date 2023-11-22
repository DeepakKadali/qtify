import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import Section from "./components/Section/Section"
function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Section />
    </div>
  );
}

export default App;

import './App.css';
import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Feedback from './components/Feedback';
import Services from './components/Services';
import Values from './components/Values';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Values/>
      <Services/>
      <Portfolio/>
      <Feedback/>
      <Pricing/>
      <Contact/>
    </div>
  );
}

export default App;
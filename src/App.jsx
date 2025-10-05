import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import HowItWorks from './components/HowItWorks';
import AboutUs from './components/AboutUs';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path='/about-us' element={<AboutUs />} />
      </Routes>
      <Footer/>
    </div>

  );
}

export default App;
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Products from './pages/Products';
import About from './pages/About'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="appp">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/About" element={<About />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Products from './pages/Products';

const App = () => {
  return (
    <div className="appp">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Products" element={<Products />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

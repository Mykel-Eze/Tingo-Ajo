import './assets/css/styles.css';
import './assets/css/fonts.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import ApplyNowModal from './components/ApplyNowModal';


function App() {
  useEffect(() => {
    var elemsModal = document.querySelectorAll('.modal');
    M.Modal.init(elemsModal);
  });
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>

        <Footer />

        <ApplyNowModal />
      </BrowserRouter>
    </div>
  );
}

export default App;

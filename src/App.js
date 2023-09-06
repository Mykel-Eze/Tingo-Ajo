import './assets/css/styles.css';
import './assets/css/fonts.css';
import 'materialize-css/dist/css/materialize.min.css';
// import M from 'materialize-css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

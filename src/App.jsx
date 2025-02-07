import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Homecomponent from './components/Homefolder/Homecomponent';
import Header from './components/Headerfolder/Header';
import Contact from './components/contactfolder/Contact';
import Register from './components/Register';
import Home4 from './components/Homefolder/Home4';
import About from './components/Aboutfolder/About';
import Testadmin from './components/Dashboardfolder/Testadmin';
import MainReg from './components/MainReg';

// Component to handle conditional rendering of Home4
function ConditionalHome4() {
  const location = useLocation();
  return location.pathname !== '/admin' ? <Home4 /> : null;
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Homecomponent />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/register' element={<Register />} />
        <Route path='/admin' element={<Testadmin />} />
        <Route path='/mainreg' element={<MainReg />} />
      </Routes>
      <ConditionalHome4 />
    </Router>
  );
}

export default App;

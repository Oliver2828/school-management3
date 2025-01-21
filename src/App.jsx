import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
// import Home from './components/Home'
// import Landing from './components/Landing'
import Homecomponent from './components/Homefolder/Homecomponent'
import Header from './components/Headerfolder/Header'
import Contact from './components/contactfolder/Contact'
import Register from './components/Register'
// import AppDashboard from './components/Dashboardfolder/AppDashboard'
import Home4 from './components/Homefolder/Home4'
import About from './components/Aboutfolder/About'
import Testadmin from './components/Dashboardfolder/Testadmin'

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
        {/* <Route path='/landing' element={<Landing />} /> */}
        <Route path='/register' element={<Register />} />
        <Route path='/admin' element={<Testadmin />} />
        {/* <Route path='/appDashboard' element={<AppDashboard />} /> */}
      </Routes>
      <ConditionalHome4 />
    </Router>
  )
}

export default App

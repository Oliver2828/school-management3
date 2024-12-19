import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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


function App() {
  return (
    
    <Router>
      <Header/>
      <Routes>
        <Route  path='/' element={<Homecomponent/>}></Route>
        <Route  path='/contact' element={<Contact/>}></Route>
        <Route  path='/about' element={<About/>}></Route>
        {/* <Route  path='/landing' element={<Landing/>}></Route> */}
        <Route  path='/register' element={<Register/>}></Route>
        <Route  path='/admin' element={<Testadmin/>}></Route>

        {/* <Route  path='/appDashboard' element={<AppDashboard/>}></Route> */}

      </Routes>
      <Home4/>
    </Router>
  
  )

}

export default App
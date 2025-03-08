import React from 'react'
import LandingPage from './vendorDashboard/pages/LandingPage'
import {Routes, Route} from 'react-router-dom'

import NotFound from './vendorDashboard/components/NotFound'
import NavBar from './vendorDashboard/components/NavBar'
import Login from './vendorDashboard/components/forms/Login'

import "./App.css"
const App = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element = {<LandingPage />}/>
      <Route path='/*' element = {<NotFound />}/>
      </Routes>
    </div>
  )
}

export default App
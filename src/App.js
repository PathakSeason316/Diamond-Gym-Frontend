import React from 'react'
import {Route, Routes} from 'react-router-dom'

import LoginPage from './components/LoginPage'
import HomePage from './components/HomePage'


const App = () => {
  return (
      <div>
        <Routes>
          <Route path ="/" element={<LoginPage/>} exact />
          <Route path = "/home" element = {<HomePage/>} />
        </Routes>
    </div>
  )
}

export default App
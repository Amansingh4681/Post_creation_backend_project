import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Createpost from './pages/Createpost'
import Feed from './pages/Feed'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/create-post' element={<Createpost/>}/>
        <Route path='/feed' element={<Feed/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
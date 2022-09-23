import { useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path='/'></Route>
      <Route path='/login'></Route>
      <Route path='/register'></Route>
      <Route path='/language'></Route>
      <Route path='/difficulty'></Route>
      <Route path='/game'></Route>
      <Route path='*'></Route>
    </Routes>
  )
}

export default App

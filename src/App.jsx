import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import TestPage from './TestPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
    <Route path="*"  element={<TestPage />}>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App

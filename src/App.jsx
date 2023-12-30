import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import TestPage from './TestPage'
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import Button from '@mui/joy/Button';


const theme = extendTheme({ cssVarPrefix: 'demo' });
function App() {
  const [count, setCount] = useState(0)

  return (

    <CssVarsProvider defaultMode="dark"
      // the props below are specific to this demo,
      // you might not need them in your app.
      //
      colorSchemeSelector="#root"
      //
      // the local storage key to use
      modeStorageKey="root"
      theme={theme}
    >
      <TestPage />
    </CssVarsProvider>
  )
}

export default App

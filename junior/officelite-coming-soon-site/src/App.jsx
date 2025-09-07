import React, { useState } from 'react'
import HomePage from './components/HomePage'
import SignUpPage from './components/SignUpPage';

const pageContext = React.createContext();

function App() {

  return (
    // <HomePage />
    <SignUpPage />
  )
}

export default App

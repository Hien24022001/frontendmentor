import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import SubscribePage from './pages/SubscribePage'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/subscribe' element={<SubscribePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StartMenu from 'pages/StartMenu'
import Questions from 'pages/Questions'
import Result from 'pages/Result'
import Header from 'components/Header'

function App() {
  const [correctCount, setCorrectCount] = useState(0);
  const [headerContent, setHeaderContent] = useState({ title: '', icon: '' });

  const addPoint = () => {
    setCorrectCount((prev) => prev + 1)
  }

  const resetPoint = () => {
    setCorrectCount(0);
  }

  return (
    <div className='pattern-background bg-gray-50 dark:bg-blue-900 text-blue-900 dark:text-white'>
      <Header 
        title={headerContent.title} 
        icon={headerContent.icon} 
      />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StartMenu />} />
          <Route path='/questions' element={<Questions addPoint={addPoint} setHeaderContent={setHeaderContent} />} />
          <Route path='/result' element={<Result point={correctCount} resetPoint={resetPoint} setHeaderContent={setHeaderContent} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

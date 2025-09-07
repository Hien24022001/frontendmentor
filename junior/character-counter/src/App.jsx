import React, { useEffect, useState } from 'react'
import Logo from './assets/images/logo-dark-theme.svg'
import SunIcon from './assets/images/icon-sun.svg'
import Form from './components/Form'
import Statistics from './components/Statistics'

function App() {
  const [values, setValues] = useState({
        text: '',
        isExcludeSpace: false,
        isSetCharLimit: false,
        charLimit: 300,
    })
  const [data, setData] = React.useState({
    characters: 0,
    words: 0,
    sentences: 0,
    letter_density: {}
  })

  useEffect(() => {
    const { text, isExcludeSpace } = values;
    const textToAnalyze = isExcludeSpace ? text.replace(/\s+/g, '') : text;
    const charCount = textToAnalyze.length;
    const wordCount = text.split(/\s+/).filter(Boolean).length;
    const sentenceCount = text.split(/[.!?]+/).map(s => s.trim()).filter(Boolean).length;
    const letterDensity = {};
    for (let char of textToAnalyze) {
      if (char === ' ' || char === '.') continue;
      letterDensity[char.toUpperCase()] = (letterDensity[char.toUpperCase()] || 0) + 1;
    }
    const sortedLetterDensity = Object.fromEntries(
      Object.entries(letterDensity).sort((a, b) => b[1] - a[1])
    );
    setData({
      characters: charCount,
      words: wordCount,
      sentences: sentenceCount,
      letter_density: sortedLetterDensity
    });
  }, [values.text, values.isExcludeSpace, values.isSetCharLimit, values.charLimit])

  return (
    <div className='flex justify-center min-h-screen bg-neutral-900 pb-8 lg:pt-8 lg:pb-16 text-neutral-100'>
      <div className='flex flex-col gap-10 lg:gap-12 w-full max-w-[990px]'>
        <header className='flex justify-between items-center p-4 md:px-8 md:py-4'>
          <img src={Logo} />
          <span className='flex items-center justify-center w-[32px] h-[32px] bg-neutral-700 rounded-lg'>
            <img src={SunIcon} className='w-[20px] h-[20px]' />
          </span>
        </header>
        <div className='flex justify-center px-4 md:px-8'>
          <h2 className='text-preset-1-mobile md:(text-preset-1) text-center md:w-[510px]'>Analyze your text in real-time.</h2>
        </div>
        <Form values={values} setValues={setValues} />
        <Statistics data={data} isExcludeSpace={values.isExcludeSpace} />
      </div>
    </div>
  )
}

export default App

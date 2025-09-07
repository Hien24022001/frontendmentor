import React, { useEffect, useState } from 'react'
import IconMoonDark from 'assets/images/icon-moon-dark.svg'
import IconMoonLight from 'assets/images/icon-moon-light.svg'
import IconSunDark from 'assets/images/icon-sun-dark.svg'
import IconSunLight from 'assets/images/icon-sun-light.svg'

function DarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  let iconMoon, iconSun;
  if (!isDarkMode) {
    iconMoon = IconMoonDark;
    iconSun = IconSunDark;
  } else {
    iconMoon = IconMoonLight;
    iconSun = IconSunLight;
  }

  const toogleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  }

  useEffect(() => {
    if (isDarkMode) {
      document.querySelector('body').classList.add('dark')
    } else {
      document.querySelector('body').classList.remove('dark')
    }
  }, [isDarkMode])

  return (
    <div 
      className='flex gap-2 items-center md:gap-4' 
      onClick={toogleDarkMode}
    >
        <img src={iconSun} className='w-4 h-4 md:w-6 md:h-6' />
        <div className='p-1 w-8 h-5 rounded-[999px] bg-purple-600 relative md:w-[48px] md:h-[28px]'>
            <div className={`w-3 h-3 bg-white rounded-full absolute top-1 ${isDarkMode ? 'right-1' : 'left-1'} md:w-5 md:h-5`}></div>
        </div>
        <img src={iconMoon} className='w-4 h-4 md:w-6 md:h-6' />
    </div>
  )
}

export default DarkMode
import React, { useEffect, useState } from 'react'
import Logo from '../assets/images/logo.svg'
import MoonIcon from '../assets/images/icon-moon.svg'
import SunIcon from '../assets/images/icon-sun.svg'

function Header() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(prev => !prev);
    };

    useEffect(() => {
        if (isDarkMode) {
            document.querySelector('html')?.classList.add('dark');
        }
        else {
            document.querySelector('html')?.classList.remove('dark');
        }
    }, [isDarkMode])

    return (
        <header 
            className='flex justify-between items-center px-3 py-2 bg-neutral-0 dark:bg-neutral-800 rounded-[20px] border border-neutral-200 dark:border-none'>
            <img src={Logo} />
            <span 
                className='flex justify-center items-center w-[50px] h-[50px] bg-neutral-100 dark:bg-neutral-700 rounded-xl cursor-pointer' 
                onClick={toggleDarkMode}
            >
                <img src={isDarkMode ? SunIcon : MoonIcon} className='w-[22px] h-[22px]' />
            </span>
        </header>
    )
}

export default Header
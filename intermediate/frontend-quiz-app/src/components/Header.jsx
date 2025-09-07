import React from 'react'
import DarkMode from 'components/DarkMode';

function Header({ title, icon }) {
    return (
        <header className='flex justify-center items-center'>
            <div className='w-full px-6 py-4 flex justify-between items-center md:w-[640px] md:pt-[40px] xl:w-[1157px] xl:pt-[83px]'>
                <div className='flex gap-4 items-center'>
                    {icon && <img src={icon} className='w-[40px] h-[40px]' /> }
                    <span className='text-preset-4'>{title}</span>
                </div>
                <DarkMode />
            </div>
        </header>
    )
}

export default Header
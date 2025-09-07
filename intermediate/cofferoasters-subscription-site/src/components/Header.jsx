import React, { useState } from 'react'
import logo from '../assets/shared/desktop/logo.svg'
import menuIcon from '../assets/shared/mobile/icon-hamburger.svg'
import closeIcon from '../assets/shared/mobile/icon-close.svg'
import { Link } from 'react-router-dom'
import { createPortal } from 'react-dom';

function Header() {
  const [isShowMenu, setIsShowMenu] = useState(false);

  return (
    <>
        <header className='px-6 h-[90px] flex items-center justify-center'>
            <div className='flex w-full items-center justify-between'>
                <img src={logo} className='h-[18px]' />
                {
                    isShowMenu ?
                    <img src={closeIcon} onClick={() => setIsShowMenu(false)} /> :
                    <img src={menuIcon} className='md:hidden' onClick={() => setIsShowMenu(true)} />
                }
                <div className='hidden md:flex items-center gap-8 text-body text-grey'>
                    <Link to='/'>HOME</Link>
                    <Link to='/about'>ABOUT US</Link>
                    <Link to='/subscribe'>CREATE YOUR PLAN</Link>
                </div>
            </div>
        </header>
        {isShowMenu &&
            createPortal(
                <div className='fixed top-90px left-0 right-0 bottom-0 z-[1000]'>
                    <div className='h-[calc(100vh-90px)] '>
                        <div className='flex pt-10 gap-8 flex-col items-center text-preset-4 bg-light-cream'>
                            <Link to='/'>Home</Link>
                            <Link to='/about'>About Us</Link>
                            <Link to='/subscribe'>Create Your Plan</Link>
                        </div>
                        <div className='gradient-menu h-full'></div>
                    </div>
                </div>,
                document.getElementById('root')
            )    
        }
    </>
  )
}

export default Header
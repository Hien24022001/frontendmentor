import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import logo from '../assets/images/logo.svg';
import menuIcon from '../assets/images/icon-hamburger.svg';
import closeIcon from '../assets/images/icon-close-menu.svg';

function Header() {
	const [isShowMenu, setIsShowMenu] = useState(false);

	const toggleMenu = () => {
		setIsShowMenu((prev) => !prev);
	}

	function Navbar({ toggleMenu }) {
		return createPortal(
			<div className='fixed z-[1000] top-0 left-0 bottom-0 right-0 bg-linear-(--linear-gradient) px-6 lg:hidden'>
				<div className='flex flex-col gap-8 relative top-8'>
						<div className='flex justify-between items-center'>
							<img src={logo} />
							<img src={closeIcon} onClick={toggleMenu} />
						</div>
						<div className='flex flex-col gap-6 py-8 px-6 md:px-12 bg-white border border-gray-200 rounded-lg relative z-50'>
							<span className='text-preset-5-medium'>About</span>
							<p className='w-full h-[1px] bg-gray-950 opacity-10'></p>
							<span className='text-preset-5-medium'>Discover</span>
							<p className='w-full h-[1px] bg-gray-950 opacity-10'></p>
							<span className='text-preset-5-medium'>Get Started</span>
						</div>
					</div>
			</div>,
			document.querySelector('body')
		)
	}

	return (
		<header className="py-8 h-[300px] md:h-[400px] flex justify-center items-start bg-[url('./assets/images/image-hero-mobile.jpg')] md:bg-[url('./assets/images/image-hero-desktop.jpg')] bg-no-repeat bg-center bg-cover">
			{
				isShowMenu ? (
					<Navbar toggleMenu={toggleMenu} />
				) : (
					<div className='w-[327px] md:w-[672px] lg:w-[1109px] flex justify-between items-center'>
						<img src={logo} />
						<img src={menuIcon} onClick={toggleMenu} className='lg:hidden' />
						<div className='hidden lg:flex gap-8 items-center text-white'>
							<span className='text-preset-9'>About</span>
							<span className='text-preset-9'>Discover</span>
							<span className='text-preset-9'>Get Started</span>
						</div>
					</div>
				)
			}
		</header>
	)
}

export default Header

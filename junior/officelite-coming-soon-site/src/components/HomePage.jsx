import React from 'react'
import logo from '../assets/shared/logo.svg'
import PricingCard from './PricingCard'
import { pricings } from '../constants'
import Countdown from './Countdown'
import Hero from './Hero'

function HomePage() {
	return (
		<div className='min-h-screen relative z-20 overflow-x-hidden bg-neutral-50'>
			<div className='absolute top-0 left-1/2 -translate-x-1/2 z-10 bg-image-header md:left-0 md:translate-x-0'></div>
			<div className='flex flex-col gap-[80px] md:gap-[112px] lg:gap-[140px] lg:items-center'>
				<nav className='flex justify-center md:justify-start pt-10 md:px-10 lg:pt-[80px] lg:w-[1110px]'>
					<img src={logo} />
				</nav>
				<Hero />
				<section className='flex justify-center relative'>
					<div className='flex flex-col gap-[80px] w-[343px] relative z-20 md:w-[689px] lg:w-[1110px]'>
						<div className='flex flex-col gap-6 md:gap-5 lg:grid lg:grid-cols-3 lg:gap-8'>
							{
								pricings.map((item) => (
									<PricingCard {...item} key={item.id} />
								))
							}
						</div>
						<Countdown />
					</div>
					<div className='absolute z-10 top-[744px] left:0 bg-neutral-900 md:top-[492px] lg:top-[244px] bg-image-footer'></div>
				</section>
			</div>
		</div>
	)
}

export default HomePage
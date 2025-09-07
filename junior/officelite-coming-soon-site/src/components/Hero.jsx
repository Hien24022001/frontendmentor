import React from 'react'
import illustrationChart from '../assets/home/illustration-charts.svg'

function Hero() {
	return (
		<section className='flex flex-col gap-12 px-4 items-center md:flex-row md:gap-0 md:justify-between md:px-10 lg:w-[1110px]'>
			<img src={illustrationChart} className='w-[200px] md:w-[280px] md:order-2 lg:w-[475px]' />
			<div className='flex flex-col gap-6 items-center md:w-[345px] md:order-1 md:items-start lg:w-[540px]'>
				<div className='flex flex-col gap-6'>
					<h2 className='text-preset-1-tablet text-center md:text-left lg:text-[56px]'>
						A simple solution to complex tasks is coming soon
					</h2>
					<p className='text-preset-4 text-center text-neutral-500 md:text-left md:text-lg'>
						Say goodbye to inefficient juggling of multiple apps, teams, and projects. Officelite is the new collaboration platform built with an intuitive interface to improve productivity.
					</p>
				</div>
				<button className='btn'>Get Started</button>
			</div>
		</section>
	)
}

export default Hero
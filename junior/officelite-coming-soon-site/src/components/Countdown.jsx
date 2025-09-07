import React, { useEffect, useState } from 'react'

const targetDate = new Date("2025-06-30 00:00:00");

function Countdown({ pattern = 1 }) {
	const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

	useEffect(() => {
		const calcluateTimeLeft = () => {
			const now = new Date();
			const difference = targetDate - now;

			if (difference <= 0) {
				setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
				return;
			}

			const days = Math.floor(difference / (24 * 60 * 60 * 1000));
			const hours = Math.floor(difference % (24 * 60 * 60 * 1000) / (60 * 60 * 1000));
			const minutes = Math.floor(difference % (60 * 60 * 1000) / (60 * 1000));
			const seconds = Math.floor(difference % (60 * 1000) / 1000);
			setTimeLeft({ days, hours, minutes, seconds });
		}

		calcluateTimeLeft();
		const timerId = setInterval(calcluateTimeLeft, 1000);
		return () => {
			clearInterval(timerId);
		}
	}, [])

	const countdownData = [
		{
			label: 'days',
			value: timeLeft.days
		},
		{
			label: 'hours',
			value: timeLeft.hours
		},
		{
			label: 'min',
			value: timeLeft.minutes
		},
		{
			label: 'sec',
			value: timeLeft.seconds
		},	
	]

	return (
		<div className='flex flex-col gap-12 items-center lg:flex-row lg:justify-between'>
			<div className='w-full flex flex-col gap-5'>
				<p className='text-preset-6 text-neutral-0 text-center lg:text-left'>
					<span className={`${pattern === 1 ? 'text-neutral-0' : 'text-neutral-800'} `}>COMING </span> 
					<span className='text-blue-500'>4 NOV 2020</span>
				</p>
				<div className='grid grid-cols-4 gap-4'>
					{
						countdownData.map((item) => (
							<div key={item.label} className={`px-3 py-4 rounded-lg flex flex-col gap-1 text-center md:w-[100px] ${pattern === 1 ? 'bg-neutral-800' : 'bg-blue-100'}`}>
								<span className={`text-preset-1-tablet ${pattern === 1 ? 'text-neutral-0' : 'text-blue-500'}`}>
									{item.value}
								</span>
								<span className={`text-preset-5 opacity-50 ${pattern === 1 ? 'text-neutral-0' : 'text-neutral-800'}`}>
									{item.label}
								</span>
							</div>
						))
					}
				</div>
			</div>
			{ pattern === 1 && <button className='btn'>Get Started</button> }
		</div>
	)
}

export default Countdown
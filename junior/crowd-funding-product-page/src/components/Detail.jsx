import React from 'react'
import { rewards } from '../constants'

function Detail() {
	const filteredRewards = rewards.filter((item) => item.price !== 0);

	return (
		<div className='px-[24px] py-[42px] bg-white border border-gray-200 rounded-lg'>
			<div className='w-full flex flex-col gap-6 md:gap-8'>
				<div className='flex flex-col gap-4'>
					<h5 className='text-preset-5-bold md:text-xl'>About this project</h5>
					<p className='text-preset-8-regular md:text-base text-gray-500'>
						The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
						<br />
						<br />
						Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.
					</p>
				</div>
				<div className='flex flex-col gap-6'>
				{
					filteredRewards.map((item) => (
						<div
							key={item.id}
							className='flex justify-center items-center h-[370px] md:h-[278px] border border-gray-200 rounded-lg'
							style={item.left === 0 ? { opacity: 0.3 } : { opacity: 1 }}
						>
							<div className='w-[231px] md:w-[526px] flex flex-col gap-6 md:gap-4'>
								<div className='flex flex-col gap-4 md:gap-6'>
									<div className='flex flex-col gap-2 md:flex-row md:justify-between md:items-center'>
										<span className='text-preset-8-bold md:text-lg'>
											{item.title}
										</span>
										<span className='text-preset-8-medium md:text-[15px] text-green-400'>
											Pledge ${item.price} or more
										</span>
									</div>
									<p className='text-preset-8-regular md:text-base text-gray-500'>{item.desc}</p>
								</div>
								<div className='flex flex-col gap-6 md:flex-row md:justify-between md:items-center'>
									<div className='flex items-center gap-2'>
										<span className='text-preset-1'>{item.left}</span>
										<span className='text-preset-7-regular text-gray-500'>left</span>
									</div>
									<button
										className='btn w-[157px] md:w-[144.62px] h-[48px] text-preset-8-bold'
										style={item.left === 0 ? { backgroundColor: '#929292' } : { backgroundColor: '#3cb3ab' }}
									>
										{item.left === 0 ? 'Out of Stock' : 'Select Reward'}
									</button>
								</div>
							</div>
						</div>
					))
				}
				</div>
			</div>
		</div>
	)
}

export default Detail
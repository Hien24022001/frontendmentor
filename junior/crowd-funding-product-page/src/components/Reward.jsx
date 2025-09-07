import React, { useState } from 'react'

function Reward({ item, selectedReward, handleContinue, handleSelectReward }) {
	const [rewardValue, setRewardValue] = useState(item.price);

	const handleChange = (e) => {
		setRewardValue(e.target.value);
	}

  return (
    <div 
			className='w-full flex flex-col gap-6 border border-gray-200 rounded-lg' 
			onClick={() => handleSelectReward(item.id, item.left)}
			style={{
				...(item.id !== selectedReward ? {border: '1px solid #d9d9d9'} : {border: '2px solid #3cb3ab'}),
				...(item.left === 0 ? { opacity: 0.3 } : { opacity: 1 })
			}}
		>
			<div className='flex flex-col gap-4 md:gap-2 p-6'>
				<div className='flex gap-4 items-center md:gap-6'>
					<div className='flex items-center justify-center w-6 h-6 border border-gray-200 rounded-full'>
						{item.id === selectedReward && <div className='w-3 h-3 bg-green-400 rounded-full'></div>}
					</div>
					<div className='flex flex-col gap-2 md:grow md:flex-row md:gap-6 md:items-center'>
						<span className='text-preset-8-bold md:text-base'>{item.title}</span>
						{
							item.price !== 0 && 
							<span className='text-preset-8-medium md:text-base md:font-bold text-green-400'>
								Pledge ${item.price} or more
							</span>
						}	
					</div>
					{
						item.price !== 0 && (
							<div className='hidden md:flex gap-2 items-center'>
								<span className='text-preset-5-bold'>{item.left}</span>
								<span className='text-preset-7-regular text-gray-500'>left</span>
							</div>
						)
					}
				</div>
				<p className='text-preset-8-regular md:text-[15px] text-gray-500 pl-[48px]'>{item.desc}</p>
				{
					item.price !== 0 && (
						<div className='flex gap-2 items-center md:hidden'>
							<span className='text-preset-5-bold'>{item.left}</span>
							<span className='text-preset-7-regular text-gray-500'>left</span>
						</div>
					)
				}
				{
					item.id === selectedReward && item.price === 0 && (
						<button className='btn h-12 md:w-[107px]' onClick={handleContinue}>Continue</button>
					)
				}
			</div>
			{
				item.id === selectedReward && item.price !== 0 && (
					<div className='flex flex-col gap-4 md:flex-row md:justify-between md:items-center p-6 border-t border-t-gray-200'>
						<p className='text-preset-8-regular md:text-[15px] text-center text-gray-500'>Enter your pledge</p>
						<div className='flex gap-4 h-12 items-center'>
							<div className='relative'>
								<input 
									type='text' 
									value={rewardValue}
									onChange={handleChange} 
									className='w-[100px] h-12 border border-gray-200 rounded-[33.5px] pl-9 pr-6 text-preset-8-bold' 
								/>
								<span className='text-preset-8-bold absolute left-6 top-1/2 -translate-y-1/2 opacity-25'>$</span>
							</div>
							<button className='btn grow md:w-[107px]' onClick={handleContinue}>Continue</button>
						</div>
					</div>
				)
			}
	</div>
  )
}

export default Reward
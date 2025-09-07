import React from 'react'

function Extension({ filteredExtension, handleToggle, handleRemove }) {
	return (
		<section className='flex flex-col gap-3 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-3'>
			{
				filteredExtension.map((item) => (
					<div key={item.id} className='dark:bg-neutral-800 flex flex-col justify-between bg-neutral-0 rounded-[20px] p-5 border border-neutral-200 dark:border-neutral-600'>
						<div className='flex gap-4'>
							<img src={item.logo} className='w-[60px] h-[60px] rounded-[10px]' />
							<div className='flex flex-col gap-2'>
								<h5 className='text-preset2'>{item.name}</h5>
								<p className='text-preset5'>{item.description}</p>
							</div>
						</div>
						<div className='flex justify-between items-center mt-8'>
							<span
								className='text-center px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-[900px] cursor-pointer'
								onClick={() => handleRemove(item.id)}
							>
								Remove
							</span>
							<div
								className={`${item.isActive ? 'bg-red-700' : 'bg-neutral-300'} cursor-pointer w-9 h-5 rounded-full relative`}
								onClick={() => handleToggle(item.id)}
							>
								<span
									className={`absolute top-0.5 ${item.isActive ? 'left-0.5' : 'right-0.5'} inline-block bg-neutral-0 w-4 h-4 rounded-full transition-all duration-500`}
								>
								</span>
							</div>
						</div>
					</div>
				))
			}
		</section>
	)
}

export default Extension
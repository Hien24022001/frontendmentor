import React from 'react'

function Stats() {
  return (
    <div className='w-full h-[412px] md:h-auto md:p-12 flex items-center justify-center bg-white border border-gray-200 rounded-lg'>
        <div className='w-full flex flex-col gap-4 md:gap-8 items-center'>
            <div className='w-full flex flex-col md:grid md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-6 md:gap-y-12 items-center md:items-start'>
                <div className='flex flex-col gap-2 text-center'>
                    <span className='text-preset-1'>$89,914</span>
                    <span className='text-preset-8-regular md:text-[15px] text-gray-500'>of $100,000 backed</span>
                </div>
                <p className='w-[80px] h-[1px] md:w-[0.92px] md:h-[63px] bg-[#979797]'></p>
                <div className='flex flex-col gap-2 text-center'>
                    <span className='text-preset-1'>5,007</span>
                    <span className='text-preset-8-regular md:text-[15px] text-gray-500'>total backers</span>
                </div>
                <p className='w-[80px] h-[1px] md:w-[0.92px] md:h-[63px] bg-[#979797]'></p>
                <div className='flex flex-col gap-2 text-center'>
                    <span className='text-preset-1'>56</span>
                    <span className='text-preset-8-regular md:text-[15px] text-gray-500'>days left</span>
                </div>
            </div>
            <div className='w-[279px] md:w-full h-[12px] rounded-[33.5px] bg-gray-200'>
                <div className='w-[218.27px] h-full rounded-[33.5px] bg-green-400'></div>
            </div>
        </div>
    </div>
  )
}

export default Stats
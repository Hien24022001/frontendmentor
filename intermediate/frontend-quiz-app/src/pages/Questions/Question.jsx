import React from 'react'

function Question({ total, index, text, progress }) {
    return (
        <div className='flex flex-col gap-6 md:gap-10 xl:w-[465px] xl:gap-[184px]'>
            <div className='flex flex-col gap-4 xl:gap-6'>
                <span className='text-preset-5 text-gray-500 md:text-xl dark:text-blue-300'>
                    Question { index } of { total }
                </span>
                <h5 className='text-preset-3'>
                    { text }
                </h5>
            </div>
            <div className='p-1 bg-white rounded-[999px] dark:bg-blue-850'>
                <div className={`h-[8px] bg-purple-600 rounded-[104px]`} style={{width: `${progress}%`}}></div>
            </div>
        </div>
    )
}

export default Question
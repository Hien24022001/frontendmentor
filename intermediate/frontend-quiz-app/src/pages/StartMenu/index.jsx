import React from 'react'
import { quizzes } from 'data'
import { Link } from 'react-router-dom'

function StartMenu() {
  return (
    <>
      <div className='flex justify-center px-6 pt-8'>
        <div className='w-full flex flex-col gap-10 md:w-[640px] md:gap-[64px] xl:w-[1157px] xl:flex-row xl:gap-[128px]'>
          <div className='flex flex-col gap-4 xl:gap-[48px]'>
            <div className='flex flex-col gap-2'>
              <span className='text-preset-2-light'>Welcome to the</span>
              <span className='text-preset-2-medium'>Frontend Quiz!</span>
            </div>
            <p className='text-preset-5 text-grey-500 md:text-xl dark:text-blue-300'>Pick a subject to get started.</p>
          </div>
          <div className='flex flex-col gap-4 md:gap-6 xl:w-[564px] xl:gap-4'>
            {
              quizzes.map((quiz, index) => (
                <Link 
                  key={index} 
                  to={`/questions?title=${quiz.title}`}
                  className='flex gap-4 items-center p-4 rounded-xl bg-white shadow-1 md:gap-8 xl:p-6 xl:rounded-3xl cursor-pointer dark:bg-blue-850'
                >
                  <img src={quiz.icon} className='w-10 h-10 md:w-[56px] md:h-[56px]' />
                  <span className='text-preset-4'>{quiz.title}</span>
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default StartMenu
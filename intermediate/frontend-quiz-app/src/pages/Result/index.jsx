import { quizzes } from 'data';
import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function Result({ point, resetPoint, setHeaderContent }) {
  const navigate = useNavigate();

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const titleParams = query.get('title');
  const quizInfo = quizzes.find((item) => item.title === titleParams);

  const handlePlayAgain = () => {
    resetPoint();
    navigate('/');
  }

  useEffect(() => {
    setHeaderContent({
      title: quizInfo?.title,
      icon: quizInfo?.icon
    })
  }, [])

  return (
    <section className='flex justify-center'>
      <div className='px-6 pt-8 flex flex-col gap-[40px] w-full md:w-[640px] md:pt-[49px] md:px-0 md:gap-[64px] xl:pt-[85px] xl:w-[1158px] xl:gap-[144px] xl:flex-row'>
        <div className=''>
          <p className='text-preset-2-light'>Quiz completed</p>
          <p className='text-preset-2-medium'>You scored...</p>
        </div>
        <div className='flex flex-col gap-4 md:gap-8 xl:w-[564px]'>
          <div className='p-[32px] flex flex-col gap-4 items-center rounded-3xl bg-white shadow-1 md:p-[48px] md:gap-[40px] dark:bg-blue-850'>
            <div className='flex gap-4 items-center'>
              <img src={quizInfo?.icon} className='w-[40px] h-[40px] md:w-[56px] md:h-[56px]' />
              <span className='text-preset-4'>{ quizInfo?.title }</span>
            </div>
            <div className='flex flex-col gap-4 text-center'>
              <span className='text-preset-1'>{ point }</span>
              <span className='text-preset-5-medium text-grey-500 dark:text-blue-300'>out of { quizInfo.questions.length }</span>
            </div>
          </div>
          <button className='btn text-preset-4' onClick={handlePlayAgain}>Play Again</button>
        </div>
      </div>
    </section>
  )
}

export default Result
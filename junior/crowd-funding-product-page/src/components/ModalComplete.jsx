import React from 'react'
import checkIcon from '../assets/images/icon-check.svg';

function ModalComplete({ closeModal }) {
  return (
    <div className='flex items-center justify-center'>
      <div className='h-[382px] md:h-[449px] w-[540px] flex items-center justify-center bg-white rounded-lg'>
        <div className='flex flex-col gap-8 items-center w-[279px] md:w-[444px]'>
          <img src={checkIcon} className='w-[64px] h-[64px] md:w-[90px] md:h-[90px]' />
          <div className='flex flex-col gap-4 text-center'>
            <span className='text-preset-5-bold md:text-2xl'>Thanks for your support!</span>
            <p className='text-preset-8-regular md:text-base text-gray-500'>
              Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.
            </p>
          </div>
          <button className='btn w-[107px] h-[48px]' onClick={closeModal}>Got it</button>
        </div>
      </div>
    </div>
  )
}

export default ModalComplete

import React from 'react'

function PricingCard({ type, name, price, desc, feature }) {
  return (
    <div 
        className='block px-6 py-10 rounded-xl text-center shadow-1 md:p-12 md:flex md:justify-between md:items-center md:text-left lg:block lg:text-center lg:px-5 lg:py-10' 
        style={type === 1 ? {backgroundColor: '#fff', color: '#25293a'} : {backgroundColor: '#5175ff', color: '#fff'}}
    >
        <div className='flex flex-col gap-12 items-center md:gap-6 lg:gap-10'>
            <div className='flex flex-col gap-4 lg:gap-10'>
                <span className='text-preset-2'>{name}</span>
                <div className='flex flex-col gap-2'>
                    <span className='text-preset-1'>{price}</span>
                    <span className='text-preset-4'>{desc}</span>
                </div>
            </div>
            <div 
                className='flex flex-col gap-4 text-preset-4 md:hidden lg:flex'
                style={type == 1 ? {color: '#747b95'} : {color: '#fff'}} 
            >
                {
                    feature.map((item, index) => <span key={index}>{item}</span>)
                }
            </div>
            <button 
                className='btn text-blue-500' 
                style={type == 1 ? {backgroundColor: '#e4eaff'} : {backgroundColor: '#fff'}} 
            >
                Try for Free
            </button>
        </div>
        <div 
            className='hidden md:flex flex-col gap-4 text-preset-4 w-[240px] lg:hidden'
            style={type == 1 ? {color: '#747b95'} : {color: '#fff'}} 
        >
            {
                feature.map((item, index) => <span key={index}>{item}</span>)
            }
        </div>
    </div>
  )
}

export default PricingCard
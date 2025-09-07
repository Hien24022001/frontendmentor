import React from 'react'
import { Controller } from 'react-hook-form'
import errorIcon from '../assets/sign-up/icon-error.svg'

function InputField({ name, control, placeholder, error }) {
  return (
    <div className='flex flex-col gap-2'>
        <Controller 
            name={name}
            control={control}
            render={({ field }) => 
                <input 
                    {...field} 
                    placeholder={placeholder}
                    className='px-4 pb-4 border-b border-b-neutral-500 text-preset-4 leading-[28px] text-neutral-500 focus:outline-blue-500'
                />
            }
        />
        {
            error && (
                <div className='flex gap-2 items-center'>
                    <img src={errorIcon} />
                    <p className='text-xs italic text-red-400 font-bold'>{error}</p>
                </div>
            )
        }
    </div>
  )
}

export default InputField
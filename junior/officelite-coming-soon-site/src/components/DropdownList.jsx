import React, { useState } from 'react'
import { Controller } from 'react-hook-form'
import IconArrorDown from '../assets/sign-up/icon-arrow-down.svg'
import errorIcon from '../assets/sign-up/icon-error.svg'

function DropdownList({ name, control, error, label, options = [] }) {
  const [isOpen, setIsopen] = useState(false);

  return (
    <div className='flex flex-col gap-2'>
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange } }) => {
          const selectedOption = options.find((option) => option.value === value);
          return (
            <div className='relative'>
              <div
                className='px-4 pb-4 border-b border-b-neutral-500 text-preset-4 text-neutral-500 flex items-center gap-[10px]'
                onClick={() => setIsopen((prev) => !prev)}
              >
                {
                  value ? (
                    <>
                      <span className='text-neutral-800 text-preset-5'>{selectedOption.pack}</span>
                      <span className='text-neutral-800 text-preset-5 opacity-40 grow'>{selectedOption.price}</span>
                    </>
                  ) : (
                    <span className='text-preset-4 text-neutral-500 grow'>{label}</span>
                  )
                }
                <img src={IconArrorDown} />
              </div>
              {
                isOpen && (
                  <div className='w-full px-4 py-4 flex flex-col gap-2 absolute top-[56px] left-0 shadow-1 rounded-xl bg-white border border-neutral-200'>
                    {
                      options.map((option) => (
                        <div key={option.value} onClick={() => { onChange(option.value); setIsopen(false) }} className='flex items-center gap-[10px]'>
                          <span className='text-neutral-800 text-preset-5'>{option.pack}</span>
                          <span className='text-neutral-800 text-preset-5 opacity-40'>{option.price}</span>
                        </div>
                      ))
                    }
                  </div>
                )
              }
            </div>
          )
        }}
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

export default DropdownList
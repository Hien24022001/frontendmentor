import React from 'react'
import { Controller } from 'react-hook-form'
import ErrorIcon from '../assets/images/icon-error.svg'

function InputField({ label, error, placeholder, ...props }) {
	return (
		<div className='flex flex-col gap-3'>
			<label className='text-preset-5'>{label}</label>
			<Controller
				{...props}
				render={({ field }) =>
					<input
						className='h-[54px] px-4 border border-neutral-500 rounded-xl text-preset-6 text-neutral-300 bg-[rgba(255,255,255,0.08)]'
						placeholder={placeholder}
						{...field}
					/>
				}
			/>
			{error &&
				<p className="flex items-center gap-2 text-orange-500">
					<img src={ErrorIcon} />
					<span className='text-preset-7'>{error}</span>
				</p>
			}
		</div>
	)
}

export default InputField


import React from 'react'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver }  from '@hookform/resolvers/yup';
import InputField from './InputField';
import DropdownList from './DropdownList';

const schema = yup.object().shape({
	name: yup.string().required('Name is required'),
	email: yup.string().email('Email Address is not valid').required('Email Address is required'),
	pack: yup.string().required('Pack is required'),
	phone: yup.string().required('Phone Number is required'),
	company: yup.string().required('Company is required')
})

const options = [
	{
		value: 'basic-free',
		pack: 'Basic Pack',
		price: 'Free'
	},
	{
		value: 'basic-9.99',
		pack: 'Basic Pack',
		price: '@9.99'
	},
	{
		value: 'ultimate-19.99',
		pack: 'Ultimate Pack',
		price: '$19.99'
	},
]

function AppForm() {
	const { control, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(schema),
		defaultValues: {
			name: '',
			email: '',
			// pack: 'free',
			phone: '',
			company: ''
		}
	})

	const onSubmit = (data) => {
		console.log(data)
	}

	return (
		<div className='flex justify-center relative'>
			<form 
				className='w-[327px] px-5 py-10 flex flex-col gap-10 bg-white shadow-1 rounded-xl relative z-20 md:w-[445px]' 
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className='flex flex-col gap-6'>
					<InputField 
						name='name'
						control={control}
						placeholder='Name'
						error={errors.name ? errors.name.message : ''}
					/>
					<InputField 
						name='email'
						control={control}
						placeholder='Email Address'
						error={errors.email ? errors.email.message : ''}
					/>
					<DropdownList 
						name='pack'
						control={control}
						options={options}
						label='Select a pack'
						error={errors.pack ? errors.pack.message : ''}
					/>
					<InputField 
						name='phone'
						control={control}
						placeholder='Phone Number'
						error={errors.phone ? errors.phone.message : ''}
					/>
					<InputField 
						name='company'
						control={control}
						placeholder='Company'
						error={errors.company ? errors.company.message : ''}
					/>
				</div>
				<button type='submit' className='btn'>Get on the list</button>
			</form>
			<div className='absolute top-[244px] bg-neutral-900 z-10 bg-image-footer-1 lg:hidden'></div>
		</div>
	)
}

export default AppForm
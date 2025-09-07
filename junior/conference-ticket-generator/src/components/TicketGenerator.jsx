import React from 'react'
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputField from './InputField';
import ImagePicker from './ImagePicker';

const schema = yup.object().shape({
	avatar: yup.mixed()
    .required('A file is required')
    .test('fileSize', 'File must be less than 500 KB', (value) => {
      return value && value.size <= 500000; // 500 KB in bytes
  	}),
	fullName: yup.string().required('Full Name is required'),
	email: yup.string().email('Invalid email').required('Email is required'),
	username: yup.string().required('Full Name is required'),
});

function TicketGenerator({ submitForm, setTicketData }) {
	const { control, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(schema),
		defaultValues: {
			avatar: null,
			fullName: '',
			email: '',
			username: '',
		},
	});

	const onSubmit = (data) => {
		submitForm();
		setTicketData(data);
	};

	return (
		<div>
			<div className='mt-[40px] mx-4 flex flex-col'>
				<div className='flex flex-col gap-5 text-center'>
					<h2 className='text-preset-1'>
						Your Journey to Coding Conf 2025 Starts Here!
					</h2>
					<h3 className='text-preset-4'>
						Secure your spot at next year’s biggest coding conference.
					</h3>
				</div>
				<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6 mt-10'>
					<ImagePicker 
						name="avatar"
						control={control}
						error={errors.avatar ? errors.avatar.message : ''}
					/>
					<InputField 
						name="fullName"
						control={control}
						label="Full Name"
						error={errors.fullName ? errors.fullName.message : ''}
					/>
					<InputField 
						name="email"
						control={control}
						label="Email Address"
						placeholder="example@email.com"
						error={errors.email ? errors.email.message : ''}
					/>
					<InputField 
						name="username"
						control={control}
						label="Gihub Username"
						placeholder="@yourusername"
						error={errors.username ? errors.username.message : ''}
					/>
					<button type="submit" className="px-6 py-4 bg-orange-500 text-white rounded-xl">
						Generate Ticket
					</button>
				</form>
			</div>
		</div>
	)
}

export default TicketGenerator




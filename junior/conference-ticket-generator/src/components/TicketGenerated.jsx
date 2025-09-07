import React from 'react'
import LogoMarked from '../assets/images/logo-mark.svg'
import GithubIcon from '../assets/images/icon-github.svg'

function TicketGenerated({ ticketData }) {
	const { avatar, fullName, email } = ticketData;
	console.log(avatar);

	return (
		<div className="mt-[40px] mx-4 flex flex-col">
			<div className='flex flex-col gap-5 text-center'>
				<h2 className='text-preset-1'>
					Congrats, Jonatan Kristof! Your ticket is ready.
				</h2>
				<h3 className='text-preset-4'>
					We've emailed your ticket to jonatan@email.com and will send updates in the run up to the event.
				</h3>
			</div>
			<div className="flex flex-col gap-8 mt-10 p-4 h-[160px] relative bg-[url('./assets/images/pattern-ticket.svg')] bg-no-repeat bg-cover bg-center bg-linear-[--linear]">
				<div className='flex gap-3'>
					<img src={LogoMarked} className='w-[29px] h-[29px]' />
					<div className='flex flex-col gap-2 grow'>
						<p className='text-preset-2'>Coding Conf</p>
						<p className='text-preset-6'>Jan 31, 2025 / Austin, TX</p>
					</div>
				</div>
				<div className='flex gap-3'>
					<img src={URL.createObjectURL(avatar)} alt="Avatar" className='w-[45px] h-[45px] rounded-[6.75px]' />
					<div className='flex flex-col gap-1 grow'>
						<p className='text-preset-5'>{fullName}</p>
						<div className='flex gap-1'>
							<img src={GithubIcon} className='w-[20px] h-[20px]' />
							<p className='text-preset-6'>{email}</p>
						</div>
					</div>
				</div>
				<p className="absolute right-0 top-1/2 -translate-y-1/2 text-preset-3 text-neutral-500 rotate-90">#01609</p>
			</div>
		</div>
	)
}

export default TicketGenerated

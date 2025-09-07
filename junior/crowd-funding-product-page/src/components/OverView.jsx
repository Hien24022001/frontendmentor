import React, { useState } from 'react'
import logo from '../assets/images/logo-mastercraft.svg';
import bookmarkIcon from '../assets/images/icon-bookmark.svg';
import Modal from './Modal';
import ModalSelected from './ModalSelected';
import ModalComplete from './ModalComplete';

function OverView() {
	const [isModalSelectedOpen, setIsModalSelectedOpen] = useState(false);
	const [isModalCompleteOpen, setIsModalCompleteOpen] = useState(false);

	const openModalSelected = () => {
		setIsModalSelectedOpen(true);
	}
	const closeModalSelected = () => {
		setIsModalSelectedOpen(false);
	}
	const openModalComplete = () => {
		setIsModalCompleteOpen(true);
	}
	const closeModalComplete= () => {
		setIsModalCompleteOpen(false);
	}

	return (
		<div className='w-full h-[312px] md:h-[297px] flex items-end'>
			<div className='w-full h-[284px] md:h-[269px] flex justify-center bg-white border border-gray-200 rounded-lg relative'>
				<div className='flex flex-col gap-6 md:gap-8 items-center w-[280px] md:w-[584px] relative -top-7'>
					<img src={logo} className='w-14 h-14' />
					<div className='w-full flex flex-col gap-6 md:gap-8 items-center'>
						<div className='flex flex-col gap-4 md:gap-2 text-center'>
							<h3 className='text-preset-4 md:text-[28px]'>Mastercraft Bamboo Monitor Riser</h3>
							<p className='text-preset-8-regular md:text-base text-gray-500'>
								A beautifully handcrafted monitor stand to reduce neck and eye strain.
							</p>
						</div>
						<div className='flex gap-2 items-center w-full md:justify-between'>
							<button className='btn w-auto md:w-[204px] grow md:grow-0' onClick={openModalSelected}>Back this project</button>
							<div className='flex md:gap-4 md:items-center w-[56px] md:w-[174px] md:h-14 md:bg-gray-200 md:rounded-[33.5px]'>
								<img src={bookmarkIcon} className='w-14 h-14' />
								<span className='hidden md:inline-block text-preset-6-bold text-gray-500'>Bookmark</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			{
				isModalSelectedOpen && (
					<Modal isModalOpen={isModalSelectedOpen}>
						<ModalSelected closeModal={closeModalSelected} openModalComplete={openModalComplete} />
					</Modal>
				)
			}
			{
				isModalCompleteOpen && (
					<Modal isModalOpen={isModalCompleteOpen}>
						<ModalComplete closeModal={closeModalComplete} />
					</Modal>
				)
			}
		</div>
	)
}

export default OverView
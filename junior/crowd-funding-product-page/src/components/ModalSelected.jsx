import React, { useState } from 'react';
import closeIcon from '../assets/images/icon-close-modal.svg';
import { rewards } from '../constants';
import Reward from './Reward';

function ModalSelected({ closeModal, openModalComplete }) {
	const [selectedReward, setSelectedReward] = useState('');

	const handleContinue = () => {
		closeModal();
		openModalComplete();
	}

	const handleSelectReward = (id, left) => {
		if (left > 0 || left === null) {
			setSelectedReward(id)
		}
	}
	
  return (
    <div className='px-[24px] md:px-[44px] py-[42px] flex flex-col gap-8 bg-white rounded-lg'>
			<div className='flex flex-col gap-4'>
				<div className='flex justify-between items-center'>
					<h5 className='text-preset-5-bold md:text-2xl'>Back this project</h5>
					<img src={closeIcon} onClick={closeModal} className='cursor-pointer' />
				</div>
				<p className='text-preset-8 md:text-base text-gray-500'>
					Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world? 
				</p>
			</div>
			<div className='flex flex-col gap-6'>
				{
					rewards.map((item) => (
						<Reward 
							item={item} 
							selectedReward={selectedReward} 
							handleContinue={handleContinue} 
							handleSelectReward={handleSelectReward} 
						/>
					))
				}
			</div>
		</div>
  )
}

export default ModalSelected

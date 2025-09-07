import React from 'react'
import OverView from './OverView'
import Stats from './Stats'
import Detail from './Detail'

function ProjectInfo() {
	return (
		<div className='flex justify-center relative -top-[84px] md:-top-[120px]'>
			<div className='w-[327px] md:w-[672px] lg:w-[730px] flex flex-col gap-6 items-center'>
				<OverView />
				<Stats />
				<Detail />
			</div>
		</div>
	)
}

export default ProjectInfo

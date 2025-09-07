import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom';

function Modal({ isModalOpen, children }) {
  useEffect(() => {
		if (isModalOpen) {
			document.querySelector('body').classList.add('no-scroll')
		} else {
			document.querySelector('body').classList.remove('no-scroll')
		}
		console.log(document.querySelector('body').classList)
		return () => {
			document.querySelector('body').classList.remove('no-scroll')
		}
	}, [isModalOpen])

  return createPortal(
    <aside className='fixed z-[1000] top-0 left-0 bottom-0 right-0 bg-[rgba(0,0,0,0.4988)] px-6 md:px-12 py-[120px] md:py-[184px] overflow-scroll'>
		{ children }
	</aside>,
	document.querySelector('body')
  )
}

export default Modal
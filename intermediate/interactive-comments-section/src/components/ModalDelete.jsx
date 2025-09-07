import React from 'react'
import { createPortal } from 'react-dom'

function ModalDelete({ onCancel, onConfirm }) {
  return createPortal(
    <div className='fixed top-0 left-0 bottom-0 right-0 z-[1000] bg-[rgba(0,0,0,0.5)] flex items-center justify-center'>
        <div className='w-[400px] bg-white p-[31px] rounded-lg flex flex-col gap-6'>
            <h5 className='text-preset-1 text-grey-800'>Delete comment</h5>
            <p className='text-preset-2-regular text-grey-500'>Are you sure you want to delete this comment? This will remove the comment and can’t be undone.</p>
            <div className='flex gap-4'>
                <button className='btn bg-grey-500 grow' onClick={onCancel}>NO, CANCEL</button>
                <button className='btn bg-pink-400 grow' onClick={onConfirm}>YES, DELETE</button>
            </div>
        </div>
    </div>,
    document.querySelector('body')
  )
}

export default ModalDelete
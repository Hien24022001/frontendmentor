import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom';

function Modal({ title, content, btnText, btnAction, isOpen, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className='fixed top-0 left-0 bottom-0 right-0 z-[1000] bg-[rgba(0,0,0,0.5)] flex justify-center items-center'>
        <div className='bg-white w-[343px] p-6 flex flex-col gap-6 rounded-md' ref={modalRef}>
            <h4>{ title }</h4>
            { content }
            <button className='btn' onClick={btnAction}>{ btnText }</button>
        </div>
    </div>,
    document.querySelector('body')
  )
}

export default Modal
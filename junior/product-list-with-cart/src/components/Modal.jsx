import React, { useContext } from 'react'
import ReactDom from 'react-dom'
import { CartContext } from '../CartProvider'

function Modal({ closeModal }) {
  const { cart, clearCart } = useContext(CartContext);

  const totalPrice = cart.reduce((sum, cur) => sum + cur.price * cur.quantity, 0);

  const handleClick = () => {
    clearCart();
    closeModal();
  }

  return ReactDom.createPortal(
    <aside className='fixed left-0 right-0 top-0 bottom-0 bg-[rgba(0,0,0,0.5)] flex flex-col justify-end md:justify-center md:items-center md:px-10'>
        <div className='overflow-y-scroll bg-white px-6 pt-10 pb-6 md:max-h-[685px]'>
            <div className='flex flex-col gap-8 rounded-tl-xl rounded-tr-xl md:rounded-xl'>
                <div className='flex flex-col gap-6'>
                    <img src='./assets/images/icon-order-confirmed.svg' className='w-12 h-12' />
                    <div className='flex flex-col gap-2'>
                        <h3 className='text-preset-1'>Order Confirmed</h3>
                        <p className='text-rose-500'>We hope you enjoy your food!</p>
                    </div>
                </div>
                <div className='flex flex-col gap-6 p-6 bg-rose-50 rounded-lg'>
                    <div className='flex flex-col gap-4'>
                        {
                            cart.map((item) => (       
                                <div className='flex items-center gap-2 pb-4 border-b border-b-rose-100' key={item.id}>
                                    <div className='grow flex items-center gap-4'>
                                        <img src={item.image} className='w-12 h-12' />
                                        <div className='flex flex-col gap-2'>
                                            <span className='text-preset-4-bold'>{item.name}</span>
                                            <div className='flex items-center gap-2'>
                                                <span className='text-preset-4-bold text-red'>{item.quantity}x</span>
                                                <span className='text-preset-4 text-rose-500'>@ ${item.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className='text-preset-3'>${(item.price * item.quantity)}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className='flex justify-between items-center'>
                        <span className='text-preset-4'>Order Total</span>
                        <span className='text-preset-2'>${totalPrice.toFixed(2)}</span>
                    </div>
                </div>
                <button className='btn' onClick={handleClick}>Start New Order</button>
            </div>
        </div>
    </aside>,
    document.querySelector('body')
  )
}

export default Modal
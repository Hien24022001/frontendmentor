import React, { useContext } from 'react'
import { CartContext } from '../CartProvider'

function Cart({ openModal }) {
  const { cart, removeItemFromCart } = useContext(CartContext);

  const totalPrice = cart.reduce((sum, cur) => sum + cur.price * cur.quantity, 0);

  return (
    <div className='flex flex-col gap-6 p-6 bg-white rounded-xl lg:grow'>
      <h2 className='text-preset-2 text-red'>Your Cart ({cart.length})</h2>
      {
        cart.length > 0 ? (
          <>
            <div className='flex flex-col gap-4'>
              {
                cart.map((item) => (
                  <div className='flex items-center justify-between' key={item.id}>
                    <div className='flex flex-col gap-2'>
                      <span>{ item.name }</span>
                      <div className='flex gap-2'>
                        <span className='text-preset-4-bold text-red'>{item.quantity}x</span>
                        <span className='text-preset-4 text-rose-500'>@ ${item.price.toFixed(2)}</span>
                        <span className='text-preset-4 text-rose-500'>$ {(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                    <p 
                      className='flex items-center justify-center border border-rose-400 rounded-full w-5 h-5'
                      onClick={() => removeItemFromCart(item.id)}
                    >
                      <img src='./assets/images/icon-remove-item.svg' />
                    </p>
                  </div>
                ))
              }
            </div>
            <div className='flex items-cnter justify-between'>
              <span className='text-preset-4'>Order Total</span>
              <span className='text-preset-2'>${totalPrice.toFixed(2)}</span>
            </div>
            <div className='flex items-center justify-center gap-2 p-4 bg-rose-50 rounded-lg'>
              <img src='./assets/images/icon-carbon-neutral.svg' />
              <p className='text-preset-4'>This is a <span className='text-preset-4-bold'>carbon-neutral</span> delivery</p>
            </div>
            <button className='btn' onClick={openModal}>Confirm Order</button>
          </>
        ): (
          <div className='flex flex-col items-center justify-center gap-4 py-4'>
            <img src='./assets/images/illustration-empty-cart.svg' />
            <p className='text-rose-500 text-preset-4-bold'>Your added items will appear here</p>
          </div>
        )
      }
    </div>
  )
}

export default Cart
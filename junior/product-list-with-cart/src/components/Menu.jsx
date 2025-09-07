import React, { useContext, useEffect, useState } from 'react'
import data from '../constants'
import { CartContext } from '../CartProvider'

function Menu() {
	const { cart, addItemToCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
	const [formattedData, setFormattedData] = useState([]);
	
	useEffect(() => {
		const formatData = () => {
			const formattedData = data.map((item) => {
				const width = window.innerWidth;
				let image;
				if (width >= 1024) {
					image = item.image.desktop;
				}
				else if (width >= 768) {
					image = item.image.tablet;
				}
				else {
					image = item.image.mobile;
				}
				return { ...item, image: { thumbnail: item.image.thumbnail, responsiveImage: image } }
			})
			setFormattedData(formattedData);
		}
		formatData();
		window.addEventListener('resize', formatData);
		return () => {
			window.removeEventListener('resize', formatData);
		}
	}, [])

	return (
		<div className='flex flex-col gap-8 lg:w-[800px]'>
			<h2 className='text-preset-1'>Desserts</h2>
			<div className='flex flex-col gap-6 md:grid md:grid-cols-3'>
				{
					formattedData.map((item) => {
						const cartItem = cart.find((cartItem) => item.id === cartItem.id);
						return (
						<div className='flex flex-col gap-4' key={item.id}>
							<div className='flex flex-col relative'>
								<img src={item.image.responsiveImage} className='rounded-lg' />
								<div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-[160px] h-[44px]'>
								{
									cartItem ? (
										<div className='flex items-center justify-between p-3 bg-red border border-rose-400 rounded-full'>
											<p 
												className='flex items-center justify-center rounded-full w-5 h-5 border border-white cursor-pointer'
												onClick={() => decreaseQuantity(item.id)}
											>
												<img src='./assets/images/icon-decrement-quantity.svg' />
											</p>
											<span className='text-preset-4-bold text-white'>{ cartItem.quantity }</span>
											<p 
												className='flex items-center justify-center rounded-full w-5 h-5 border border-white cursor-pointer'
												onClick={() => increaseQuantity(item.id)}
											>
												<img src='./assets/images/icon-increment-quantity.svg' />
											</p>
										</div>
									) : (
										<div 
											className='flex gap-2 items-center justify-center p-3 bg-white border border-rose-400 rounded-full cursor-pointer'
											onClick={() => addItemToCart({ id: item.id, name: item.name, price: item.price, quantity: 1, image: item.image.thumbnail })}
										>
											<img src="./assets/images/icon-add-to-cart.svg" />
											<span className='text-preset-4-bold'>
													Add to Cart
											</span>
										</div>
									)
								}
								</div>
								<p className='h-[22px]'></p>
							</div>
							<div className='flex flex-col gap-1'>
								<p className='text-preset-4 text-rose-500'>{item.category}</p>
								<p className='text-preset-3 '>{item.name}</p>
								<p className='text-preset-3 text-red'>${item.price.toFixed(2)}</p>
							</div>
						</div>
					)})
				}
			</div>
		</div>
	)
}

export default Menu


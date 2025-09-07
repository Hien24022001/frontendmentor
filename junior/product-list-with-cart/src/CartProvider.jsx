import React, { createContext, useReducer } from 'react'

export const CartContext = createContext();

function reducer(state, action) {
	switch (action.type) {
		case 'ADD_ITEM':
			return { ...state, cart: [...state.cart, action.payload] };
		case 'REMOVE_ITEM':
			return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };
		case 'INCREASE_QUANTITY': 
			return { ...state, cart: state.cart.map(item => item.id === action.payload ? {...item, quantity: item.quantity + 1} : item) };
		case 'DECREASE_QUANTITY': {
			const updatedCart = state.cart.map(item => {
				if (item.id === action.payload) {
					if (item.quantity === 1) {
						return null; // Mark for removal
					}
					return { ...item, quantity: item.quantity - 1 };
				}
				return item;
			}).filter(Boolean); // Remove null entries

			return { ...state, cart: updatedCart };
		}
		case 'CLEAR_CART': 
			return { ...state, cart: [] }
		default:
			return state;
	}
}

function CartProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, { cart: [] });

	const addItemToCart = (data) => {
		dispatch({ type: 'ADD_ITEM', payload: data })
	}
	const removeItemFromCart = (id) => {
		dispatch({ type: 'REMOVE_ITEM', payload: id })
	}
	const increaseQuantity = (id) => {
		dispatch({ type: 'INCREASE_QUANTITY', payload: id })
	}
	const decreaseQuantity = (id) => {
		dispatch({ type: 'DECREASE_QUANTITY', payload: id })
	}

	const clearCart = () => {
		dispatch({ type: 'CLEAR_CART' })
	}

	return (
		<CartContext.Provider value={{ 
			cart: state.cart, 
			addItemToCart, 
			removeItemFromCart,
			increaseQuantity,
			decreaseQuantity,
			clearCart
		}}>
			{children}
		</CartContext.Provider>
	)
}

export default CartProvider
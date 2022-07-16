/* 
{
    id: string,
    title: string,
    price: number,
    qty: number
}
*/
import { ADD_TO_CART } from '../actions/cartActions'

const initialState = {
    cart: []
}



export function cartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            let updatedCart;

            const foundItem = state.cart.find(item => item.id === action.payload.id)

            if (!foundItem) {
                updatedCart = [...state.cart, action.payload]
            } else {
                updatedCart = state.cart.map(item => ({
                    ...item,
                    qty: item.id === foundItem.id ? item.qty + 1 : item.qty
                }))
            }

            return {
                ...state,
                cart: updatedCart
            }
            break;
        default:
            return state
    }
}
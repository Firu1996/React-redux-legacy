/* 
{
    id: string,
    title: string,
    price: number,
    qty: number
}
*/
import { ADD_TO_CART, DELETE_CART } from '../actions/cartActions'

const initialState = [];



export function cartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            let updatedCart;

            const foundItem = state.find(item => item.id === action.payload.id)

            if (!foundItem) {
                updatedCart = [...state, action.payload]
            } else {
                updatedCart = state.map(item => ({
                    ...item,
                    qty: item.id === foundItem.id ? item.qty + 1 : item.qty
                }))
            }

            return updatedCart
            break;

        case DELETE_CART:
            return state.filter(item => item.id !== action.payload)
            break;

        default:
            return state
    }
}
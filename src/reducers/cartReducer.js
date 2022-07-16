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



export function addToCart(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            const updatedState = [...state.cart, action.payload]
            return {
                ...state,
                cart: updatedState
            }
            break;
        default:
            return state
    }
}
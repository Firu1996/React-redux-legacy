// const action = {
//     {
//         id: '',
//         title: '',
//         price: 2,
//         qty: 1
//     }
// }

export const ADD_TO_CART = 'ADD_TO_CART'



// Action creators
export function addTocart(addedProduct) {
    return {
        type: ADD_TO_CART,
        payload: addedProduct
    }
}


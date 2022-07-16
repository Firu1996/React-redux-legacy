import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTocart } from '../actions/cartActions'
import { useHistory } from 'react-router-dom';
export default function Item({ product }) {
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)
  const history = useHistory()

  const handleAddToCart = () => {
    if (!user) {
      history.push('/signin')
    } else {
      dispatch(addTocart({ ...product, qty: 1 }))
    }
  }

  return (
    <div className='product' >
      <h4>{product.title}</h4>
      <p>{product.price}</p>
      <button onClick={() => handleAddToCart()}>
        Add To Cart
      </button>
    </div >
  )
}

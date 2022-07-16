import React from 'react'
import { useDispatch } from 'react-redux';
import { addTocart } from '../actions/cartActions'

export default function Item({ product }) {
  const dispatch = useDispatch()
  return (
    <div className='product' >
      <h4>{product.title}</h4>
      <p>{product.price}</p>
      <button onClick={() => dispatch(addTocart({ ...product, qty: 1 }))}>
        Add To Cart
      </button>
    </div >
  )
}

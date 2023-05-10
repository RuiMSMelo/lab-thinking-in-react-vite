import React from 'react'

export default function ProductRow({product}) {
  console.log('productRow products: ',product.name)
  const redStyle = {
    color: 'red'
  }
  return (
    <tr>{product.inStock ? <td style={redStyle}>{product.name}</td> : <td>{product.name}</td>}
      <td>{product.price}</td>
    </tr>
  )
}

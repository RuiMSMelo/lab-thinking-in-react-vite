import React, { useState } from 'react'
import ProductRow from './ProductRow'

export default function ProductTable({filteredArray}) {
return (
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            {filteredArray.map((eachProduct)=>{
                return(
                    <ProductRow key={eachProduct.id} product={eachProduct}/>     
                )
            })}
          
        </tbody>
        
        
    </table>
  )
}

import React, { useState } from 'react';
import jsonData from './../data.json';
import SearchBar from './SearchBar'
import ProductTable from './ProductTable';

function ProductsPage () {
  const [products, setProducts] = useState(jsonData);

  const [searchedItem, setSearchedItem] = useState('')

  const filteredArray = products.filter((eachProduct)=>{
      return eachProduct.name.includes(searchedItem)
  })


  
  return(
      <div>
        <h1>IronStore</h1>
        <SearchBar setSearchedItem={setSearchedItem} searchedItem={searchedItem}/>
        <ProductTable filteredArray={filteredArray}/>
      </div>    
  )
}

export default ProductsPage
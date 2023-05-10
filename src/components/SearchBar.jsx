import React from 'react'

export default function SearchBar(setSearchedItem) {

  const handleChange = (event) => {
    setSearchedItem(event.target.value)
  }

  return (
    <form>
      <input onChange={handleChange} placeholder='Search' name='searchedItem'></input>
    </form>
  )
}

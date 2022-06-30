import React from 'react'
import '../../css/common/SearchBar.css'
import SearchBar from './SearchBar'
import BookData from '../../db.json'


const Search = () => {
  return (
    <div className='SeachBar'>
        <SearchBar placeholder="Enter a Book Name..." data={BookData}/>
    </div>
  )
}

export default Search
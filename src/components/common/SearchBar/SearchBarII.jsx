import React, {useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const SearchBarII = (props) => {

    const {onSearch} = props /* Esta constante almacena el valor de la busqueda y la enviamos como prop hacia SearchII.jsx */

    const [searchText, setSearchText] = useState('')

    const handleInput = (e) => {
        const text = e.target.value;
        setSearchText(text)
    }

    const handleEnterKeyPressed = (e) => {
        if (e.key === 'Enter') {
            onSearch(searchText)
        }
    }

    const clearInput = () => {
        setSearchText("")
      }

  return (
    <div className='d-flex justify-content-center'>
        <div className="control">
            <input
                type="text"
                placeholder='Search your movies'
                value={searchText}
                onChange={handleInput}
                onKeyPress={handleEnterKeyPressed}
                className="input p-2 mt-3"
            />
        </div>
        <div className="searchIcon mt-3"> 
              {searchText.length === 0 ? <SearchIcon /> : <CloseIcon id="clearBtn" onClick={clearInput}/>}
        </div>
    </div>
  )
}

export default SearchBarII
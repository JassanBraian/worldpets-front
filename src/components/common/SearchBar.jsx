import React, {useState} from 'react'
import '../../css/common/SearchBar.css'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

const SearchBar = ({placeholder, data}) => {

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (e) => {
    const searchWord = e.target.value
    setWordEntered(searchWord)
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if(searchWord === "") {
      setFilteredData([])
    } else {
      setFilteredData(newFilter)
    }    
  } 

  const clearInput = () => {
    setFilteredData([])
    setWordEntered("")
  }

  return (
    <div className="search">
        <div className="searchInputs">
            <input 
                type="text" 
                placeholder={placeholder} /* Para que sea igual a lo que le pasemos desde props desde Search.jsx */
                onChange={handleFilter}
                value={wordEntered}
            /> 

            <div className="searchIcon"> 
              {filteredData.length === 0 ? <SearchIcon /> : <CloseIcon id="clearBtn" onClick={clearInput}/>}
              
            </div>
        </div>
        {filteredData.length != 0 &&
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <Link className='dataItem' to={value.link} target="_blank">
                <p>{value.title} </p>
              </Link>
            );
          })}
        </div>
}
    </div>
  )
}

export default SearchBar

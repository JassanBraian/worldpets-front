import React, { useEffect, useContext } from "react";
import PublicationContext from "../../../../context/publication/PublicationContext";
import '../../../../css/common/SearchBar/SearchBar.css'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router";
import { MDBCol } from "mdbreact";



const SearchBar = () => {

  const {
    publicationSearch,
    setPublicationSearch,
    getPublications,
    publications,
    setFilteredData,
    filteredData
  } = useContext(PublicationContext);

  const navigate = useNavigate();

  useEffect(() => {
    getPublications();
    if (publicationSearch) {
      setPublicationSearch(publicationSearch)
      setFilteredData(publications)
    } else setPublicationSearch('');
  }, [])

  useEffect(() => {
    const newFilter = publications.filter((publication) => {
      return publication.title.toLowerCase().includes(publicationSearch.toLowerCase());
    });
    if (publicationSearch === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  }, [publicationSearch])

  const handleEnterKeyPressed = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setPublicationSearch(publicationSearch);
      navigate('/search-page');
    }
  }

  const clearInput = () => setPublicationSearch("");

  return (      
    
    <MDBCol md="6">
        <div className='d-flex justify-content-center'>
          <div className="control">
            <input
              type="text"
              placeholder='¿Que estas buscando?'
              className="search-bar-input p-2 mt-3"
              value={publicationSearch ? publicationSearch : ''}
              onChange={(e) => { 
                setPublicationSearch(e.target.value) 
                console.log("v1")
              }}
              onKeyPress={handleEnterKeyPressed} 
            />
          </div>
          <div className="searchIcon mt-3">
            {filteredData.length === 0 ? (
              <SearchIcon />
            ) : (
              <CloseIcon id="clearBtn" onClick={clearInput} />
            )}
          </div>
        </div>

    </MDBCol>
    


  );
}

export default SearchBar;
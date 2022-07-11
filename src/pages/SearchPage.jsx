import React, { useState, useEffect, useContext } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import clientAxios from '../config/axios';
import "../css/common/SearchBar/SearchPage.css"
import { Link } from 'react-router-dom';
import Spinner from '../components/common/spinner/Spinner';
import PublicationContext from '../context/publication/PublicationContext';


const SearchPage = () => {
    const [publications, setPublications] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const [loading, setLoading] = useState(false);
    const {publicationSearch} = useContext(PublicationContext)

    const handleFilter = (event) => {
        const searchWord = event.target.value || publicationSearch;
        setWordEntered(searchWord);
        const newFilter = publications.filter((value) => {
          return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });
        if (searchWord === "") {
            setFilteredData([]);
          } else {
            setFilteredData(newFilter);
          }
        };

        const clearInput = () => {
            setFilteredData([]);
            setWordEntered("");
          };
    
const getPublications = async () =>{
        try{
        setLoading(true)
        const response = await clientAxios.get('http://localhost:4000/api/v1/publication/');
        setPublications(response.data.publications);
        setLoading(false)
        } catch (error){
            throw error
        }
    };

    useEffect(() => {
        getPublications()
    }, [])

    if(loading){
        return <Spinner />
    }

  return (
    <>
        <div className='d-flex justify-content-center'>
            <div className="control">
                <input
                    type="text"
                    placeholder='Search your movies'
                    className="input p-2 mt-3"
                    value={wordEntered}
                    onChange={handleFilter}
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
    <section className='container'>
        <div className='row justify-content-center'> 
                
                { 
                filteredData.length != 0 ? 
                filteredData.map((publication) => {
                        return (
                        <div className='col-11 col-md-6 col-lg-3 card m-3 p-0'>
                        <div key={publication._id}>        
                            <img src="https://i.pinimg.com/originals/aa/64/1c/aa641c2b927cba0e99b9dcbad59e7b14.jpg" className="card-img-top img-fluid" alt= '' />
                            <div className="card-body">
                                <h1 className="card-title">{publication.title}</h1>  
                                <p className="card-text">{publication.description}</p>
                            </div>
                        </div>
                        <Link to="/single-product" className="stretched-link"></Link>
                        </div>
                        );
                        })
                :
                <div>
                    <h2 className='text-center no-results'>No se encontraron resultados</h2>
                    <div className='d-flex justify-content-center'>
                    <button type="submit" className='search-page-submit-button mb-5 mt-4'>
                        <Link to="/" className='text-decoration-none text-dark'>Volver a inicio</Link> 
                        </button>
                    </div>
                </div>
                }
            
        </div>
    </section>
    </>

  )
}

export default SearchPage
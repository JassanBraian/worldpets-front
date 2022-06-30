import CardList from "./CardList";
import SearchBarII from "./SearchBarII";

import "../../../css/common/SearchBar/SearchII.css"

import MovieSource from "./API/MovieSource";
import React, { useState } from "react";

const SearchII = () => {

    const [state, setState] = useState({
        results: []
    });

   /* http://www.omdbapi.com/?i=tt3896198&apikey=fdd89297 */
    
    const onSearch = async(text) => {
        const results = await MovieSource.get("/", {
            params: {s: text, i:"tt3896198", apiKey: "fdd89297"}
        })

        setState(prevState => {
            return {...prevState, results:results}
        })
    } 

  return (
    <div className="SearchII">
        <div className="container searchII">
            <h1 className="title text-center">
                ¿Que estas buscando?
            </h1>
            <SearchBarII onSearch={onSearch}/>
            <CardList results={state.results}/>
        </div>
    </div>
  )
}

export default SearchII
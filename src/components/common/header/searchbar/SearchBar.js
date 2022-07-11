import React from "react";
import { MDBCol, MDBIcon } from "mdbreact";
import { Link } from "react-router-dom";

const SearchBar = () => {
  return (

    <MDBCol md="6">
      <form className="form-inline mt-2 mb-2">
        <input className="form-control form-control-sm ml-3 w-100" type="text" placeholder="Buscar" />
      </form>
    </MDBCol >


  );
}

export default SearchBar;
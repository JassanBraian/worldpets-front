import React from 'react'
// import { useNavigate } from 'react-router-dom';

// const navigate = useNavigate();

// const goToCategory = ()=>{
//     navigate('/category/:name')
//   }


const SeeMoreButton = () => {
    const buttonStyle = {
        backgroundColor: "#D3B72A",
        height: "50px",
        width: "auto",
        fontFamily: "Pacifico",
        fontSize: "2rem",
        border: "4px groove gray",
        borderRadius:"2px",
        marginLeft: "1200px",
        
      };
  return (
    <button style={buttonStyle}>Ver Más</button>
  )
}

export default SeeMoreButton;
import CategoriesContext from "./CategoriesContext";
import { useState, useEffect } from "react";


const CategoriesProvider = ({children}) => {
    const API_URL = 'http://localhost:5000/publications'
    const [categoriesList, setCategoriesList] = useState([]);
       const getPostsCategory = async category => {
         try {
            const response = await fetch(API_URL);
            const data = await response.json();
            const categoriesList = data.filter(post => post.category === category);
            setCategoriesList(categoriesList);
            } catch (error) {
                throw error;
            }
        }

    useEffect(() => {
      getPostsCategory('se perdio')
    }, []);
    console.log(categoriesList)
    
  return (

        <CategoriesContext.Provider value={{ 
            getPostsCategory
            }}>
            {children}
        </CategoriesContext.Provider>
      
  )
}

export default CategoriesProvider

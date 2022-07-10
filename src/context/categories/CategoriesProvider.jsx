import CategoriesContext from "./CategoriesContext";
import clientAxios from "../../config/axios";

const categoryList = {
  'up for adoption': {
    title: 'En adopción',
    urlFriendlyId: 'up-for-adoption',
  },
  'lost': {
    title: 'Se perdió',
  },
  'found': {
    title: 'Lo encontramos',
  }
}
const CategoriesProvider = ({children}) => {
       const getCategories = async () => {
         try {
            const response = await clientAxios.get(`http://localhost:4000/api/v1/publication`);
            const posts = response.data.publications;
            return Object.values( posts.reduce((memo, post) => {
              if (!memo[post.category]) {
                  memo[post.category] = {
                    ...categoryList[post.category], 
                    id:post.category, 
                    urlFriendlyId: categoryList[post.category] ?? post.category, 
                    posts: []
                  };
              }
              memo[post.category].posts.push(post);
              return memo;
          }, {}));
            } catch (error) {
                throw error;
            }
        };
      
        const getCategoryById = async (categoryId) => {
          const categories = await getCategories()
          console.log(categories)
          return categories.find(x => x.id === categoryId)

        }
        
      
  return (

        <CategoriesContext.Provider value={
         { getCategories,
        getCategoryById}
          
        }>
            {children}
        </CategoriesContext.Provider>
      
  )
}

export default CategoriesProvider

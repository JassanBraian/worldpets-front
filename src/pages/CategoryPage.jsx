import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import ListaCards from '../components/entities/publication/cards/ListaCards'
import CategoriesContext from '../context/categories/CategoriesContext'
import '../css/common/pages/category.css'

const CategoryPage = () => {
  const {getCategoryById} = useContext(CategoriesContext)
  let {categoryId} = useParams();
  const [category, setCategory] = useState({});

  useEffect(() => {
    async function doGetCategory(){
        const category = await getCategoryById(categoryId);
        console.log(category)
        setCategory(category)
    }
    doGetCategory()
}, [])
  
  return (
    <>
      <ListaCards title={category.title} posts={category.posts} />
    </>
  )
}

export default CategoryPage;
// <Category title={category.title} posts={category.posts} />
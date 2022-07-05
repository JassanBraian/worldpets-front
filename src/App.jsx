import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FavoriteList from './components/entities/favorites/FavoriteList';
import FatherContext from './context/FatherContext';
import Category from './pages/Category';
import CommentPage from './pages/CommentPage';
import Home from './pages/Home';

function App() {
  return (
    <FatherContext>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        ></Route>
        <Route
          path='/comment'
          element={<CommentPage />}
        ></Route>
        <Route path='/Category' element={<Category/>} title= 'Destacadas'/>
      </Routes>
    </FatherContext>
  );
}

export default App;

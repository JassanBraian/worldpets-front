import { Routes, Route, } from 'react-router-dom';
import CommentPage from './pages/CommentPage';
import Home from './pages/Home';
function App() {
  return (
    <>
      <Routes>
        <Route 
          path='/' 
          element={<Home />}
        ></Route>
        <Route 
          path='/comment'
          element={<CommentPage />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;

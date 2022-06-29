import { Routes, Route, } from 'react-router-dom';
import FatherContext from './context/FatherContext';
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
      </Routes>
    </FatherContext>
  );
}

export default App;

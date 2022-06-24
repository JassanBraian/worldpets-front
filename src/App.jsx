import { Routes, Route, } from 'react-router-dom';
import CommentProvider from './context/comment/CommentProvider';
import CommentPage from './pages/CommentPage';
import Home from './pages/Home';

function App() {
  return (
    <CommentProvider>
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
    </CommentProvider>
  );
}

export default App;

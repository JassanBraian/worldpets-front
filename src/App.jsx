import { Routes, Route, } from 'react-router-dom';
import ParentContext from './context/ParentContext';
import CommentPage from './pages/CommentPage';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import SearchII from "./pages/SearchII";

function App() {
  return (
    <ParentContext>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/comment' element={<CommentPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/reset/:token" element={<ResetPassword />} />
        <Route path="/search-page" element={<SearchII/>}/>
      </Routes>
    </ParentContext>
  )
  }

export default App;

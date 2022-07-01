import { Routes, Route, } from 'react-router-dom';
import ParentContext from './context/ParentContext';
import CommentPage from './pages/CommentPage';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import SearchII from "./pages/SearchII";
import UserMenu from './pages/UserMenu';

function App() {
  return (
    <ParentContext>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/comment' element={<CommentPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/resetPassword" element={<ResetPassword/>}/> {/* El path es asi path="/reset/:token" pero le saco lo del :token para poder trabajar con el diseño ahsta que este el backend*/}
        <Route path="/search-page" element={<SearchII/>}/>
        <Route path="/user-menu" element={<UserMenu/>}/> {/* Creo que hay que envolver a user-menu en PrivateRoute */}
      </Routes>
    </ParentContext>
  )
  }

export default App;

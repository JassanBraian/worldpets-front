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
import SinglePublication from './pages/SinglePublication';
import ProfileImage from './pages/ProfileImage';
import Layout from './components/common/layout/Layout';
import UserPage from './pages/UserPage';
import PublicationsPage from './pages/PublicationsPage';

function App() {
  return (
    <ParentContext>
      <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/comment' element={<CommentPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/resetPassword/:token" element={<ResetPassword/>}/> {/* El path es asi path="/reset/:token" pero le saco lo del :token para poder trabajar con el diseño ahsta que este el backend*/}
        <Route path="/search-page" element={<SearchII/>}/>
        <Route path="/user-menu" element={<UserMenu/>}/> {/* Creo que hay que envolver a user-menu en PrivateRoute */}
        <Route path='/profile-image'element={<ProfileImage/>}/>
        <Route path="/single-product" element={<SinglePublication/>}/>         
        <Route path='/user' element={<UserPage />}/>
        <Route path='/publications-page' element={ <PublicationsPage /> }/>
        </Routes> 
      </Layout>
    </ParentContext>
  )
  }

export default App;

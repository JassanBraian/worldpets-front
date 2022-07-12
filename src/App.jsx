
import ParentContext from './context/ParentContext';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CategoryPage from './pages/CategoryPage';
import CommentPage from './pages/CommentPage';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import SearchPage from "./pages/SearchPage";
import UserMenu from './pages/UserMenu';
import SinglePublication from './pages/SinglePublication';
import ProfileImage from './pages/ProfileImage';
import Layout from './components/common/layout/Layout';
import UserPage from './pages/UserPage';
import PublicationsPage from './pages/PublicationsPage';
import PrivateRoute from './context/PrivatesRoutes/PrivateRoute';
import AdminRoute from './context/PrivatesRoutes/AdminRoute';

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
        <Route path="/resetPassword/:token" element={<ResetPassword/>}/>
        <Route path="/search-page" element={<SearchPage/>}/>
        <Route path="/user-menu" element={
          <PrivateRoute>
            <UserMenu/>
          </PrivateRoute>
        }/>
        <Route path='/profile-image'element={<ProfileImage/>}/>
        <Route path="/single-publication/:id" element={

          <SinglePublication/>

        }/>         
        <Route path='/user' element={<UserPage />}/>
        <Route path='/publications-page' element={ <PublicationsPage /> }/>
        <Route path='/publication-new' element={<PublicationNew />} />
        <Route path='/category/:categoryId' element={<CategoryPage/>} title= 'Destacadas'/>
        </Routes> 
      </Layout>
    </ParentContext>
  )
}

export default App;

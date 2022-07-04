import { Routes, Route, } from 'react-router-dom';
import ParentContext from './context/ParentContext';
import CommentPage from './pages/CommentPage';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Layout from './components/common/layout/Layout';
import UserPage from './pages/UserPage';

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
          <Route path="/reset/:token" element={<ResetPassword />} />
          <Route path='/user' element={<UserPage />}/>
        </Routes>
      </Layout>
    </ParentContext>
  );
}

export default App;

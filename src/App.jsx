import AuthState from './context/user/AuthState';

//Dependencies
import {Routes, Route} from 'react-router-dom';

//Pages

import UserMenu from './pages/UserMenu';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';

function App() {
  return (

      <AuthState>
        <Routes>
          <Route path="/user-menu" element={<UserMenu/>}/>
          <Route path="/forgot-password" element={<ForgotPassword/>}/>
          <Route path="/reset-password" element={<ResetPassword/>}/>
        </Routes>
      </AuthState>

  );
}

export default App;

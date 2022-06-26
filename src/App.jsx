import AuthState from './context/user/AuthState';
import PrivateRoute from './context/user/PrivateRoute';

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
          <Route path="/user-menu" element={

            <UserMenu/> 
            
          }/>
          <Route path="/forgotPassword" element={<ForgotPassword/>}/>
          <Route path="/resetPassword" element={<ResetPassword/>}/> {/* El path es asi path="/reset/:token" pero le saco lo del :token para poder trabajar con el diseño ahsta que este el backend*/}
        </Routes>
      </AuthState>

  );
}

export default App;

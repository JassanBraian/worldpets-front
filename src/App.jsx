//Dependencies
import {Routes, Route} from 'react-router-dom';

//Pages

import UserMenu from './pages/UserMenu';

function App() {
  return (
    <>
      <Routes>
        <Route path="/user-menu" element={<UserMenu/>}/>
      </Routes>
    </>
  );
}

export default App;

//Dependencies
import {Routes, Route} from 'react-router-dom';

//Pages

import SinglePublication from './pages/SinglePublication';

function App() {
  return (
    <>
      <Routes>
        <Route path="/new-single-product" element={<SinglePublication/>}/>
      </Routes>
    </>
  );
}

export default App;

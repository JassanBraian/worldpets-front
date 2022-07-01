import { Routes, Route } from "react-router-dom";
import SearchII from "./pages/SearchII";

function App() {
  return (
    <Routes>
      <Route path="/search-page" element={<SearchII/>}/>
    </Routes>
  );
}

export default App;

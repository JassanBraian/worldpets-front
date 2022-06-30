import { Routes, Route } from "react-router-dom";
import Search from "./components/common/Search";
import SearchII from "./components/common/SearchBar/SearchII";

function App() {
  return (
    <Routes>
      <Route path="/searchBar" element={<Search/>}/>
      <Route path="/searchBar2" element={<SearchII/>}/>
    </Routes>
  );
}

export default App;

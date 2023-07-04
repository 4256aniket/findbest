import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Categories from "./pages/Categories.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import "./index.css";
import MedicalSeachPage from "./pages/MedicalSeachPage";
import ClothingSearchPage from "./pages/ClothingSearchPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/search-page" element={<SearchPage />} />
        <Route path="/search-page/medical" element={<MedicalSeachPage />} />
        <Route path="/search-page/clothing" element={<ClothingSearchPage />} />
      </Routes>
    </Router>
  );
}

export default App;

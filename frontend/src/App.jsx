import { Navbar, Footer } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "./pages/Home/HomePage";
import ProductPage from './pages/Products/ProductPage'
import ProductDetailPage from './pages/ProductDetail/ProductDetailPage'
import CategoryPage from './pages/Category/CategoryPage'

const App = () => {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<ProductPage />}>
          <Route exact path="/" element={<CategoryPage />} />
          <Route path="/:id" element={<ProductDetailPage />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

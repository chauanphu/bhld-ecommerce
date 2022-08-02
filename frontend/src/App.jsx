import { Navbar, Footer } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "./pages/Home/HomePage";
import ProductPage from './pages/Products/ProductPage'
import ProductDetailPage from './pages/ProductDetail/ProductDetailPage'
import CategoryPage from './pages/Category/CategoryPage'
import NotFoundPage from "./pages/NotFound";
import "swiper/css/bundle";

const App = () => {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<ProductPage />}>
          <Route path="/" element={<CategoryPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

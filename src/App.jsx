import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "./pages/Home/HomePage";
import { ShopPage, ProductDetailPage, CategoryPage, NotFoundPage, ContactPage } from 'pages/Shop'
import { LoginPage, AdminPage } from 'pages/Admin'
import "swiper/css/bundle";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ShopPage />}>
          <Route path="/" element={<CategoryPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path="/category/:id" element={<CategoryPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin/*" element={<AdminPage />} />
      </Routes>
    </Router>
  );
};

export default App;

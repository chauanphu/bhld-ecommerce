import { Navbar, Footer } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import ProductPage from './pages/Product/ProductPage'
const App = () => {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/products/*" element={<ProductPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

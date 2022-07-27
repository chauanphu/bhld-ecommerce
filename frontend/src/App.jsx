import { Navbar, Footer } from "./components";
import HomePage from "./views/Home";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HomePage></HomePage>
      <Footer />
    </div>
  );
};

export default App;

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Catalog from "./Pages/Catalog";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ShoppingList from "./Pages/ShoppingList";
import Admin from "./Pages/Admin";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalProvider from "./context/GlobalProvider";
import Cart from "./Pages/Cart";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="ShoppingList" element={<ShoppingList />} />
            <Route path="Admin" element={<Admin />} />
            <Route path="Cart" element={<Cart />} />
          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;

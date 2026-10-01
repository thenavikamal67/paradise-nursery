
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import "./App.css";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import Navbar from "./components/Navbar";

function Home() {
  return (
    <div>
      <section className="landing-page">
        <div className="landing-content">
          <h1>Paradise Nursery</h1>
          <p>
            Bring nature home with our beautiful collection
            of indoor plants. Discover greenery that makes
            every space feel fresh and peaceful.
          </p>
          <Link to="/plants">
            <button className="primary-button">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      <AboutUs />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/plants"
          element={
            <>
              <Navbar />
              <ProductList />
            </>
          }
        />

        <Route
          path="/cart"
          element={
            <>
              <Navbar />
              <CartItem />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

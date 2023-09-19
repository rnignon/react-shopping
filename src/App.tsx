import React from "react";
import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";

import Nav from "./components/Nav.tsx";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";

const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="detail/:productId" element={<DetailPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

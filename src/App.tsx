import React from "react";
import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";

import Nav from "./components/Nav.tsx";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import MyPage from "./pages/MyPgae/index.tsx";
import JoinPage from "./pages/JoinPage/index.tsx";
import { firebaseApp } from "./firebase-config.ts";

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
          <Route path="join" element={<JoinPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="mypage" element={<MyPage />} />
          <Route path="detail/:productId" element={<DetailPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

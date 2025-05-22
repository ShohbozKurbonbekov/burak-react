import React, { useState } from "react";
import { Switch, useLocation } from "react-router-dom";

import { Route } from "react-router-dom";
import HomePage from "./screens/HomePage/Index";
import ProductPage from "./screens/productsPage";
import OrdersPage from "./screens/ordersPage";
import UserPage from "./screens/userPage/Index";
import HomeNavbar from "./components/headers/HomeNavbar";
import OtherNavbar from "./components/headers/OtherNavbar";
import Footer from "./components/footers/FooterIndex";
import HelpPage from "./screens/helpPage/Index";
import "../css/app.css";
import "../css/navbar.css";
import "../css/footer.css";
import { CartItem } from "../lib/types/search";
import useBasket from "./hooks/useBasket";
import AuthenticationModal from "./components/auth";

function App() {
  const location = useLocation();
  const { cartItems, onAdd, onRemove, onDelete, onDeleteAll } = useBasket();
  const [signupOpen, setSignupOpen] = useState<boolean>(true);
  const [loginOpen, setLoginOpen] = useState<boolean>(false);

  // HANDLERS
  const handleSignupClose = () => setSignupOpen(false);
  const handleLoginClose = () => setLoginOpen(false);
  return (
    <>
      {location.pathname === "/" ? (
        <HomeNavbar
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          onDelete={onDelete}
          onDeleteAll={onDeleteAll}
        />
      ) : (
        <OtherNavbar
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          onDelete={onDelete}
          onDeleteAll={onDeleteAll}
        />
      )}
      <Switch>
        <Route path="/products">
          <ProductPage onAdd={onAdd} />
        </Route>
        <Route path="/orders">
          <OrdersPage />
        </Route>
        <Route path="/member-page">
          <UserPage />
        </Route>
        <Route path="/help">
          <HelpPage />
        </Route>
        <Route path="/">
          <HomePage />
          {/* <Test /> */}
        </Route>
      </Switch>
      <Footer />

      <AuthenticationModal
        signupOpen={signupOpen}
        loginOpen={loginOpen}
        handleLoginClose={handleLoginClose}
        handleSignupClose={handleSignupClose}
      />
    </>
  );
}

export default App;

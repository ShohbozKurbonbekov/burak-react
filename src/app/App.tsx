import React from "react";
import "../css/app.css";
import { Switch, useLocation } from "react-router-dom";

import { Route } from "react-router-dom";
import { HomePage } from "./screens/HomePage/Index";
import { ProductPage } from "./screens/productsPage";
import { OrdersPage } from "./screens/ordersPage";
import { UserPage } from "./screens/userPage/Index";
import HomeNavbar from "./components/headers/HomeNavbar";
import OtherNavbar from "./components/headers/OtherNavbar";
import { Footer } from "./components/footers/FooterIndex";

function App() {
  const location = useLocation(); // (/)

  return (
    <>
      {location.pathname === "/" ? <HomeNavbar /> : <OtherNavbar />}
      <Switch>
        <Route path="/products">
          <ProductPage />
        </Route>
        <Route path="/orders">
          <OrdersPage />
        </Route>
        <Route path="/member-page">
          <UserPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;

import { Route, Switch, useRouteMatch } from "react-router-dom";
import ChosenProduct from "./ChosenProduct";
import Products from "./Products";

export default function ProductPage() {
  const products = useRouteMatch();
  return (
    <div className="products-page">
      <Switch>
        <Route path={`${products.path}/:productId`}>
          <ChosenProduct />
        </Route>
        <Route path={`${products.path}/`}>
          <Products />
        </Route>
      </Switch>
    </div>
  );
}

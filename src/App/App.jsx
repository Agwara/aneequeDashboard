import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Employee from "../pages/Employee/Employee";
import Orders from "../pages/Orders/Orders";
import Overview from "../pages/Overview/Overview";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import Products from "../pages/Products/Products";
import Settings from "../pages/Settings/Settings";
import Shipment from "../pages/Shipment/Shipment";
import SideBar from "../components/SideBar/SideBar";

import "./App.css";

const App = () => {
  
  return (
    <Router>
      <div className="app-container">
        <SideBar />
        <Switch>
          <Route exact path="/" component={Overview} />

          <Route exact path="/employee" component={Employee} />

          <Route exact path="/orders" component={Orders} />

          <Route exact path="/products" component={Products}/>

          <Route exact path="/settings" component={Settings}/>

          <Route exact path="/location" component={Shipment}/>

          <Route exact path="*" component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  )
}


export default App;
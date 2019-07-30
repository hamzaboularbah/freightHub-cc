import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Shipments from "../components/Shipments";
import ShipmentDetails from "../components/ShipmentDetails";

const RouterView = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Shipments} />
      <Route exact path="/shipments" component={Shipments} />
      <Route path="/shipments/:shipmentId" component={ShipmentDetails} />
    </Switch>
  </Router>
);
export default RouterView;

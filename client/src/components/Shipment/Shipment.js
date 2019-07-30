import React from "react";
import { Link } from "react-router-dom";

let Shipment = ({ shipment }) => {
  return (
    <React.Fragment>
      <h1>{shipment.name}</h1>
      <h2>{shipment.id}</h2>
      <h3>{shipment.mode}</h3>
      <Link to={`/shipments/${shipment.id}`}>
        <button value="Show Details">Show Detail</button>
      </Link>
      <p>-------------------------------</p>
    </React.Fragment>
  );
};

export default Shipment;

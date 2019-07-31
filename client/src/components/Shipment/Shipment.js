import React from "react";
import { Link } from "react-router-dom";
import "./Shipment.sass";

const Shipment = ({ shipment }) => {
  const { id, name, mode, status, origin, destination } = shipment;
  return (
    <Link to={`/shipments/${id}`}>
      <div className="shipment-item">
        <div className="shipment-item__price">
          <h2>{id} </h2>
        </div>
        <div className="shipment-item__details">
          <div className="shipment-item__header">
            <h4>
              {name} - <strong>{mode}</strong>
            </h4>

            <div
              className={`shipment-item__status shipment-item__status--${status.toLowerCase()}`}
            >
              <span>{status}</span>
            </div>
          </div>
          <div className="shipment-item__direction">
            <div className="shipment-item__origin">
              <span>Origin</span>
              <p>{origin}</p>
            </div>
            <div className="shipment-destination">
              <span>Destination</span>
              <p>{destination}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Shipment;

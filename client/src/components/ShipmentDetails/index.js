import React, { useEffect, useState } from "react";
import ShipementDetails from "./ShipmentDetails";
import { withRouter } from "react-router-dom";
import http from "../../utils/http";

const ShipementDetailsContainer = ({ match }) => {
  const [shipment, setShipment] = useState({});
  const [isEditMode, setIsEditMode] = useState(false);

  const getShipment = id => {
    http
      .get(`/shipments/${id}`)
      .then(shipment => setShipment(shipment.data))
      .catch(err => console.log(err.message));
  };

  useEffect(() => {
    getShipment(match.params.shipmentId);
  }, []);

  const changeEditMode = () => {
    setIsEditMode(true);
  };

  const handleChangeName = (id, name) => {
    http
      .patch(`/shipments/${id}`, { name })
      .then(resp =>
        resp.status === 200 ? (getShipment(id), setIsEditMode(false)) : null
      )
      .catch(err => console.log(err.message));
  };

  return (
    <ShipementDetails
      onChangeName={handleChangeName}
      isEditMode={isEditMode}
      changeEditMode={changeEditMode}
      shipment={shipment}
    />
  );
};

export default withRouter(ShipementDetailsContainer);

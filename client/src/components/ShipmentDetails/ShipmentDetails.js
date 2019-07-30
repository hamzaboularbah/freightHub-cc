import React from "react";

const ShipmentDetails = ({
  shipment,
  changeEditMode,
  isEditMode,
  onChangeName
}) => {
  const {
    id,
    name,
    type,
    total,
    userId,
    mode,
    status,
    cargo,
    origin,
    destionation,
    services
  } = shipment;
  let newName = name;
  return (
    <div className="shipment-details">
      <div className="shipment-detail__id">{id}</div>
      {isEditMode ? (
        <div>
          {" "}
          <input
            onChange={e => (newName = e.target.value)}
            type="text"
            defaultValue={name}
          />
          <button onClick={e => onChangeName(id, newName)}>Save</button>
        </div>
      ) : (
        <div onDoubleClick={changeEditMode} className="shipment-detail__name">
          {name}
        </div>
      )}

      <div className="shipment-detail__mode">{mode}</div>
      <div className="shipment-detail__satus">{status}</div>
    </div>
  );
};

export default ShipmentDetails;

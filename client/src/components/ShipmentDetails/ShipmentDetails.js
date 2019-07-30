import React from "react";
import "./ShipmentDetails.sass";

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
    destination,
    services
  } = shipment;
  let newName = name;
  return (
    <div className="details-container">
      <div className="shipment-d-item">
        <div className="shipment-d-item__details">
          <div className="shipment-d-item__header">
            {isEditMode ? (
              <div className="edit">
                <input
                  onChange={e => (newName = e.target.value)}
                  type="text"
                  defaultValue={name}
                />

                <button onClick={() => onChangeName(id, newName)}>Save</button>
              </div>
            ) : (
              <div>
                <h4>
                  {name}{" "}
                  <button className="edit-button" onClick={changeEditMode}>
                    Edit
                  </button>
                </h4>
              </div>
            )}
            <div className="shipment-d-item__status shipment-d-item__status--completed">
              <span>{status}</span>
            </div>
          </div>
          <div className="shipment-d-item__grouped-labels">
            <div className="shipment-d-item__price">
              <label>Price</label>
              <div>{total} &euro;</div>
            </div>
            <div className="shipment-d-item__mode">
              <label>Mode</label>
              <div>{mode}</div>
            </div>
            <div className="shipment-d-item__type">
              <label>Type</label>
              <div>{type}</div>
            </div>
            <div className="shipment-d-item__userId">
              <label>User ID</label>
              <div>{userId}</div>
            </div>
          </div>
          {cargo ? (
            <div className="shipment-d-item__dataTable">
              <label>Cargo</label>
              <table>
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Descrpition</th>
                    <th>Volume</th>
                  </tr>
                </thead>
                <tbody>
                  {cargo.map((cargo, i) => (
                    <tr key={i}>
                      <td>{cargo.type}</td>
                      <td>{cargo.description}</td>
                      <td>{cargo.volume}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : null}
          {services ? (
            <div className="shipment-d-item__dataTable">
              <label>Services</label>
              <table>
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((service, i) => (
                    <tr key={i}>
                      <td>{service.type}</td>
                      <td>{service.description ? service.description : "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : null}
          <div className="shipment-d-item__direction">
            <div className="shipment-d-item__direction--origin">
              <span>Origin</span>
              <p>{origin}</p>
            </div>
            <div className="shipment-d-item__direction--destination">
              <span>Destination</span>
              <p>{destination}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipmentDetails;

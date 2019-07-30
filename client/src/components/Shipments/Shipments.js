import React from "react";
import Shipment from "../Shipment/Shipment";
import _ from "lodash";

let Shipments = ({
  paginatedShipments,
  shipments,
  onFilter,
  onSort,
  getShipments,
  onchangeCurrentPage,
  pageSize
}) => {
  const pagesCount = Math.ceil(shipments.length / pageSize);
  const pages = _.range(1, pagesCount + 1);
  return (
    <React.Fragment>
      <input
        onChange={e => onFilter(e.target.value)}
        type="text"
        placeholder="search by ID"
      />
      <span>Sort by : </span>
      <select onChange={e => onSort(e.target.value)} defaultValue="-">
        <option disabled value="-">
          -
        </option>
        <option value="id">ID</option>
        <option value="name">Name</option>
        <option value="mode">Mode</option>
      </select>

      <div className="shipments-list">
        {paginatedShipments.length > 0 ? (
          paginatedShipments.map((shipment, i) => (
            <Shipment getShipments={getShipments} key={i} shipment={shipment} />
          ))
        ) : (
          <h1>No Shipments to Show</h1>
        )}
      </div>

      <div className="pagination">
        <ul className="pagination-items">
          {pages.map(page => (
            <li key={page}>
              <button
                value={page}
                onClick={e => onchangeCurrentPage(e.target.value)}
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Shipments;

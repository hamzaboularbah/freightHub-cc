import React, { useState } from "react";
import Shipment from "../Shipment/Shipment";
import _ from "lodash";
import "./Shipments.sass";

const Shipments = ({
  paginatedShipments,
  shipments,
  onFilter,
  onSort,
  onchangeCurrentPage,
  pageSize,
  currentPage
}) => {
  const [searchID, setSearchID] = useState("");
  const pagesCount = Math.ceil(shipments.length / pageSize);
  const pages = _.range(1, pagesCount + 1);
  return (
    <div className="container">
      <div className="filters-area">
        <div className="search">
          <span>Search : </span>
          <input
            onChange={e =>
              !e.target.value ? onFilter("") : setSearchID(e.target.value)
            }
            type="text"
            placeholder="search by ID"
          />
          <button onClick={() => (searchID ? onFilter(searchID) : searchID)}>
            Find
          </button>
        </div>
        <div className="sort">
          <span>Sort by :</span>
          <select onChange={e => onSort(e.target.value)} defaultValue="-">
            <option disabled value="-">
              -
            </option>
            <option value="id">ID</option>
            <option value="name">Name</option>
            <option value="mode">Mode</option>
          </select>
        </div>
      </div>

      <div className="shipments-list">
        {paginatedShipments.length > 0 ? (
          paginatedShipments.map(shipment => (
            <Shipment key={shipment.id} shipment={shipment} />
          ))
        ) : searchID ? (
          <h3>No Shipments available</h3>
        ) : (
          <div className="loader">
            <div className="spinner" />
            <div className="loading-message">Loading shipments...</div>
          </div>
        )}
      </div>

      {pages.length > 1 ? (
        <div className="pagination">
          <ul className="pagination-items">
            {pages.map(page => (
              <li
                value={page}
                onClick={e => onchangeCurrentPage(e.target.value)}
                className={page === currentPage ? "active" : ""}
                key={page}
              >
                {page}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Shipments;

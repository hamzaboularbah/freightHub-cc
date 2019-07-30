import React from "react";
import Shipment from "../Shipment/Shipment";
import _ from "lodash";
import "./Shipments.sass";

let Shipments = ({
  paginatedShipments,
  shipments,
  onFilter,
  onSort,
  onchangeCurrentPage,
  pageSize,
  currentPage
}) => {
  const pagesCount = Math.ceil(shipments.length / pageSize);
  const pages = _.range(1, pagesCount + 1);
  return (
    <div className="container">
      <div className="filters-area">
        <div className="search">
          <span>Search : </span>
          <input
            onChange={e => onFilter(e.target.value)}
            type="text"
            placeholder="search by ID"
          />
        </div>
        <div className="sort">
          <span>Sort by :</span>
          <select onChange={e => onSort(e.target.value)} defaultValue="-">
            <option disabled value="-">
              -
            </option>
            <option value="id">ID</option>
            <option value="name">Name</option>
            <option value="total">Price</option>
          </select>
        </div>
      </div>

      <div className="shipments-list">
        {paginatedShipments.length > 0 ? (
          paginatedShipments.map((shipment, i) => (
            <Shipment key={i} shipment={shipment} />
          ))
        ) : (
          <h1>No Shipments to Show</h1>
        )}
      </div>

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
    </div>
  );
};

export default Shipments;

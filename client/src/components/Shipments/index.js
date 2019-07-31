import React, { useState, useEffect } from "react";
import Shipments from "./Shipments";
import http from "../../utils/http";
import { paginate } from "../../utils/paginate";

const ShipmentsContainer = () => {
  const pageSize = 20;
  const [shipments, setShipments] = useState([]);
  const [filteredShipements, setFilteredShipments] = useState(shipments);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedShipments, setPaginatedShipment] = useState([]);

  const getShipments = () => {
    http
      .get("/shipments")
      .then(resp => {
        setShipments(resp.data);
        setFilteredShipments(resp.data);
        setPaginatedShipment(paginate(resp.data, currentPage, pageSize));
      })
      .catch(err => console.log(err.message));
  };

  useEffect(() => {
    getShipments();
  }, []);

  const changeCurrentPage = page => {
    setCurrentPage(page);
    setPaginatedShipment(paginate(filteredShipements, page, pageSize));
  };

  const filterByID = value => {
    const filterCriteria = value ? `?id=${value}` : "";
    http
      .get(`/shipments${filterCriteria}`)
      .then(resp => {
        setFilteredShipments(resp.data);
        setPaginatedShipment(
          resp.data.length > 0 ? paginate(resp.data, currentPage, pageSize) : []
        );
      })
      .catch(err => console.log(err.message));
  };

  const sortShipments = sort => {
    setCurrentPage(1);
    http
      .get(`/shipments?_sort=${sort}&_order=asc`)
      .then(shipments => {
        setFilteredShipments(shipments.data);
        setPaginatedShipment(paginate(shipments.data, 1, pageSize));
      })
      .catch(err => console.log(err.message));
  };

  return (
    <Shipments
      currentPage={currentPage}
      pageSize={pageSize}
      onchangeCurrentPage={changeCurrentPage}
      getShipments={getShipments}
      onSort={sortShipments}
      onFilter={filterByID}
      shipments={filteredShipements}
      paginatedShipments={paginatedShipments}
    />
  );
};

export default ShipmentsContainer;

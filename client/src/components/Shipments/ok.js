class ShipmentsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      pageSize: 1,
      shipments: [],
      filteredShipements: []
    };
  }
  getShipments = () => {
    http
      .get("/shipments")
      .then(resp => {
        setState({
          ...this.state,
          shipments: resp.data,
          filteredShipements: resp.data
        });
      })
      .catch(err => console.log(err.message));
  };
  componentDidMount() {
    this.getShipments();
  }

  changeCurrentPage = page => {
    setState({
      ...this.state,
      currentPage: page,
      filteredShipements: paginate(
        filteredShipements,
        this.state.currentPage,
        pageSize
      )
    });
  };
  filterByID = value => {
    const filterCriteria = value ? `?id=${value}` : "";
    http
      .get(`/shipments${filterCriteria}`)
      .then(resp => {
        setState({
          ...this.state,
          filteredShipements: resp.data
        });

        setFilteredShipments(resp.data);
        setFilteredShipments(
          resp.data.length > 0 ? paginate(resp.data, currentPage, pageSize) : []
        );
      })
      .catch(err => console.log(err.message));
  };

  render() {
    return (
      <Shipments
        currentPage={this.state.currentPage}
        pageSize={his.state.pageSize}
        onchangeCurrentPage={this.changeCurrentPage}
        getShipments={this.getShipments}
        onSort={this.sortShipments}
        onFilter={filterByID}
        shipments={filteredShipements}
        paginatedShipments={paginatedShipments}
      />
    );
  }
}

export default ShipmentsContainer;

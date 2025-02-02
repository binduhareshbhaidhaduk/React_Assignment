import "bootstrap/dist/css/bootstrap.min.css";
import './Home.css';
import { Dropdown } from "react-bootstrap";
import React, { useState } from "react";
import { HiOutlineArrowLongDown } from "react-icons/hi2";
import { BsPlusSquareFill } from "react-icons/bs";
import { SignOut } from "../../Services/Action/action";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [expandedRows, setExpandedRows] = useState([]);

  const handleSignOut = () => {
    dispatch(SignOut());
    navigate('/login');
  }

  const toggleRow = (id) => {
    setExpandedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  // Sample Data
  const bids = [
    {
      id: 1,
      bidNumber: "#122345678123",
      name: "SUNDER YADAV",
      startDate: "14/02/2024",
      time: " 05:40 PM",
      remainingTime: "7hr 20min",
      route: "Gurgaon → Mumbai",
      vehicle: "Truck, 20ft (Close Body)",
      weight: "4000 Kg",
      response: '4',
      staff: "Mohit ",
      staffNum: "521500116124",
      details: {
        bidNo: "16515120650125",
        customer: "Sunder Yadav",
        loadingPoint: "Ramchandra Ramniwas oil mill, Alwar, Rajasthan",
        unloadingPoint: "Ramchandra Ramniwas oil mill, Alwar, Rajasthan",
        vehicleloadingdate: "17/02/2024",
        vehicleType: "20 ft Truck (Close Body)",
        material: "Agricultural Products",
        weight: "14 Tonnes",
        requestDate: "15/02/2024",
        expiryDate: "15/02/2024",
        assignedStaff: "Rahul Pandey",
        phoneNumber: "+91 332423442442",
        targetPrice: "Rs 5000",
        remarks: "Urgent Delivery",
        bidders: 54,
      },
    },
    {
      id: 2,
      bidNumber: "#122345678124",
      name: "SUNDER YADAV",
      startDate: "15/02/2024",
      time: " 05:40 PM",
      remainingTime: "5hr 10min",
      route: "Delhi → Bangalore",
      vehicle: "Container, 40ft",
      weight: "5000 Kg",
      response: '4',
      staff: "Amit ",
      staffNum: "521500116124",
      details: {
        bidNo: "16515120650126",
        customer: "Ramesh Kumar",
        loadingPoint: "Bangalore Warehouse, Karnataka",
        unloadingPoint: "Mumbai Dockyard, Maharashtra",
        vehicleType: "40 ft Container",
        vehicleloadingdate: "17/02/2024",
        material: "Electronics",
        weight: "10 Tonnes",
        requestDate: "16/02/2024",
        expiryDate: "16/02/2024",
        assignedStaff: "Suresh Patel",
        phoneNumber: "+91 9876543210",
        targetPrice: "Rs 8000",
        remarks: "Urgent Delivery",
        bidders: 42,
      },
    },
    {
      id: 3,
      bidNumber: "#122345678124",
      name: "SUNDER YADAV",
      startDate: "15/02/2024",
      time: " 05:40 PM",
      remainingTime: "5hr 10min",
      route: "Delhi → Bangalore",
      vehicle: "Container, 40ft",
      weight: "5000 Kg",
      response: '4',
      staff: "Amit ",
      staffNum: "521500116124",
      details: {
        bidNo: "16515120650126",
        customer: "Ramesh Kumar",
        loadingPoint: "Bangalore Warehouse, Karnataka",
        unloadingPoint: "Mumbai Dockyard, Maharashtra",
        vehicleType: "40 ft Container",
        vehicleloadingdate: "17/02/2024",
        material: "Electronics",
        weight: "10 Tonnes",
        requestDate: "16/02/2024",
        expiryDate: "16/02/2024",
        assignedStaff: "Suresh Patel",
        phoneNumber: "+91 9876543210",
        targetPrice: "Rs 8000",
        remarks: "Urgent Delivery",
        bidders: 42,
      },
    },
    {
      id: 4,
      bidNumber: "#122345678124",
      name: "SUNDER YADAV",
      startDate: "15/02/2024",
      time: " 05:40 PM",
      remainingTime: "5hr 10min",
      route: "Delhi → Bangalore",
      vehicle: "Container, 40ft",
      weight: "5000 Kg",
      response: '4',
      staff: "Amit ",
      staffNum: "521500116124",
      details: {
        bidNo: "16515120650126",
        customer: "Ramesh Kumar",
        loadingPoint: "Bangalore Warehouse, Karnataka",
        unloadingPoint: "Mumbai Dockyard, Maharashtra",
        vehicleType: "40 ft Container",
        vehicleloadingdate: "17/02/2024",
        material: "Electronics",
        weight: "10 Tonnes",
        requestDate: "16/02/2024",
        expiryDate: "16/02/2024",
        assignedStaff: "Suresh Patel",
        phoneNumber: "+91 9876543210",
        targetPrice: "Rs 8000",
        remarks: "Urgent Delivery",
        bidders: 42,
      },
    },
    {
      id: 5,
      bidNumber: "#122345678124",
      name: "SUNDER YADAV",
      startDate: "15/02/2024",
      time: " 05:40 PM",
      remainingTime: "5hr 10min",
      route: "Delhi → Bangalore",
      vehicle: "Container, 40ft",
      weight: "5000 Kg",
      response: '4',
      staff: "Amit ",
      staffNum: "521500116124",
      details: {
        bidNo: "16515120650126",
        customer: "Ramesh Kumar",
        loadingPoint: "Bangalore Warehouse, Karnataka",
        unloadingPoint: "Mumbai Dockyard, Maharashtra",
        vehicleType: "40 ft Container",
        vehicleloadingdate: "17/02/2024",
        material: "Electronics",
        weight: "10 Tonnes",
        requestDate: "16/02/2024",
        expiryDate: "16/02/2024",
        assignedStaff: "Suresh Patel",
        phoneNumber: "+91 9876543210",
        targetPrice: "Rs 8000",
        remarks: "Urgent Delivery",
        bidders: 42,
      },
    },
    {
      id: 6,
      bidNumber: "#122345678124",
      name: "SUNDER YADAV",
      startDate: "15/02/2024",
      time: " 05:40 PM",
      remainingTime: "5hr 10min",
      route: "Delhi → Bangalore",
      vehicle: "Container, 40ft",
      weight: "5000 Kg",
      response: '4',
      staff: "Amit ",
      staffNum: "521500116124",
      details: {
        bidNo: "16515120650126",
        customer: "Ramesh Kumar",
        loadingPoint: "Bangalore Warehouse, Karnataka",
        unloadingPoint: "Mumbai Dockyard, Maharashtra",
        vehicleType: "40 ft Container",
        vehicleloadingdate: "17/02/2024",
        material: "Electronics",
        weight: "10 Tonnes",
        requestDate: "16/02/2024",
        expiryDate: "16/02/2024",
        assignedStaff: "Suresh Patel",
        phoneNumber: "+91 9876543210",
        targetPrice: "Rs 8000",
        remarks: "Urgent Delivery",
        bidders: 42,
      },
    },
    {
      id: 7,
      bidNumber: "#122345678124",
      name: "SUNDER YADAV",
      startDate: "15/02/2024",
      time: " 05:40 PM",
      remainingTime: "5hr 10min",
      route: "Delhi → Bangalore",
      vehicle: "Container, 40ft",
      weight: "5000 Kg",
      response: '4',
      staff: "Amit ",
      staffNum: "521500116124",
      details: {
        bidNo: "16515120650126",
        customer: "Ramesh Kumar",
        loadingPoint: "Bangalore Warehouse, Karnataka",
        unloadingPoint: "Mumbai Dockyard, Maharashtra",
        vehicleType: "40 ft Container",
        vehicleloadingdate: "17/02/2024",
        material: "Electronics",
        weight: "10 Tonnes",
        requestDate: "16/02/2024",
        expiryDate: "16/02/2024",
        assignedStaff: "Suresh Patel",
        phoneNumber: "+91 9876543210",
        targetPrice: "Rs 8000",
        remarks: "Urgent Delivery",
        bidders: 42,
      },
    },
  ];



  return (
    <>

      <nav className="navbar nav-underline">
        {/* Sidebar */}
        <div className="nav1">
          <h2 className="logo p-2"><i className="bi bi-circle-fill fs-2"></i>LOGO</h2>
          <div className="">

            <div className="p-1 line sidebar">
              <span className="menu1Active  d-flex justify-content-start ps-3" >
                <i className="bi bi-columns-gap p-1"></i>
                <span className="p-1">Bid</span>
              </span>
            </div>
            <div className="p-1">
              <span className="menu1 d-flex justify-content-start ps-3" >
                <i className="bi bi-columns-gap p-1"></i>
                <span className="p-1">POD</span>
              </span>
            </div>
            <div className="p-1">
              <span className="menu1 d-flex justify-content-start ps-3" >
                <i className="bi bi-columns-gap p-1"></i>
                <span className="p-1">Vendor</span>
              </span>
            </div>
            <div className="p-1">
              <span className="menu1 d-flex justify-content-start ps-3" >
                <i className="bi bi-columns-gap p-1"></i>
                <span className="p-1 ">User</span>
              </span>
            </div>


            <div className="sidebar">
              <div className="p-1 line ">
                <span className="menu1 d-flex justify-content-start ps-3" >
                  <i className="bi bi-columns-gap p-1"></i>
                  <span className="p-1">Setting</span>
                </span>
              </div>
              <div className="p-1">
                <span className="menu1 d-flex justify-content-start ps-3" >
                  <i className="bi bi-columns-gap p-1"></i>
                  <span className="p-1">Profile</span>
                </span>
              </div>
              <div className="p-1">
                <span className="menu1 d-flex justify-content-start ps-3" >
                  <i className="bi bi-columns-gap p-1"></i>
                  <span className="p-1">Contact Us</span>
                </span>
              </div>
              <div className="p-1">
                <span className="menu1 d-flex justify-content-start ps-3" >
                  <i className="bi bi-columns-gap p-1"></i>
                  <btn className="p-1" onClick={handleSignOut}>LogOut</btn>
                </span>
              </div>
            </div>
          </div>


        </div>

        {/* Header */}
        <div className="header">
          <ul className="nav nav-underline">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/home">Bid</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/pod">POD</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/vendor">Vendor</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/user">User</a>
            </li>
            <li className="nav-item">
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" className=" ">
                  <span>
                    <i className="bi bi-person-circle p-1 fw-bolder h5"></i>
                  </span>
                  <span className="">Freight EG    </span>
                </Dropdown.Toggle>

                <Dropdown.Menu className="submenu">
                  <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                  <Dropdown.Item href="/settings">Settings</Dropdown.Item>
                  <Dropdown.Item href="/logout">Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>

          </ul>

        </div>

        <div className="bid_page">

          {/* Header */}
          <div className="d-flex justify-content-between align-items-center  p-2 header2">
            <div className="d-flex align-items-center">
              <span className="text-primary-emphasis p-3">Live</span>
              <span className="small fs-6 p-3">Results</span>
              <span className="small fs-6 p-3">History</span>
              <div className="search">
                <input type="search" placeholder="Search..." />
                <span className="search-icon">
                  <i className="bi bi-search"></i>
                </span>
              </div>
            </div>


            <div className="d-flex bg-light gap-2 create me-5 ">
              <button className="btn ps-3 pe-3"> Create <BsPlusSquareFill size={15} /> </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-grow-2 p-3 mainBody ">

            {/* Status Tabs */}
            <div className="d-flex justify-content-between align-item-center">
              <div className=" d-flex  gap-5">
                <span className="text-primary">Live (30)</span>
                <span className="text-success">Responded (30)</span>
                <span className="text-danger">Unresponded (30)</span>
              </div>
              <div className=" d-flex gap-5">
                <span className="text-dark">Bid Created</span>
                <span className="text_color">Today</span>
                <span className="text_color">Yesterday</span>
                <li className="nav-item dropdown ">
                  <a className="spe_color text-decoration-none dropdown-toggle pt-1 ps-2 pe-2 pb-1" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Celender
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <i className="bi bi-funnel-fill text-info h4 p-1"></i>
              </div>
            </div>

            <div
              style={{
                maxHeight: "400px",
                overflowY: "auto",
                borderRadius: "8px",
                scrollbarWidth: "none", // For Firefox
                msOverflowStyle: "none" // For IE and Edge
              }}>
              <table className="table text-center">
                <thead className="text-white ">
                  <tr>
                    <th>S No.</th>
                    <th>Bid Number</th>
                    <th>Start Date & Time</th>
                    <th>Bid Time Remaining</th>
                    <th>From City → To City</th>
                    <th>Vehicle Type, Size</th>
                    <th>Material Weight</th>
                    <th>Response</th>
                    <th>Assigned Staff</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  {bids.map((bid) => (
                    <React.Fragment key={bid.id}>
                      {/* Main Row */}
                      <tr>
                        <td>
                          <span className="text-success pe-2">
                            <i className="bi bi-circle-fill"></i>
                          </span>{bid.id}</td>
                        <td>{bid.bidNumber} <br /> <span className="text-secondary-emphasis small ">{bid.name}</span></td>
                        <td>
                          <span>{bid.startDate}</span><br />
                          <span className="small">{bid.time}</span>
                        </td>
                        <td>{bid.remainingTime}</td>
                        <td>{bid.route}</td>
                        <td>{bid.vehicle}</td>
                        <td>{bid.weight}</td>
                        <td className="">{bid.response} <a href="#" className="text-decoration-none d-block  p-0 text-primart"> View results</a></td>
                        <td>
                          <span>{bid.staff}</span> <br />
                          <span className="small">{bid.staffNum}</span>
                        </td>
                        <td
                          className="text-primary"
                          style={{ cursor: "pointer" }}
                          onClick={() => toggleRow(bid.id)}
                        >
                          {expandedRows.includes(bid.id) ? "View Details" : "View Details"}
                        </td>
                      </tr>

                      {/* Expanded Details Row */}
                      {expandedRows.includes(bid.id) && (
                        <tr className="viewTable">
                          <td colSpan="10">
                            <div
                              style={{
                                backgroundColor: "rgba(66, 173, 245, 0.15)",
                                padding: "15px",
                                borderRadius: "8px",
                                boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                              }}
                            >
                              <h5 className="d-flex justify-content-start fs-6">
                                Bid No: {bid.details.bidNo}  <small className="text-muted">  ({bid.details.customer})</small>
                              </h5>
                              <div className="col d-flex">
                                <div className="col-1 ">
                                  <span><i className="bi bi-circle-fill text-success fs-5 d-block p-1"></i></span>
                                  <span className="d-block fs-5 p-1"><HiOutlineArrowLongDown /></span>
                                  <span><i className="bi bi-geo-alt-fill text-danger fs-4 d-block p-1"></i></span>
                                </div>
                                <div className="col-4">
                                  <strong className="text-primary-emphasis fs-6 d-flex justify-content-start p-1">Manesar, Gurugram , <span className="text-muted">Haryana</span> </strong>
                                  <span className="d-flex p-1">
                                    <span className="text-success">LoadingPoint:</span>
                                    {bid.details.loadingPoint}
                                  </span>

                                  <strong className="text-primary-emphasis fs-6 d-flex justify-content-start p-1">Kotputli , <span className="text-muted">Rajasthan</span> </strong>
                                  <span className="d-flex p-1 ">
                                    <span className="text-danger">UnloadingPoint:</span>
                                    {bid.details.unloadingPoint}
                                  </span>
                                </div>
                                <div className="col-4">
                                  <div className="d-flex mb-2">
                                    <i className="bi bi-calendar-fill p-1"></i>
                                    <p className="m-0 p-1"><span>Vehicle Loading Date:</span>
                                      <span>{bid.details.vehicleloadingdate}</span>
                                    </p>
                                  </div>
                                  <div className="d-flex mb-2">
                                    <i className="bi bi-car-front-fill p-1 text-primary-emphasis"></i>
                                    <p className="m-0 p-1"><span className="text-primary-emphasis">Vehicle Type:</span>
                                      <span className="text-info">{bid.details.vehicleType}</span>
                                    </p>
                                  </div>
                                  <div className="d-flex justify-content-start mb-2">
                                    <p className="p-1  m-0">
                                      <i className="bi bi-box-fill text-primary-emphasis"></i>
                                      <span className="text-primary-emphasis p-1">Material:</span>
                                      <span className="text-info p-1">{bid.details.material}</span>
                                    </p>
                                    <p className="p-1  m-0">
                                      <span className="text-primary-emphasis p-1">Weight:</span>
                                      <span className="text-info p-1"> {bid.details.weight}</span>
                                    </p>
                                  </div>
                                  <div className="d-flex justify-content-start mb-2">
                                    <p className="p-1 m-0 d-flex justify-content-start">
                                      <i className="bi bi-calendar-fill text-primary-emphasis"></i>
                                      <span className="text-primary-emphasis ps-1">Request Date:</span>
                                      <span className="text-info">{bid.details.requestDate}</span>
                                    </p>
                                    <p className="p-1  m-0">
                                      <i className="bi bi-calendar-fill text-primary-emphasis"></i>
                                      <span className="text-primary-emphasis ps-1">Expiry Date:</span>
                                      <span className="text-info p-1"> {bid.details.expiryDate}</span>
                                    </p>
                                  </div>
                                  <div>
                                    <span className="text-primary-emphasis">Remarks : </span>
                                    <span className="text-info">{bid.details.remarks}</span>
                                  </div>
                                </div>
                                <div className="col-3 ">
                                  <p className="d-flex justify-content-start">
                                    <i className="bi bi-person-fill p-1 text-primary-emphasis"></i>
                                    <span className="text-primary-emphasis p-1">Assigned Staff:</span>
                                    <span className="text-info p-1">{bid.details.assignedStaff}</span>
                                  </p>
                                  <p className="d-flex justify-content-start">
                                    <i className="bi bi-telephone-fill p-1 text-primary-emphasis"></i>
                                    <span className="text-primary-emphasis p-1">Phone Number:</span>
                                    <span className="text-info p-1">{bid.details.phoneNumber}</span>
                                  </p>
                                  <p className="d-flex justify-content-start">
                                    <span className="text-primary-emphasis p-1">Target Price:</span>
                                    <span className="text-info p-1"> {bid.details.targetPrice}</span>
                                  </p>
                                  <p className="d-flex justify-content-start">
                                    <span className="text-primary-emphasis p-1">Number of Bider for this Bid:</span>
                                    <span className="text-info p-1"> {bid.details.bidders}</span>
                                  </p>

                                </div>
                              </div>
                              <button className="close-btn bg-transparent" onClick={() => toggleRow(bid.id)}>
                                View Less <i className="bi bi-caret-up-fill"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </nav >

    </>
  );
};

export default HomePage;

import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from "react-bootstrap";
import { addBids, SignOut } from "../../Services/Action/action";
import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";

const Create = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {isSubmit}=useSelector(state=>state.reducer)

    const [formData, setFormData] = useState({
        bidNumber: "",
        name: "",
        startDate: "",
        time: "",
        remainingTime: "",
        route: "",
        vehicle: "",
        weight: "",
        response: "",
        staff: "",
        staffNum: "",
        details: {
            bidNo: "",
            customer: "",
            loadingPoint: "",
            unloadingPoint: "",
            vehicleloadingdate: "",
            vehicleType: "",
            material: "",
            weight: "",
            requestDate: "",
            expiryDate: "",
            assignedStaff: "",
            phoneNumber: "",
            targetPrice: "",
            remarks: "",
            bidders: ""
        }
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => {
            if (name in prev.details) {
                return { ...prev, details: { ...prev.details, [name]: value } };
            }
            return { ...prev, [name]: value };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addBids(formData));
        console.log("Submitted Bid Data:", formData);

        setFormData({
            bidNumber: "",
            name: "",
            startDate: "",
            time: "",
            remainingTime: "",
            route: "",
            vehicle: "",
            weight: "",
            response: "",
            staff: "",
            staffNum: "",
            details: {
                bidNo: "",
                customer: "",
                loadingPoint: "",
                unloadingPoint: "",
                vehicleloadingdate: "",
                vehicleType: "",
                material: "",
                weight: "",
                requestDate: "",
                expiryDate: "",
                assignedStaff: "",
                phoneNumber: "",
                targetPrice: "",
                remarks: "",
                bidders: ""
            }
        });
    };

    const handleSignOut = () => {
        dispatch(SignOut());
        navigate('/login');
    }

    useEffect(() => {
        if (isSubmit) {
          navigate('/task');
        }
      }, [isSubmit, navigate]);

    return (
        <>
            <nav className="navbar nav-underline">
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
                                    <button className="p-1" onClick={handleSignOut}>LogOut</button>
                                </span>
                            </div>
                        </div>
                    </div>


                </div>

                {/* Header */}
                <div className="header">
                    <ul className="nav nav-underline">

                        <li className="nav-item">
                            <Link className="nav-link active" to="/home">Bid</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" href="/pod">POD</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/vendor">Vendor</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/user">User</Link>
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

                <h2 className="m-0 p-2">Create Bid</h2>
                <div className="bid_page p-4">
                    <form onSubmit={handleSubmit}>
                        {/* General Bid Information */}
                        <div className="row">
                            {[
                                { label: "Bid Number", name: "bidNumber" },
                                { label: "Customer Name", name: "name" },
                                { label: "Start Date", name: "startDate", type: "date" },
                                { label: "Time", name: "time", type: "time" },
                                { label: "Remaining Time", name: "remainingTime" },
                                { label: "Route", name: "route" },
                                { label: "Vehicle Type", name: "vehicle" },
                                { label: "Weight", name: "weight" },
                                { label: "Response", name: "response" },
                                { label: "Staff Name", name: "staff" },
                                { label: "Staff Number", name: "staffNum" }
                            ].map((field, index) => (
                                <div className="mb-3 col-md-6" key={index}>
                                    <label className="form-label">{field.label}</label>
                                    <input
                                        type={field.type || "text"}
                                        className="form-control"
                                        name={field.name}
                                        value={formData[field.name]}
                                        onChange={handleChange}

                                    />
                                </div>
                            ))}
                        </div>

                        {/* Details Section */}
                        <h4>Details</h4>
                        <div className="row">
                            {[
                                { label: "Bid No", name: "bidNo" },
                                { label: "Customer", name: "customer" },
                                { label: "Loading Point", name: "loadingPoint" },
                                { label: "Unloading Point", name: "unloadingPoint" },
                                { label: "Vehicle Loading Date", name: "vehicleloadingdate", type: "date" },
                                { label: "Vehicle Type", name: "vehicleType" },
                                { label: "Material", name: "material" },
                                { label: "Weight", name: "weight" },
                                { label: "Request Date", name: "requestDate", type: "date" },
                                { label: "Expiry Date", name: "expiryDate", type: "date" },
                                { label: "Assigned Staff", name: "assignedStaff" },
                                { label: "Phone Number", name: "phoneNumber" },
                                { label: "Target Price", name: "targetPrice" },
                                { label: "Remarks", name: "remarks" },
                                { label: "Bidders", name: "bidders", type: "number" }
                            ].map((field, index) => (
                                <div className="mb-3 col-md-6" key={index}>
                                    <label className="form-label">{field.label}</label>
                                    <input
                                        type={field.type || "text"}
                                        className="form-control"
                                        name={field.name}
                                        value={formData.details[field.name]}
                                        onChange={handleChange}

                                    />
                                </div>
                            ))}
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </nav>
        </>
    );
};

export default Create;

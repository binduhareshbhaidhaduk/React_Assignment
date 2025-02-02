import { useState } from "react";
import "./signup.css"; // Importing the external CSS file for styling
import { useNavigate } from "react-router";
import { signUp } from "../../Services/Action/action";
import { useDispatch } from "react-redux";

const SignUp = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
  // State to manage form input values
  const [signup, setSignUp] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  // Function to handle changes in input fields
  const handleInput = (e) => {
    const { name, value } = e.target; // Destructuring to get field name and value
    setSignUp({ ...signup, [name]: value }); // Updating the state dynamically
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submission

    // Check if password and confirm password match
    if (signup.password === signup.confirmpassword) {
      // Here, you can integrate Firebase authentication for user sign-up
      console.log("Sign Up Success...",signup);
      dispatch(signUp(signup.email,signup.confirmpassword));
      console.log();
      navigate('/');
    } else {
      alert("Passwords do not match!"); // Alert user if passwords don't match
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="d-flex justify-content-center">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          {/* Full Name Input */}
          <div className="input-group">
            <label>Full Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              value={signup.name}
              onChange={handleInput}
            />
          </div>

          {/* Email Input */}
          <div className="input-group">
            <label>Email</label>
            <input
            className="form-control"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              value={signup.email}
              onChange={handleInput}
            />
          </div>

          {/* Password Input */}
          <div className="input-group">
            <label>Password</label>
            <input
            className="form-control"
              type="password"
              name="password"
              placeholder="Enter your password"
              required
              value={signup.password}
              onChange={handleInput}
            />
          </div>

          {/* Confirm Password Input */}
          <div className="input-group">
            <label>Confirm Password</label>
            <input
            className="form-control"
              type="password"
              name="confirmpassword"
              placeholder="Confirm your password"
              required
              value={signup.confirmpassword}
              onChange={handleInput}
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="signup-btn">Sign Up</button>
        </form>

        {/* Redirect to Login Page */}
        <p className="m-2">
          Already have an account? <a href="/">Login</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;

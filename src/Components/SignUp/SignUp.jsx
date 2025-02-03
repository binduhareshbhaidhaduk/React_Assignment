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

  const [error, setError] = useState({
    passwordLength: false,
    passwordMatch: false,
  });

  // Function to handle changes in input fields
  const handleInput = (e) => {
    const { name, value } = e.target;
    setSignUp({ ...signup, [name]: value });

    // Validation checks
    if (name === "password") {
      setError({
        ...error,
        passwordLength: value.length < 6, // Check password length
      });
    }
    if (name === "confirmpassword") {
      setError({
        ...error,
        passwordMatch: value !== signup.password, // Check if passwords match
      });
    }
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Final validation before submitting
    if (signup.password.length < 6) {
      setError({ ...error, passwordLength: true });
      return;
    }
    if (signup.password !== signup.confirmpassword) {
      setError({ ...error, passwordMatch: true });
      return;
    }

    // If validation passes, proceed with sign-up
    console.log("Sign Up Success...", signup);
    dispatch(signUp(signup.email, signup.password));
    navigate('/');
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
              className={`form-control ${error.passwordLength ? "input-error" : ""}`}
              type="password"
              name="password"
              placeholder="Enter your password"
              required
              value={signup.password}
              onChange={handleInput}
            />
            {error.passwordLength && (
              <small className="error-text text-danger">Password must be at least 6 characters.</small>
            )}
          </div>

          {/* Confirm Password Input */}
          <div className="input-group">
            <label>Confirm Password</label>
            <input
              className={`form-control ${error.passwordMatch ? "input-error" : ""}`}
              type="password"
              name="confirmpassword"
              placeholder="Confirm your password"
              required
              value={signup.confirmpassword}
              onChange={handleInput}
            />
            {error.passwordMatch && (
              <small className="error-text text-danger">Passwords do not match.</small>
            )}
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

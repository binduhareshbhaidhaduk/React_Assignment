import { useState } from "react";
import { useNavigate } from "react-router";
import { googleLogIn, Login } from "../../Services/Action/action";
import { useDispatch, useSelector } from "react-redux";
import "./login.css";
import { FcGoogle } from "react-icons/fc";

const LogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLogin, error } = useSelector((state) => state.reducer);
  const [logIn, setLogIn] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setLogIn({ ...logIn, [name]: value });

    // Reset error message when user starts typing
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = {};

    // Email validation
    if (!logIn.email) {
      formErrors.email = "Email is required!";
    } else if (!/\S+@\S+\.\S+/.test(logIn.email)) {
      formErrors.email = "Enter a valid email!";
    }

    // Password validation (Minimum 6 characters)
    if (!logIn.password) {
      formErrors.password = "Password is required!";
    } else if (logIn.password.length < 6) {
      formErrors.password = "Password must be at least 6 characters!";
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    dispatch(Login(logIn.email, logIn.password));

    if (isLogin) {
      navigate("/home");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(googleLogIn());
    if (isLogin) {
      navigate("/home");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow-lg signup-form">
        <h2 className="d-flex justify-content-center">Log In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="d-flex justify-content-start">Email</label>
            <input
              type="email"
              className={`form-control ${errors.email && "is-invalid"}`}
              name="email"
              placeholder="Enter your email"
              required
              value={logIn.email}
              onChange={handleInput}
            />
            {errors.email && <div className="text-danger">{errors.email}</div>}
          </div>
          <div className="mb-3">
            <label className="d-flex justify-content-start">Password</label>
            <input
              type="password"
              className={`form-control ${errors.password && "is-invalid"}`}
              name="password"
              placeholder="Enter your password"
              required
              value={logIn.password}
              onChange={handleInput}
            />
            {errors.password && (
              <div className="text-danger">{errors.password}</div>
            )}
          </div>
          {error && <div className="text-danger">{error}</div>}
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
          <p>
            <button
              type="button"
              className="border-0 bg-light rounded-5  text-black p-2"
              onClick={handleLogin}
            >
              <FcGoogle className="fs-2 pe-1" />
              <strong >Log in with Google</strong>
            </button>
          </p>
        </form>
        <p className="text-center mt-3">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default LogIn;

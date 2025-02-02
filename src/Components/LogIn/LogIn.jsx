import { useState } from "react";
import { useNavigate } from "react-router";
import { googleLogIn, Login } from "../../Services/Action/action";
import { useDispatch, useSelector } from "react-redux";
import "./login.css";
import { FcGoogle } from "react-icons/fc";

const LogIn = () => {
    const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLogin } = useSelector(state => state.reducer)
  const [logIn, setLogIn] = useState({
    email: '',
    password: '',
  })

  const handleInput = (e) => {
    const { name, value } = e.target;
    setLogIn({ ...logIn, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(Login(logIn.email,logIn.password))
    if (isLogin) {
      navigate('/home');
    }
  }

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(googleLogIn());
    if (isLogin) {
      navigate('/home');
    }
  }

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="card p-4 shadow-lg signup-form">
                <h2 className="d-flex justify-content-center">Log In</h2>
                <form onSubmit={handleSubmit}> 
                    <div className="mb-3">
                        <label className="d-flex justify-content-start">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Enter your email"
                            required
                            value={logIn.email}  
                            onChange={handleInput}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="d-flex justify-content-start">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            placeholder="Enter your password"
                            required
                            value={logIn.password} 
                            onChange={handleInput}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Login</button>  
                    <p><button type='submit' className='border-0 bg-white text-black ps-2 border-1' onClick={handleLogin}><FcGoogle className='fs-2 pe-1' />Google </button></p>
                </form>
                <p className="text-center mt-3">
                    Don't have an account? <a href="/signup">Sign Up</a>
                </p>
            </div>
        </div>
    );
};

export default LogIn;

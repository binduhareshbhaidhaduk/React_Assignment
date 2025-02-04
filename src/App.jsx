import { Navigate, Route, Routes } from "react-router"
import SignUp from "./Components/SignUP/SignUp"
import LogIn from "./Components/LogIn/LogIn"
import Home from "./Components/Home/Home"
import { useSelector } from "react-redux"
import User from "./Components/User/User"
import Create from "./Components/Create/Create"

function App() {
  const { isLogin } = useSelector(state => state.reducer)
  return (
    <>
      {isLogin ? (
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/create" element={<Create />} />
          {/* Fallback to /home if no route matches */}
          <Route path="*" element={<Navigate to="/home" />} />

        </Routes>
      ) : (
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<LogIn />} />
          {/* Fallback to /login if no route matches */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}

    </>
  )
}

export default App

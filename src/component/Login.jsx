import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import loginImage from "../images/swiggy-deliver.jpg";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setUsernameError("");
    setPasswordError("");
    setLoginError("");

    if (!username || !password) {
      if (!username) setUsernameError("Please enter your username.");
      if (!password) setPasswordError("Please enter your password.");
      return;
    }

    try {
      const response = await axios.get("http://localhost:3001/users");
      const user = response.data.find(
        (user) => user.username === username && user.password === password
      );
      if (user) {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          navigate("/main");
        }, 2000);
      } else {
        alert("incorrect creditenals");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert(" error occurred while logging in. Please try again.");
    }
  };

  return (
    <div className="login_body">
      {loading ? (
        <div className="loading-screen">
          <div className="loading-spinner"></div>
          <p>Loading...</p>
        </div>
      ) : (
        <div className="login_mainconatiner">
          <div className="login_main">
            <div className="login_image">
              <img className="login_imagelogo" src={loginImage} alt="" />
            </div>
            <div className="login_input">
              <input
                className={`login_nameinput ${usernameError ? "error" : ""}`}
                placeholder={usernameError || "Username"}
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                className={`login_passordinput ${passwordError ? "error" : ""}`}
                placeholder={passwordError || "Password"}
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="login_btn">
              <button className="login_submitbtn" onClick={handleLogin}>
                Login!
              </button>
            </div>
            {loginError && <div className="login_error">{loginError}</div>}
            <div className="login_register">
              Don't have an account?
              <span className="reg_span">
                <Link className="reg_link" to="/reg">
                  Register
                </Link>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;

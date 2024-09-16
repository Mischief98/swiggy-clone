import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import resimage from "../images/swiggy_res.png";
import { Link } from "react-router-dom";
const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:3001/users", {
        username,
        password,
        email,
      });
      if (response.status === 201) {
        navigate("/");
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <main className="register_main">
      <div className="register_form">
        <div className="register-heading">
          <img src={resimage} alt="" />
        </div>
        <div className="register_inputdiv">
          <input
            className="resgister_username"
            type="text"
            required
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="register_password"
            type="password"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="register_email"
            type="email"
            required
            placeholder="Email Id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="btn_reg">
          <button className="register_submitbtn" onClick={handleRegister}>
            Submit
          </button>
        </div>
        <div className="register_request">
          Already have an account!
          <span className="register_span">
            <Link className="register_link" to="/">Login</Link>
          </span>
        </div>
      </div>
    </main>
  );
};

export default Register;

import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = () => {
    if (user === "user" && pass === "1234") {
      alert("Login Successful ✅");
      navigate("/destinations");
    } else {
      alert("Invalid username or password ❌");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "80vh" }}
    >
      <div className="card p-4 shadow" style={{ width: "400px" }}>
        <h3 className="text-center mb-3">Login</h3>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter username"
          onChange={(e) => setUser(e.target.value)}
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Enter password"
          onChange={(e) => setPass(e.target.value)}
        />

        <button className="btn btn-primary w-100" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
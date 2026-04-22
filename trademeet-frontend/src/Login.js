import { useState } from "react";
import API from "./api";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };
  
  const buttonStyle = {
    width: "100%",
    padding: "10px",
    background: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold"
  };

  const handleLogin = async () => {
    try {
      const res = await API.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      alert("Login successful");
      navigate("/dashboard");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "linear-gradient(to right, #667eea, #764ba2)"
    }}>
      <div style={{
        background: "white",
        padding: "30px",
        borderRadius: "10px",
        width: "320px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
      }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Welcome Back
        </h2>
    
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />
    
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />
    
        <button onClick={handleLogin} style={buttonStyle}>
          Login
        </button>
    
        <p style={{ textAlign: "center", marginTop: "15px" }}>
          Don’t have an account?{" "}
          <span 
            onClick={() => navigate("/")}
            style={{ color: "#007BFF", cursor: "pointer" }}
          >
            Signup
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
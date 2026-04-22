import { useEffect, useState } from "react";
import API from "./api";
import { useNavigate } from "react-router-dom";

function Dashboard() {

  const [holdings, setHoldings] = useState([]);
  const [stockName, setStockName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    fetchHoldings();
  }, []);

  const fetchHoldings = async () => {
    const res = await API.get("/holdings");
    setHoldings(res.data);
  };

  const addHolding = async () => {
    await API.post("/holdings", { stockName, quantity, price });
    fetchHoldings();
    setStockName("");
    setQuantity("");
    setPrice("");
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div style={{ 
      padding: "30px", 
      fontFamily: "Arial", 
      background: "#f4f6f9",
      minHeight: "100vh"
    }}>
    
      {/* Header */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "30px"
      }}>
        <h1 style={{ color: "#333" }}>📊 TradeMeet Dashboard</h1>
    
        <div>
          <button 
            onClick={() => navigate("/video")}
            style={{
              marginRight: "10px",
              padding: "10px 15px",
              background: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            📹 Video Call
          </button>
    
          <button 
            onClick={handleLogout}
            style={{
              padding: "10px 15px",
              background: "#f44336",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Logout
          </button>
        </div>
      </div>
    
      {/* Add Holding Card */}
      <div style={{
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        marginBottom: "30px"
      }}>
        <h3 style={{ marginBottom: "15px" }}>Add New Holding</h3>
    
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <input
            placeholder="Stock Name"
            value={stockName}
            onChange={(e) => setStockName(e.target.value)}
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              flex: "1"
            }}
          />
    
          <input
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              flex: "1"
            }}
          />
    
          <input
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              flex: "1"
            }}
          />
    
          <button 
            onClick={addHolding}
            style={{
              padding: "10px 20px",
              background: "#2196F3",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Add
          </button>
        </div>
      </div>
    
      {/* Holdings Section */}
      <h3 style={{ marginBottom: "15px", color: "#333" }}>Your Holdings</h3>
    
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "20px"
      }}>
        {holdings.map((item) => (
          <div key={item._id} style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            transition: "0.3s"
          }}>
            <h4 style={{ marginBottom: "10px" }}>{item.stockName}</h4>
            <p>Qty: {item.quantity}</p>
            <p style={{ color: "#4CAF50", fontWeight: "bold" }}>
              ₹{item.price}
            </p>
          </div>
        ))}
      </div>
    
    </div>
  );
}

export default Dashboard;
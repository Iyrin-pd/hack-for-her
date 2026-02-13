function SOS() {
    const sendSOS = () => {
      alert("🚨 SOS sent to your emergency contacts!");
    };
  
    return (
      <div
        style={{
          background: "#ffe5e5",
          padding: "15px",
          borderRadius: "15px"
        }}
      >
        <h2>🚨 Emergency SOS</h2>
        <p style={{ color: "#555" }}>
          One tap to alert trusted contacts
        </p>
  
        <button
          onClick={sendSOS}
          style={{
            width: "100%",
            padding: "15px",
            background: "#e63946",
            color: "white",
            border: "none",
            borderRadius: "30px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          SEND SOS
        </button>
      </div>
    );
  }
  
  export default SOS;
  
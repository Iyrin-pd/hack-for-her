import { useState, useEffect } from "react";
import { auth } from "./firebase";

export default function PeriodTracker() {
  const [startDate, setStartDate] = useState("");
  const [cycleLength, setCycleLength] = useState("");
  const [history, setHistory] = useState([]);

  const userId = auth.currentUser?.uid;

  useEffect(() => {
    if (!userId) return;
    const saved = JSON.parse(localStorage.getItem(`periods_${userId}`)) || [];
    setHistory(saved);
  }, [userId]);

  const saveData = () => {
    if (!startDate || !cycleLength) {
      alert("Please fill all fields");
      return;
    }

    const newEntry = {
      startDate,
      cycleLength,
      createdAt: new Date().toISOString(),
    };

    const updated = [...history, newEntry];
    setHistory(updated);
    localStorage.setItem(`periods_${userId}`, JSON.stringify(updated));

    setStartDate("");
    setCycleLength("");
  };

  return (
    <div style={styles.card}>
      <h3>Period Tracker</h3>

      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        style={styles.input}
      />

      <input
        type="number"
        placeholder="Cycle length (days)"
        value={cycleLength}
        onChange={(e) => setCycleLength(e.target.value)}
        style={styles.input}
      />

      <button onClick={saveData} style={styles.button}>
        Save
      </button>

      {history.length > 0 && (
        <div style={{ marginTop: "15px" }}>
          <h4>Your History</h4>
          {history.map((item, index) => (
            <p key={index}>
              {item.startDate} — {item.cycleLength} days
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  card: {
    maxWidth: "360px",
    padding: "20px",
    borderRadius: "12px",
    background: "#f8f0fc",
    marginTop: "20px",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "8px 0",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "#7b2cbf",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

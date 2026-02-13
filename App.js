import React, { useEffect, useState } from "react";
import { auth } from "./firebase";

import Auth from "./auth/Auth";
import PeriodTracker from "./PeriodTracker";
import SOS from "./SOS";
import Opportunities from "./Opportunities";

import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  // Listen for login / logout
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  // If user NOT logged in → show login page
  if (!user) {
    return <Auth />;
  }

  // If user IS logged in → show main app
  return (
    <div className="app-container">
      <div className="header">
        <div className="app-title">Shi 🌸</div>

        <button
          className="logout-btn"
          onClick={() => auth.signOut()}
        >
          Logout
        </button>
      </div>

      <div className="card">
        <PeriodTracker />
      </div>

      <div className="card">
        <SOS />
      </div>

      <div className="card">
        <Opportunities />
      </div>
    </div>
  );
}

export default App;

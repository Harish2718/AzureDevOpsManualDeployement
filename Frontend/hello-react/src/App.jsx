import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:8080/greeting")
      .then((response) => response.json())
      .then((data) => setMessage(data.content))
      .catch(() => setMessage("Could not connect to Java backend"));
  }, []);

  return (
    <div className="App">
      <h1>Java + React Application</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
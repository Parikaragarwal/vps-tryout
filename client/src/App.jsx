import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    (async function setData() {
      const res = await fetch("http://46.225.87.125:8212");
      const data = await res.json();
      setMessage(data.message);
    })();
  }, []);
  return <h1>Hello from Server: {message}</h1>;
}

export default App;

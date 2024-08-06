import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { UseDoorProvider } from "./components/events.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UseDoorProvider>
      <App />
    </UseDoorProvider>
  </React.StrictMode>
)

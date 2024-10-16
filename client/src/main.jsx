import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ParsedDataProvider } from "./context/parsedDataContext.jsx";

createRoot(document.getElementById("root")).render(
  <ParsedDataProvider>
    <App />
  </ParsedDataProvider>
);

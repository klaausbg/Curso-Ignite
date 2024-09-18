import React from "react";
import ReactDOM from "react-dom/client"; // Use the React 18 API for rendering
import { App } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")!); // Non-null assertion to ensure TypeScript knows 'root' will exist
root.render(<App />);

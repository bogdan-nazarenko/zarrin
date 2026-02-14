import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/helpers/reset.scss";
import "./styles/helpers/variables.scss";
import "./styles/fonts.scss";
import "./styles/main.scss";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);

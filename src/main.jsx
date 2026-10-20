import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { store } from "@data/store";
import "@styles/index.scss";
import App from "./App";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter basename="/zarrin/">
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </StrictMode>
);

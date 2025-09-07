import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AuthDataProvider from "./context/AuthDataProvider.jsx";
import UserContext from "./context/userContext.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthDataProvider>
        <UserContext>
        <App />
        </UserContext>
      </AuthDataProvider>
    </BrowserRouter>
  </StrictMode>
);

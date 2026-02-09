import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";

import "./index.css";
import App from "./App.jsx";
import IssuesPage from "./pages/IssuesPage.jsx";
import IssuePage from "./pages/IssuePage.jsx";
import NewIssuePage from "./pages/NewIssuePage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Navigate to="issues" replace />} />
          <Route path="issues" element={<IssuesPage />} />
          <Route path="issues/new" element={<NewIssuePage />} />
          <Route path="issues/:issueId" element={<IssuePage />} />
          <Route path="*" element={<h2>404</h2>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

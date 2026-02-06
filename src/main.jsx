import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";

import "./index.css";
import App from "./App.jsx";
import Issues from "./Issues.jsx";
import Issue from "./Issue.jsx";
import New from "./New.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Navigate to="issues" replace />} />
          <Route path="issues" element={<Issues />} />
          <Route path="issues/new" element={<New />} />
          <Route path="issues/:issueId" element={<Issue />} />
          <Route path="*" element={<h2>404</h2>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

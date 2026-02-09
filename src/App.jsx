import { Outlet, NavLink } from "react-router";

function App() {
  return (
    <div>
      <header>
        <h1>IssueTracker</h1>
        <nav style={{ display: "flex", gap: 12 }}>
          <NavLink to="/issues">Issues</NavLink>
          <NavLink to="/issues/new">New</NavLink>
        </nav>
      </header>

      <main style={{ marginTop: 16 }}>
        <Outlet />
      </main>
    </div>
  );
}

export default App;

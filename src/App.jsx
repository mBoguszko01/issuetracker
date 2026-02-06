import { Outlet, NavLink } from "react-router";

function App() {
  return (
    <div>
      <header>
        <h1>IssueTracker</h1>
      </header>

      <main style={{ marginTop: 16 }}>
        <Outlet />
      </main>
    </div>
  );
}

export default App;

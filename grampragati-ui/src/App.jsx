import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import VillagerDashboard from "./pages/villagerdashboard";
import VolunteerDashboard from "./pages/volunteerdashboard";

function App() {
  return (
    <Router>
      <div className="p-4 text-center">
        <h1 className="text-2xl font-bold mb-4">🌾 GramPragati</h1>
        <nav className="space-x-4 mb-4">
          <Link to="/" className="text-blue-500 hover:underline">Home</Link>
          <Link to="/villager" className="text-green-600 hover:underline">Villager</Link>
          <Link to="/volunteer" className="text-purple-600 hover:underline">Volunteer</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/villager" element={<VillagerDashboard />} />
          <Route path="/volunteer" element={<VolunteerDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

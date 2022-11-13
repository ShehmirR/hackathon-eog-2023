import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "./Dashboard/Dashboard";
import Analytics from "./Analytics/Analytics";
import InfluencerSearch from "./InfluencerSearch/InfluencerSearch";

function App() {
  // All the routing is set here

  // Styling to check changes for now and build components
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/campaign/:id/analytics" element={<Analytics />} />
        <Route path="/campaign/:id/search" element={<InfluencerSearch />} />
        <Route path="/campaign/:id/people" element={<InfluencerSearch />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;

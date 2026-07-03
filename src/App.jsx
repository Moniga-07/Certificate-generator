import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Admin from "./pages/Admin";
import MyCertificates from "./pages/MyCertificates";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/certificates" element={<MyCertificates />} />
    </Routes>
  );
}

export default App;
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Level from "./pages/Level.jsx";
import Congrats from "./pages/Congrats.jsx";
import End from "./pages/End.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nivel/:levelId" element={<Level />} />
      <Route path="/parabens/:levelId" element={<Congrats />} />
      <Route path="/fim" element={<End />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}


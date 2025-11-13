import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MemeDetails from "./pages/MemeDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meme/:id" element={<MemeDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

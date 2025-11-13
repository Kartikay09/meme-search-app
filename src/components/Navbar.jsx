import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white/60 backdrop-blur shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link className="text-3xl font-bold text-gray-800" to="/">
          Meme Search
        </Link>
      </div>
    </nav>
  );
}

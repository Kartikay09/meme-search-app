import { Link } from "react-router-dom";

export default function MemeCard({ meme }) {
  return (
    <Link
      to={`/meme/${meme.id}`}
      className="bg-white rounded-xl p-4 shadow hover:shadow-xl transition hover:-translate-y-1"
    >
      <img
        src={meme.url}
        alt={meme.name}
        className="h-40 w-full object-cover rounded-lg"
      />

      <h2 className="font-semibold mt-3 text-center text-gray-700 line-clamp-1">
        {meme.name}
      </h2>

      <p className="text-sm text-gray-500 text-center">
        {meme.width} × {meme.height}
      </p>
    </Link>
  );
}

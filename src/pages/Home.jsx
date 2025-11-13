import { useEffect, useState } from "react";
import MemeCard from "../components/MemeCard";
import Loader from "../components/Loader";

export default function Home() {
  const [memes, setMemes] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        setMemes(data.data.memes);
        setLoading(false);
      });
  }, []);

  // Scroll to top when search changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [search]);

  // Filter logic
  const filteredMemes = memes.filter((meme) =>
    meme.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Meme Search
      </h1>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto flex items-center bg-white rounded-xl shadow-md overflow-hidden mb-10">
        <input
          type="text"
          placeholder="Search memes..."
          className="w-full p-4 text-lg outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button className="bg-gray-800 text-white px-4 py-4 hover:bg-gray-700">
          🔍
        </button>
      </div>

      {/* BEFORE SEARCH — Show Nothing (Like Emoji Search UI) */}
      {search.length === 0 && (
        <h2 className="text-center text-lg text-gray-600">
          Start typing to search memes...
        </h2>
      )}

      {/* SHOW RESULTS ONLY WHEN SEARCH IS TYPED */}
      {search.length > 0 && (
        <div>
          {/* Loading Skeleton */}
          {loading ? (
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[...Array(8)].map((_, i) => (
                <Loader key={i} />
              ))}
            </div>
          ) : (
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {filteredMemes.length > 0 ? (
                filteredMemes.map((meme) => (
                  <MemeCard key={meme.id} meme={meme} />
                ))
              ) : (
                <p className="text-center text-gray-700 col-span-full">
                  No results found
                </p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

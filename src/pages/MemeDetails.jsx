import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function MemeDetails() {
  const { id } = useParams();
  const [meme, setMeme] = useState(null);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        const found = data.data.memes.find((m) => m.id === id);
        setMeme(found);
      });
  }, [id]);

  if (!meme)
    return <div className="text-center py-20 text-xl">Loading...</div>;

  return (
    <div className="text-center">
      <Link to="/" className="text-blue-600 underline">
        ← Back
      </Link>

      <div className="mt-8 flex flex-col items-center">
        <img
          src={meme.url}
          className="max-w-md rounded-xl shadow"
          alt={meme.name}
        />

        <h1 className="text-3xl font-bold mt-6 text-gray-800">
          {meme.name}
        </h1>

        <p className="text-gray-600 mt-2">
          {meme.width}px × {meme.height}px
        </p>
      </div>
    </div>
  );
}

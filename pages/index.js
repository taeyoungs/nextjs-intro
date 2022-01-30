import { useEffect, useState } from 'react';

const API_KEY = '93938de29ee06b9d46369c6d6d363f01';

export default function Home() {
  const [movies, setMovies] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      );
      const { results } = await response.json();

      setMovies(results);
    })();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <h4 key={movie.id}>{movie.original_title}</h4>
      ))}
    </div>
  );
}

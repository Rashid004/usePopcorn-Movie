/** @format */

export default function WatchedMovie({ movie, onDeleteWatched }) {
  // Helper function to safely format ratings
  const formatRating = (rating) => {
    return typeof rating === "number" ? rating.toFixed(2) : "N/A";
  };

  return (
    <li>
      <img src={movie.poster} alt={`${movie.title} poster`} />
      <h3>{movie.title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{formatRating(movie.imdbRating)}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{formatRating(movie.userRating)}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime ? `${movie.runtime} min` : "N/A"}</span>
        </p>
        <button
          className="btn-delete"
          onClick={() => onDeleteWatched(movie.imdbID)}
        >
          X
        </button>
      </div>
    </li>
  );
}

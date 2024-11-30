import { useParams } from "react-router-dom";

function UpcomingMovies() {
  const { movie } = useParams();

  return (
    <div>
      <h1>Coming Soon: {movie}</h1>
    </div>
  );
}

export default UpcomingMovies;

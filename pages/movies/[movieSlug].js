import { useRouter } from "next/router";
import { movies } from "../../lib/data";

export default function MovieDetails({ user }) {
  const router = useRouter();

  const movieDetails = movies.find(
    (movie) => movie.slug === router.query.movieSlug
  );

  if (!movieDetails) {
    return (
      <div>
        <p>The movie {router.query.movieSlug} does not exist in our database</p>
      </div>
    );
  }

  return (
    <div>
      <h1>{movieDetails.title}</h1>
      <p>{movieDetails.description}</p>
      <p>{movieDetails.year}</p>
      <p>Logged in User: {user}</p>
    </div>
  );
}

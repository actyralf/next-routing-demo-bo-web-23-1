import Link from "next/link";
import Image from "next/image";
import Button from "../../components/Button";
import { useRouter } from "next/router";
import { movies } from "../../lib/data";
import { useState } from "react";

export default function Movies({ user, onChangeUser }) {
  // const [user, setUser] = useState(null);
  const router = useRouter();
  return (
    <div>
      <h1>Movies</h1>
      <Image
        src="https://images.unsplash.com/photo-1542204165-65bf26472b9b"
        alt="movies image"
        height={200}
        width={800}
      />
      <ul>
        {movies.map((movie) => {
          return (
            <li key={movie.id}>
              <Link href={`/movies/${movie.slug}`}>{movie.title}</Link>
            </li>
          );
        })}
      </ul>

      <Button
        onClick={() => {
          if (confirm("Wollen Sie wirklich auf die Homepage wechseln?")) {
            router.push("/");
          }
        }}
      >
        Test router.push()
      </Button>

      <Button
        onClick={() => {
          onChangeUser("Martin");
        }}
      >
        Change user to Martin
      </Button>

      <p>Logged in user: {user}</p>
    </div>
  );
}

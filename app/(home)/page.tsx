import Link from "next/link";

export const metadata = {
  title: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

const getMovieData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("백엔드에서 발생");
  const res = await fetch(API_URL, {
    next: {
      revalidate: 60,
    },
  });
  const movieData = await res.json();
  return movieData;
};

export default async function Partice() {
  const data = await getMovieData();
  console.log(data);
  return (
    <div>
      {data.map((movie) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}{" "}
    </div>
  );
}

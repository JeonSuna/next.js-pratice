import { API_URL } from "../app/(home)/page";

async function getMovie(id: string) {
  console.log(`fetching data  ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const res = await fetch(`${API_URL}/${id}`);

  const data = await res.json();
  return data;
}

//UI만 갖기
export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return <h6 className="bg-red-100">{JSON.stringify(movie)}</h6>;
}

//server component
// movie info 랑 movie videos를 각 파일에서 개별적으로 기다리게 한다

import { getAnimeResponse } from "@/libs/apiLibs";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async ({ params }) => {
  const { keyword } = params;
  const searchAnime = await getAnimeResponse("anime", `q=${keyword}`)

  return (
    <>
      <section>
        <Header
          title={`Result For ${decodeURIComponent(keyword)}`}
        />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Page;

import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "@/libs/apiLibs";

const Page = async () => {
  
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  const topSeason = await getAnimeResponse("seasons/now", "limit=8");
  let recommended = await getNestedAnimeResponse("recommendations/anime", "entry")
  recommended = reproduce(recommended, 8)

  return (
    <>
      <section>
        <Header
          title="Most Popular"
          linkTitle={"See All"}
          linkHref={"/popular"}
        />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header
          title="Recomended"
        />
        <AnimeList api={recommended} />
      </section>
      <section>
        <Header title="Seasons" linkTitle={"See All"} linkHref={"/seasons"} />
        <AnimeList api={topSeason} />
      </section>
    </>
  );
};

export default Page;

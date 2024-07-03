import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";

const { getAnimeResponse } = require("@/libs/apiLibs");

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);

  return (
    <>
      <div className="pt-4 px-4">
        <h3 className="text-color-primary text-xl font-medium">
          {anime.data.title} - {anime.data.year}
        </h3>
      </div>
      <div className="pt-2 px-4 text-color-primary flex-wrap flex gap-1 sm:gap-4 sm:flex-row flex-col h-16 sm:h-auto w-full">
        <h3>Rank : {anime.data.rank}</h3>
        <h3>Popularity : {anime.data.popularity}</h3>
        <h3>Score : {anime.data.score}</h3>
        <h3>Episode : {anime.data.episodes}</h3>
      </div>
      <div className="py-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-color-primary">
        <Image
          src={anime.data.images.webp.image_url}
          alt={anime.data.images.jpg.image_url}
          width={250}
          height={250}
          className="w-full rounded-xl object-cover sm:max-w-80 sm:min-w-52"
        />
        <p>{anime.data.synopsis}</p>
      </div>
      <div>
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
    </>
  );
};

export default Page;

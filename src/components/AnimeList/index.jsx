import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <div className="grid lg:grid-cols-4 grid-cols-1 gap-4 px-4 mb-5 sm:grid-cols-3">
      {api.data?.map((anime, index) => {
        return (
          <Link href={`/anime/${anime.mal_id}`} className="cursor-pointer hover:scale-105 transition-all shadow-lg rounded-lg bg-color-secondary  text-color-primary hover:text-color-accent mb-4"
          key={index}>
            <Image
              src={anime.images.webp.image_url}
              alt="..."
              width={350}
              height={350}
              className="rounded-tr-lg rounded-tl-lg object-cover md:h-96 "
            />
            <h3 className="text-center font-bold text-md p-5 md:text-xl">
              {anime.title} 
            </h3>
          </Link>
        );
      })}
    </div>
  );
};

export default AnimeList;

"use client";

import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import React, { useEffect, useState } from "react";
import { getAnimeResponse } from "@/libs/apiLibs";

const Page = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]); 

  const fetchData = async () => {
    const topSeasons = await getAnimeResponse("seasons/now", `limit=24&page=${page}`)
    setData(topSeasons)
  };

  useEffect(() => {
    fetchData()
  }, [page])

  return (
    <>
      <HeaderMenu title={`Season Anime Page ${page}`}/>
      <AnimeList api={data}/>
      <Pagination page={page} setPage={setPage} pagination={data.pagination}/>
    </>
  );
};

export default Page;

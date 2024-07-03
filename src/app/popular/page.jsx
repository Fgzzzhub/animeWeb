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
    const popular = await getAnimeResponse("top/anime", `limit=8&page=${page}`)
    setData(popular)
  };

  useEffect(() => {
    fetchData()
  }, [page])

  return (
    <>
      <HeaderMenu title={`Popular Anime Page ${page}`}/>
      <AnimeList api={data}/>
      <Pagination page={page} setPage={setPage} pagination={data.pagination}/>
    </>
  );
};

export default Page;

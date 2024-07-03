"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (e) => {
    const keyword = searchRef.current.value;

    if (!keyword || keyword.trim() == "") return;

    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();
      router.push(`/search/${keyword}`);
    }
  };

  return (
    <div className="relative">
      <input
        placeholder="Search..."
        className="px-3 rounded-lg text-sm w-44 md:py-0 py-1"
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button
        className="absolute top-1 end-1"
        onClick={handleSearch}
        type="submit"
      >
        <MagnifyingGlass size={18} />
      </button>
    </div>
  );
};

export default InputSearch;

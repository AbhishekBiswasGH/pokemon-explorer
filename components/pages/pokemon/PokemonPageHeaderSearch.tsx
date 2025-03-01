"use client";

// icons
import { SearchIcon } from "lucide-react";

// hooks
import { useState } from "react";
import { useRouter } from "next/navigation";

// types
import type { ChangeEvent } from "react";

export default function PokemonPageHeaderSearch() {
  // hooks
  const { push } = useRouter();

  // states
  const [keyword, setKeyword] = useState<string>("");

  // event handlers
  const handleSearch = () => {
    if (keyword) {
      push(`/?search=${keyword}`);
    }
  };

  const handleChangeKeyword = ({
    target: { value }
  }: ChangeEvent<HTMLInputElement>) => {
    setKeyword(value);
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex gap-4 rounded-xl bg-[#27272a] px-4 py-3 sm:max-w-[800px] sm:min-w-[540px] sm:justify-self-center">
      <input
        type="search"
        placeholder="Search for a Pokémon"
        value={keyword}
        onKeyDown={handleKeyDown}
        onChange={handleChangeKeyword}
        className="flex-1 focus:border-none focus:outline-none"
      />
      <SearchIcon
        className="cursor-pointer"
        onClick={handleSearch}
      />
    </div>
  );
}

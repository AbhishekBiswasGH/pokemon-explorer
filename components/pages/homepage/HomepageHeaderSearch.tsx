"use client";

// icons
import { SearchIcon } from "lucide-react";

// utils
import { debounce } from "lodash";

// hooks
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

// types
import type { ChangeEvent } from "react";

export default function HomepageHeaderSearch({
  search
}: {
  search?: string;
}) {
  // hooks
  const { push } = useRouter();

  // states
  const [keyword, setKeyword] = useState<string>(
    search || ""
  );

  // event handlers
  const debouncedSearch = useMemo(
    () =>
      debounce((value: string) => {
        push(value ? `/?search=${value}` : "/");
      }, 300),
    [push]
  );

  const handleChangeKeyword = ({
    target: { value }
  }: ChangeEvent<HTMLInputElement>) => {
    setKeyword(value);
    debouncedSearch(value);
  };

  return (
    <div className="flex gap-4 rounded-xl bg-[#27272a] px-4 py-3 sm:max-w-[800px] sm:min-w-[540px] sm:justify-self-center">
      <input
        type="search"
        placeholder="Search for a Pokémon"
        value={keyword}
        onChange={handleChangeKeyword}
        className="flex-1 focus:border-none focus:outline-none"
      />
      <SearchIcon className="cursor-pointer" />
    </div>
  );
}

// components
import Image from "next/image";

// types
import type { PokemonListItem } from "@/types/pokemon";
import Link from "next/link";

export default async function HomepagePokemonListItem({
  listItem: { id, name }
}: {
  listItem: PokemonListItem;
}) {
  return (
    <Link
      href={`/pokemon/${id}`}
      className="flex flex-col items-center gap-8 rounded-lg bg-[#27272a] p-4 shadow-md"
    >
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
        alt={name}
        title={name}
        height={100}
        width={100}
        unoptimized
        className="flex-1"
      />
      <span className="line-clamp-1 capitalize">
        {name.split("-").join(" ")}
      </span>
    </Link>
  );
}

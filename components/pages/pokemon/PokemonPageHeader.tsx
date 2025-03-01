// icons
import Link from "next/link";
import PokemonIcon from "../../icons/PokemonIcon";

// components
import PokemonPageHeaderSearch from "./PokemonPageHeaderSearch";

export default async function PokemonPageHeader() {
  return (
    <header className="grid grid-cols-[50px_1fr] items-center justify-between gap-4 p-4 sm:grid-cols-[50px_1fr_50px]">
      <Link href={"/"}>
        <PokemonIcon
          height={50}
          width={50}
        />
      </Link>
      <PokemonPageHeaderSearch />
    </header>
  );
}

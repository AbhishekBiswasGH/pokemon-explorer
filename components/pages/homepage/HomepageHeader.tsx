// icons
import PokemonIcon from "../../icons/PokemonIcon";

// components
import HomepageHeaderSearch from "./HomepageHeaderSearch";

export default async function HomepageHeader({
  search
}: {
  search?: string;
}) {
  return (
    <header className="grid grid-cols-[50px_1fr] items-center justify-between gap-4 p-4 sm:grid-cols-[50px_1fr_50px]">
      <PokemonIcon
        height={50}
        width={50}
      />
      <HomepageHeaderSearch search={search} />
    </header>
  );
}

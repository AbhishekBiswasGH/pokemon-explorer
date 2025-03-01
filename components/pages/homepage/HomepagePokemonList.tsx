// components
import HomepagePokemonListItem from "./HomepagePokemonListItem";

// types
import type { PokemonListItem } from "@/types/pokemon";

export default function HomepagePokemonList({
  list,
  search
}: {
  list: PokemonListItem[];
  search?: string;
}) {
  return (
    <section>
      <section>
        <span className="p-4">{`${list.length} Pokémon`}</span>
      </section>
      {list.length ? (
        <section className="grid grid-cols-3 gap-4 p-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
          {list
            .slice(0, search ? list.length : 60)
            .map((listItem) => (
              <HomepagePokemonListItem
                key={listItem.id}
                listItem={listItem}
              />
            ))}
        </section>
      ) : (
        <section className="flex h-[60dvh] w-full items-center justify-center">
          <span className="text-3xl">No Pokémon Found</span>
        </section>
      )}
    </section>
  );
}

// components
import PokemonPageAbilities from "@/components/pages/pokemon/PokemonPageAbilities";
import PokemonPageBasicInfo from "@/components/pages/pokemon/PokemonPageBasicInfo";
import PokemonPageHeader from "@/components/pages/pokemon/PokemonPageHeader";
import PokemonPageMoves from "@/components/pages/pokemon/PokemonPageMoves";
import PokemonPageStats from "@/components/pages/pokemon/PokemonPageStats";
import PokemonPageTypes from "@/components/pages/pokemon/PokemonPageTypes";

// types
import type { Pokemon } from "@/types/pokemon";

export default async function PokemonPage({
  pokemon
}: {
  pokemon: Pokemon;
}) {
  if (pokemon) {
    const {
      id,
      name,
      height,
      weight,
      experience,
      stats,
      types,
      abilities,
      moves
    } = pokemon;

    return (
      <>
        <PokemonPageHeader />
        <main className="px-4">
          <section className="grid grid-cols-1 py-8 sm:grid-cols-2">
            <PokemonPageBasicInfo
              id={id}
              name={name}
              height={height}
              weight={weight}
              experience={experience}
            />
            <PokemonPageStats stats={stats} />
          </section>
          <PokemonPageTypes types={types} />
          <PokemonPageAbilities abilities={abilities} />
          <PokemonPageMoves moves={moves} />
        </main>
      </>
    );
  }

  return <></>;
}

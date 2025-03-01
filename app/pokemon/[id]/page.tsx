// next config
export const experimental_ppr = true;

// utils
import { notFound } from "next/navigation";
import { getPokemon } from "@/utils/pokemon";

// components
import PokemonPage from "@/pages/PokemonPage";

export default async function Home({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const pokemon = await getPokemon({ id });

  if (!pokemon) {
    notFound();
  }

  return <PokemonPage pokemon={pokemon} />;
}

// components
import HomepageHeader from "@/components/pages/homepage/HomepageHeader";
import HomepageHero from "@/components/pages/homepage/HomepageHero";
import HomepagePokemonList from "@/components/pages/homepage/HomepagePokemonList";

// types
import { searchPokemon } from "@/utils/search";

export default async function Homepage({
  search
}: {
  search?: string;
}) {
  const list = await searchPokemon({ keyword: search });

  return (
    <>
      <HomepageHeader search={search} />
      <main>
        <HomepageHero />
        <HomepagePokemonList
          list={list}
          search={search}
        />
      </main>
    </>
  );
}

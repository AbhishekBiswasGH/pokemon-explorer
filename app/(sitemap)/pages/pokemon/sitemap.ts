// constants
import {
  API,
  DOMAIN
} from "@/constants/environmentVariables";

// types
import type { PokeAPIListResponse } from "@/types/pokeAPI";
import type { Sitemap } from "@/types/sitemap";

export default async function Sitemap(): Promise<Sitemap> {
  const response = await fetch(
    `${API}/pokemon?offset=0&limit=10000`
  )
    .then(
      (res) => res.json() as Promise<PokeAPIListResponse>
    )
    .catch(() => null);

  const sitemap: Sitemap = response
    ? response.results.map(({ url }) => ({
        url: `${DOMAIN}/pages/pokemon/${url.split(`${API}/pokemon/`)[1].split("/")[0]}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "weekly",
        priority: 0.8
      }))
    : [];

  return sitemap;
}

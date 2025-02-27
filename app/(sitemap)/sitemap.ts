// constants
import { DOMAIN } from "@/constants/environmentVariables";

// types
import type { Sitemap } from "@/types/sitemap";

export default function Sitemap(): Sitemap {
  return [
    {
      url: DOMAIN,
      changeFrequency: "weekly",
      lastModified: new Date().toISOString(),
      priority: 1
    },
    {
      url: `${DOMAIN}/pages/pokemon/sitemap.xml`,
      changeFrequency: "weekly",
      lastModified: new Date().toISOString(),
      priority: 0.9
    }
  ];
}

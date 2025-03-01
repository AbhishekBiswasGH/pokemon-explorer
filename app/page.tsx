// next config
export const experimental_ppr = true;

// components
import Homepage from "@/pages/Homepage";

export default async function Home({
  searchParams
}: {
  searchParams: Promise<{ search?: string }>;
}) {
  const { search } = await searchParams;

  return <Homepage search={search} />;
}

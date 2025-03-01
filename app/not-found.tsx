// next config
export const experimental_ppr = true;

// components
import Link from "next/link";
import PokemonPageHeader from "@/components/pages/pokemon/PokemonPageHeader";

export default async function NotFound() {
  return (
    <>
      <PokemonPageHeader />
      <main className="flex h-[80dvh] w-full flex-col items-center justify-center gap-4">
        <h1 className="text-3xl">Page Not Found</h1>
        <Link href={"/"}>back to Homepage</Link>
      </main>
    </>
  );
}

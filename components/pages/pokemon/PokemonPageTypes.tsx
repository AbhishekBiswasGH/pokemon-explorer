export default async function PokemonPageTypes({
  types
}: {
  types: string[];
}) {
  return (
    <section className="grid grid-cols-1 items-start justify-start gap-4 py-4 sm:grid-cols-[150px_1fr] sm:gap-0">
      <h3 className="text-lg font-bold uppercase underline sm:text-xl">
        types
      </h3>
      <section className="flex gap-4">
        {types.map((type, i) => (
          <span
            key={i}
            className="rounded-lg border border-[#64646c] px-2 py-1 text-sm capitalize sm:text-lg"
          >
            {type}
          </span>
        ))}
      </section>
    </section>
  );
}
